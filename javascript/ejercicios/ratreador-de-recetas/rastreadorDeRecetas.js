// rastreador de recetas utilizando objetos de js

const recipes = [];

const recipe1 = {
    name: 'Spaghetti Carbonara',
    ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: '',
};
// Paso 4
// Crea un objeto recipe2 con las siguientes propiedades y valores:

// Clave	Valor
// name	Chicken Curry
// ingredients	["chicken breast", "coconut milk", "curry powder", "onion", "garlic"]
// cookingTime	42
// totalIngredients	null
// difficultyLevel	""
const recipe2 = {
    name: 'Chicken Curry',
    ingredients: [
        'chicken breast',
        'coconut milk',
        'curry powder',
        'onion',
        'garlic',
    ],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: '',
};

const recipe3 = {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrot', 'bell pepper'],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: '',
};

// usar destructuración sólo cuando hay mas de dos propiedades, o react o node.js:  let { name: recipe1Name } = recipe1;

let recipe1Name = recipe1.name;

let recipe2CookingTime = recipe2.cookingTime;

let recipe3Ingredients = recipe3.ingredients;

console.log(recipe1Name);

console.log(recipe2CookingTime);

console.log(recipe3Ingredients);

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
    return ingredients.length;
}

// si quisiéramos validar si es un array :
/*
function getTotalIngredients(a) {
    // Comprobamos si la variable existe Y si es un arreglo real
    if (Array.isArray(a)) {
        return a.length;
    }

    return `La propiedad consultada no es un arreglo válido (se recibió: ${typeof a})`;
}
*/

function getDifficultyLevel(num) {
    let cookingTime = num;

    // if (cookingTime <= 30) {
    //     return 'easy';
    // } else if (cookingTime <= 60) {
    //     return 'medium';
    // } else {
    //     return 'hard';
    // }

    if (cookingTime <= 30) return 'easy';
    if (cookingTime <= 60) return 'medium';
    return 'hard';
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);
