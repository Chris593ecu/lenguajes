// Restaurador de fragmentos de historia contados desde un array
const shuffledFragments = [
    {
        id: 15,
        text: 'and, after a time, passed the place where the Hare was sleeping.',
    },
    {
        id: 12,
        text: 'he lay down beside the course to take a nap',
    },
    ,
    {
        id: 11,
        text: 'and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,',
    },
    { id: 7, text: 'but for the fun of the thing he agreed.' },
    { id: 19, text: 'The Hare now ran his swiftest,' },
    ,
    {
        id: 1,
        text: 'A Hare was making fun of the Tortoise one day for being so slow.',
    },
    { id: 14, text: 'The Tortoise meanwhile kept going slowly but steadily,' },
    { id: 9, text: 'marked the distance and started the runners off.' },
    ,
    { id: 5, text: 'I\'ll run you a race and prove it."' },
    { id: 17, text: 'and when at last he did wake up,' },
    {
        id: 2,
        text: '"Do you ever get anywhere?" he asked with a mocking laugh.',
    },
    { id: 12, text: 'he lay down beside the course to take a nap' },
    ,
    { id: 8, text: 'So the Fox, who had consented to act as judge,' },
    { id: 20, text: 'but he could not overtake the Tortoise in time.' },
    { id: 5, text: 'I\'ll run you a race and prove it."' },
    {
        id: 6,
        text: 'The Hare was much amused at the idea of running a race with the Tortoise,',
    },
    ,
    { id: 13, text: 'until the Tortoise should catch up.' },
    { id: 10, text: 'The Hare was soon far out of sight,' },
    { id: 12, text: 'he lay down beside the course to take a nap' },
    { id: 18, text: 'the Tortoise was near the goal.' },
];

function compactFragments(arr) {
    const arrCopy = [...arr];
    const arrIds = [];
    //console.log(arrCopy[1].id);
    const arrUndefined = [];

    for (let i = 0; i < arrCopy.length; i++) {
        if (!arrCopy[i]) {
            console.log(`[COMPACTED] ${arrCopy[i]}`);
            continue;
        }

        arrIds.push(arrCopy[i]);
    }
    return arrIds;
}
compactFragments([{ id: 1, text: 'Hello' }, undefined]);

console.log(
    compactFragments([
        { id: 1, text: 'Hello' },
        undefined,
        { id: 2, text: 'World' },
    ])
);

let compactedShuffledFragments = compactFragments(shuffledFragments);

compactedShuffledFragments;

function sortFragments(arr) {
    const arrCopy = [...arr];

    if (arrCopy.length <= 1) {
        return arrCopy;
    }

    const medio = Math.floor(arrCopy.length / 2);
    const left = arrCopy.slice(0, medio);
    const right = arrCopy.slice(medio);
    return mix(sortFragments(left), sortFragments(right));
}
function mix(left, right) {
    const arrResult = [];
    let i = 0;
    let d = 0;
    while (i < left.length && d < right.length) {
        if (left[i].id <= right[d].id) {
            arrResult.push(left[i]);
            i++;
        } else {
            arrResult.push(right[d]);
            d++;
        }
    }

    return arrResult.concat(left.slice(i)).concat(right.slice(d));
}

console.log(
    sortFragments([
        { id: 30, text: 'c' },
        { id: 10, text: 'a' },
        { id: 10, text: 'dup' },
        { id: 20, text: 'b' },
    ])
);

/*

const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

// 1. COMPACT FRAGMENTS
function compactFragments(arr) {
  const result = [];
  let hasUndefined = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      hasUndefined = true;
    } else {
      result.push(arr[i]);
    }
  }

  if (hasUndefined) {
    console.log('[COMPACTED]');
  }

  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

// 2. SORT FRAGMENTS (Merge Sort nativo sin .sort())
function mix(left, right) {
  const arrResult = [];
  let i = 0;
  let d = 0;

  while (i < left.length && d < right.length) {
    if (left[i].id <= right[d].id) {
      arrResult.push(left[i]);
      i++;
    } else {
      arrResult.push(right[d]);
      d++;
    }
  }

  return arrResult.concat(left.slice(i)).concat(right.slice(d));
}

function sortFragments(arr) {
  const arrCopy = [...arr];

  if (arrCopy.length <= 1) {
    return arrCopy;
  }

  const medio = Math.floor(arrCopy.length / 2);
  const left = arrCopy.slice(0, medio);
  const right = arrCopy.slice(medio);

  return mix(sortFragments(left), sortFragments(right));
}

const sortedFragments = sortFragments(compactedShuffledFragments);

// 3. DEDUPE FRAGMENTS
function dedupeFragments(arr) {
  const result = [];
  const seenIds = new Set();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (seenIds.has(item.id)) {
      console.log(`[DEDUPED] id: ${item.id}`);
    } else {
      seenIds.add(item.id);
      result.push(item);
    }
  }

  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

// 4. FILL MISSING FRAGMENTS
function fillMissingFragments(arr) {
  if (arr.length === 0) return [];

  const result = [];
  let currentId = arr[0].id;

  for (let i = 0; i < arr.length; i++) {
    while (currentId < arr[i].id) {
      console.log(`[FILLED] id: ${currentId}`);
      result.push({ id: currentId, text: "[...]" });
      currentId++;
    }
    result.push(arr[i]);
    currentId = arr[i].id + 1;
  }

  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

// 5. ASSEMBLE STORY
function assembleStory(arr) {
  const texts = [];
  for (let i = 0; i < arr.length; i++) {
    texts.push(arr[i].text);
  }
  return texts.join('\n');
}

console.log(assembleStory(filledFragments));
*/
