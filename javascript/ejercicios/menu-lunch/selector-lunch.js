const lunches = [];

function addLunchToEnd(lunches, str) {
    console.log(`${str} added to the end of the lunch menu.`);
    lunches.push(str);
    return lunches;
}
console.log(lunches);
addLunchToEnd(['Piza', 'Tacos'], 'Burguer');

// función addLunchToStart

function addLunchToStart(lunches, str) {
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return lunches;
}

// last lunch

function removeLastLunch(lunches, str) {
    let validation = lunches.pop(str);
    if (validation) {
        console.log(`${str} removed from the start of the lunch menu.`);
    } else {
        console.log('No lunches to remove.');
    }
    return lunches;
}

// función removeFirstLunch

function removeLastLunch(lunches) {
    let validation = lunches.pop();
    if (validation) {
        console.log(`${validation} removed from the end of the lunch menu.`);
    } else {
        console.log('No lunches to remove.');
    }
    return lunches;
}

function removeFirstLunch(lunches) {
    let validation = lunches.shift();
    if (validation) {
        console.log(`${validation} removed from the start of the lunch menu.`);
    } else {
        console.log('No lunches to remove.');
    }
    return lunches;
}

function getRandomLunch(lunches) {
    let ramdonIndex = Math.floor(Math.random() * lunches.length);
    let value = lunches[ramdonIndex];

    if (value) {
        console.log(`Randomly selected lunch: ${value}`);
    } else {
        console.log('No lunches available.');
    }
}

function showLunchMenu(lunches) {
    if (lunches.length > 0) {
        console.log(`Menu items: ${lunches.join(', ')}`);
    } else {
        console.log('The menu is empty.');
    }
}
