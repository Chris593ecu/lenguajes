//# Catálogo para una biblioteca patrimonial

const rawCatalogCards = [
    'From a Buick 8 | King, Stephen | 2002 | Shelf K7',
    'The Shining | King, Stephen | 1977 | Shelf K1',
    'The Stand | King, Stephen | 1978 | Shelf K2',
    'It | King, Stephen | 1986 | Shelf K3',
    'Misery | King, Stephen | 1987 | Shelf K4',
    'Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5',
    'I, Robot | Asimov, Isaac | 1950 | Shelf A8',
    'Foundation | Asimov, Isaac | 1951 | Shelf A9',
    'Dune | Herbert, Frank | 1965 | Shelf H3',
    'Neuromancer | Gibson, William | 1984 | Shelf G8',
    'Snow Crash | Stephenson, Neal | 1992 | Shelf S6',
    'The Martian | Weir, Andy | 2011 | Shelf W5',
    "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
    "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
    'Ready Player One | Cline, Ernest | 2011 | Shelf C7',
    'The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5',
    // edge cases: missing data
    'Unknown Title |  | 1975 | Shelf X1',
    'Mysterious Manuscript | Unknown Author |  | Shelf Z9',
    'Ancient Scroll | Anonymous | 850 | ',
];

function parseCard(rawString) {
    const parts = rawString.split('|');

    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
        trimmedParts.push(parts[i].trim());
    }
    console.log(trimmedParts);
    // let title = trimmedParts[0];
    // let author = trimmedParts[1];
    // let year = trimmedParts[2];
    // let location = trimmedParts[3];

    const myObject = {
        title: trimmedParts[0] || 'Unknown',
        author: trimmedParts[1] || 'Unknown',
        year:
            trimmedParts[2] !== '' ? parseInt(trimmedParts[2], 10) : 'Unknown',
        location: trimmedParts[3] || 'Unknown',
    };
    return myObject;
}

// const cardResult = parseCard(rawCatalogCards[2]);
// console.log(cardResult);

function parseCatalog(rawCards) {
    const catalog = [];

    for (const key of rawCards) {
        catalog.push(parseCard(key));
    }
    return catalog;
}
parseCatalog(rawCatalogCards).length;
const catalog = parseCatalog(rawCatalogCards);

function findByAuthor(catalog, author) {
    const results = [];
    const searchTerm = author.toLowerCase();

    for (let i = 0; i < catalog.length; i++) {
        const autorActualNot = catalog[i].author;
        const autorActual = autorActualNot.toLowerCase();

        if (autorActual.includes(searchTerm)) {
            results.push(catalog[i]);
        }
    }

    return results;
}

const kingBooks = findByAuthor(catalog, 'king');
console.log(kingBooks.length);

console.log(kingBooks);

for (let i = 0; i < kingBooks.length; i++) {
    console.log(`${kingBooks[i].title} (${kingBooks[i].year})`);
}

function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
        const book = catalog[i];
        if (book.year === 'Unknown') {
            if (!grouped['Unknown']) {
                grouped['Unknown'] = [];
                continue;
            }
            grouped['Unknown'].push(book);

            const decade = Math.floor(book.year / 10) * 10;

            const decadeKey = `${decade}s`;
            if (!grouped[decadeKey]) {
                grouped[decadeKey] = [];
                grouped[decadeKey].push(book);
            }
        }
    }

    return grouped;
}

const byDecade = groupByDecade(catalog);

console.log(byDecade);

function renderEntry(entry) {
    const title = entry.title || 'Unknown';
    const author = entry.author || 'Unknown';
    const year = entry.year || 'Unknown';
    const location = entry.location || 'Unknown';

    return `${'-'.repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${'-'.repeat(25)}`;
}

console.log(renderEntry(catalog[0]));

function validateEntry(entry) {
    let isValid = true;
    console.log(entry);
    // {title: 'T', author: 'A', year: 2000, location: 'L'}

    // console.log(entry.title);

    // if (!entry.title || entry.title === false || entry.title === 'Unknown') {
    //     isValid = false;
    // }
    for (const phase in entry) {
        console.log(phase);
        console.log(entry[phase]);
        const validar = entry[phase];
        if (!validar || validar === 'Unknown') {
            isValid = false;
            return isValid;
        }
    }
    return isValid;
}

function exportToJSON(catalog) {
    return JSON.stringify(catalog, null, 2);
}
console.log(exportToJSON(catalog.slice(0, 2)));

function exportToCSV(catalog) {
    const header = 'Title,Author,Year,Location';
    const rows = [];

    for (let i = 0; i < catalog.length; i++) {
        const entry = catalog[i];
        rows.push(
            `"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`
        );
    }

    let csv = header;

    for (let i = 0; i < rows.length; i++) {
        csv = csv + '\n' + rows[i];
    }

    return csv;
}

console.log(exportToCSV(catalog));

console.log(catalog.length);

console.log(Object.keys(byDecade).length);

console.log(catalog.length);
console.log(Object.keys(byDecade).length);

let oldestYear = Infinity;
let newestYear = 0;

for (const entry of catalog) {
    if (entry.year !== 'Unknown') {
        if (entry.year < oldestYear) {
            oldestYear = entry.year;
        }
        if (entry.year > newestYear) {
            newestYear = entry.year;
        }
    }
}

console.log(oldestYear);
console.log(newestYear);
