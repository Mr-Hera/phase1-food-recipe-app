const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

// searchBtn event listener
searchBtn.addEventListener("click", getMealList);

// get meal list for provided ingredient(s)
function getMealList() {
    let searchInput = document.getElementById("search-input").value.trim();
}