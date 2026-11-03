const nums = [1, 'a', 3, 4, 5];

nums.forEach((x) => {
    console.log(`nums ${x}`);
    console.timeEnd('foreach()');
});

nums.forEach((y) => {
    console.log(y + 1);
    console.log(typeof y);
});

nums.map((x) => {
    console.log(x);
    console.log(typeof x);
});

nums.forEach((number, index, arr) => {
    console.log(`Element ${number} is at index ${index} in array ${arr}`);
    if (index === 2) {
        console.log(`index ${index} encontrado, su valor es ${number}`);
    }
});
