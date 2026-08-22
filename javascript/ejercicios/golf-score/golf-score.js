const names = [
    'Hole-in-one!',
    'Eagle',
    'Birdie',
    'Par',
    'Double Bogey',
    'Go Home!',
];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return 'Hole-in-one!';
    } else if (strokes <= par - 2) {
        return 'Eagle';
    } else if (strokes <= par - 1) {
        return 'Birdie';
    } else if (strokes == par) {
        return 'Par';

        //golfScore debería devolver "Bogey" si strokes es igual a par más 1.
    } else if (strokes == par + 1) {
        return 'Bogey';

        //golfScore debería devolver "Double Bogey" si strokes es igual a par más 2.
    } else if (strokes == par + 2) {
        return 'Double Bogey';

        //golfScore debería devolver "Go Home!" si strokes es mayor o igual a par más 3.
    } else if (strokes >= par + 3) {
        return 'Go Home!';
    }
}

golfScore(3, 2);
