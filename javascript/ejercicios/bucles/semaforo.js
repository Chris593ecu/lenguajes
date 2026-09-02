// # Construir un secuenciador de semáforo

const config1 = {
    fault: false,
    phases: [
        { color: 'green', duration: 5 },
        { color: 'yellow', duration: 2 },
        { color: 'red', duration: 4 },
    ],
};

const config2 = {
    fault: false,
    phases: [
        { color: 'red', duration: 3 },
        { color: 'yellow', duration: -2 },
        { color: 'green', duration: 6 },
    ],
};

const config3 = {
    fault: true,
    phases: [
        { color: 'green', duration: 5 },
        { color: 'yellow', duration: 2 },
        { color: 'red', duration: 6 },
    ],
};

const config4 = {
    fault: false,
    phases: [],
};

function runSequence(config, cycles) {
    if (config?.fault === true) {
        console.log('Faulted phase!');
        return 'Faulted phase!';
    }
    if (config?.phases.length === 0) {
        console.log('No phases found');
        return 'No phases found';
    }

    if (typeof cycles !== 'number' || cycles <= 0) {
        return 'Invalid phase detected';
    }
    let count = 0;
    while (count !== cycles) {
        for (let key of config.phases) {
            if (key.duration <= 0) {
                console.log('Invalid phase detected');
                continue;
            }
            console.log(`Switching to ${key.color} for ${key.duration} s`);
        }
        count++;
    }
}

function generateTimeline(config, cycles) {
    const timeline = [];
    let accumulatedTime = 0;
    let count = 0;
    while (count < cycles) {
        for (const phase of config.phases) {
            accumulatedTime += phase.duration;
            timeline.push(accumulatedTime);
        }
        count++;
    }

    return timeline;
}

generateTimeline(config1, 1);
