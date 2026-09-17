// #Flujo de asistentes en un festival
const morningGates = [
    { id: 'North', capacity: 5, queue: [3, 6, 2, 4] },
    { id: 'East', capacity: 3, queue: [2, 4, 3, 5] },
    { id: 'South', capacity: 4, queue: [1, 2, 3, 1] },
    { id: 'West', capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
    { id: 'North', capacity: 4, queue: [6, 2, 5, 1] },
    { id: 'East', capacity: 2, queue: [3, 3, 4, 2] },
    { id: 'South', capacity: 5, queue: [2, 1, 2, 3] },
    { id: 'West', capacity: 3, queue: [5, 2, 1, 4] },
];
/**
 * traductor
 * queue: cola
 * id: cadena que identifica la puerta
 * capacity: el número de asistentes que la puerta puede procesar por tick
 * queue: UN arreglo de números que representa cuántos asistentes llegan a la puerta durante un tick específico.
 *initializeThrougthput(): inicializar rendimiento
 */

function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
        summary[gate.id] = 0;
    }
    return summary;
}

initializeThroughput(morningGates);

/**
 * entrada: array de 3 posiciones
 * puerta.queue[i] <= capacity
 * dejar fuera los queue que no alcancen a llegar
 */

function processGateFlow(gate, tickIndex) {
    /**
     * gate: Es el objeto que se está procesando
     * tickIndex: La posición actual del tick en el arreglo queue
     */

    const currentTickQueue = gate.queue[tickIndex];
    let processed = 0;

    while (currentTickQueue > 0 && processed < gate.capacity) {
        currentTickQueue--;
        processed++;
    }
    return {
        processed: processed,
        overflow: currentTickQueue,
    };
}

function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
}

function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    /*
    gates: El arreglo completo de objetos puerta.
    gate: La puerta actual que se está procesando.
    tickIndex: La posición actual del tick en el arreglo queue.
    throughputSummary: Un objeto que rastrea el total de asistentes procesados por puerta.
 */
    console.log('\nProcessing ' + gate.id + '...');
    console.log(gate.queue[tickIndex] + ' attendees arriving.');
    const result = processGateFlow(gate, tickIndex);

    throughputSummary[gate.id] = result.processed;

    if (result.overflow > 0) {
        console.log(
            'Overflow of ' + result.overflow + ' attendees. Rerouting...'
        );
        rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
}

function printSummary(summary) {
    console.log('\nThroughput Summary');
    for (const gate in summary) {
        console.log(gate + ': ' + summary[gate] + ' attendees processed');
    }
}

function simulateFestival(gates, timeBlock) {
    console.log('\n' + timeBlock + ' Simulation');
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
        console.log('\nTick ' + (tickIndex + 1));
        gates.forEach((gate) => {
            handleGateAtTick(gates, gate, tickIndex, throughputSummary);
        });

        tickIndex++;
    }
    printSummary(throughputSummary);
}

simulateFestival(morningGates, 'Morning');
simulateFestival(nightGates, 'Night');

/*
const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  };
  return summary;
}

function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }
  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(
    gate.queue[tickIndex] + " attendees arriving."
  );
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  if (result.overflow > 0) {
    console.log(
      "Overflow of " + result.overflow +
      " attendees. Rerouting..."
    );
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const gateId in summary) {
    console.log(
      gateId + ": " + summary[gateId] +
      " attendees processed"
    );
  }
}

function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;
  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    tickIndex++;
  }
  printSummary(throughputSummary);
}

simulateFestival(morningGates, 'Morning');


*/
