// mesclar lista de reproducción

const playlists = [
    [
        {
            trackId: 'trk101',
            artist: 'Velvet Comet',
            title: 'Crimson Afterglow',
            votes: 5,
            bpm: 122,
        },
        {
            trackId: 'trk102',
            artist: 'Neon Harbor',
            title: 'Static Horizon',
            votes: 2,
            bpm: 108,
        },
        {
            trackId: 'trk103',
            artist: 'Lunar Arcade',
            title: 'Midnight Frequency',
            votes: 4,
            bpm: 128,
        },
    ],
    [
        {
            trackId: 'trk201',
            artist: 'Solar Echo',
            title: 'Glass Skyline',
            votes: 3,
            bpm: 115,
        },
        {
            trackId: 'trk202',
            artist: 'Velvet Comet',
            title: 'Satellite Hearts',
            votes: 6,
            bpm: 124,
        },
    ],
];

function flattenPlaylists(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    const flattened = [];
    //devolver un arr[?]{?}= 'source' : [?]{?}
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const track = arr[i][j];

            flattened.push({
                ...track,
                source: [i, j],
            });
        }
    }
    console.log(flattened);
    return flattened;
}

flattenPlaylists(playlists);

function scoreTracks(tracks) {
    if (!Array.isArray(tracks)) {
        return [];
    }

    const scoreTracks = [];

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        const calculatedScore = track.votes * 10 - Math.abs(track.bpm - 120);

        scoreTracks.push({
            ...track,
            score: calculatedScore,
        });
    }

    return scoreTracks;
}

scoreTracks(playlists);

function dedupeTracks(tracks) {
    if (!Array.isArray(tracks)) {
        return [];
    }

    const uniqueTracks = [];
    const seenIds = new Set();

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        if (!seenIds.has(track.trackId)) {
            seenIds.add(track.trackId);
            uniqueTracks.push(track);
        }
    }
    return uniqueTracks;
}

dedupeTracks(playlists);

function enforceArtistQuota(tracks, maxPerArtist) {
    if (!Array.isArray(tracks)) {
        return [];
    }

    const filteredTracks = [];
    const artistCounts = {};

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        const artist = track.artist;

        if (!artistCounts[artist]) {
            artistCounts[artist] = 0;
        }
        if (artistCounts[artist] < maxPerArtist) {
            artistCounts[artist]++;
            filteredTracks.push(track);
        }
    }
    return filteredTracks;
}

function buildSchedule(tracks) {
    if (!Array.isArray(tracks)) {
        return [];
    }
    const result = [];
    let slot = 1;

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        const trackId = track.trackId;
        result.push({ slot, trackId });
        slot++;
    }
    return result;
}

function remixPlaylist(playlists, maxPerArtist) {
    // 1. Aplanamos las playlists
    const flattened = flattenPlaylists(playlists);

    // 2. Calculamos los puntajes de las pistas
    const scored = scoreTracks(flattened);

    // 3. Las ordenamos de mayor a menor puntaje (de mejor a peor score)
    const sorted = scored.sort((a, b) => b.score - a.score);

    // 4. Eliminamos pistas duplicadas por su trackId
    const deduped = dedupeTracks(sorted);

    // 5. Aplicamos el límite de canciones por artista
    const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);

    // 6. Construimos el programa final con los slots numerados
    const finalSchedule = buildSchedule(quotaEnforced);

    return finalSchedule;
}
