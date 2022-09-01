const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

// searchBtn event listener
searchBtn.addEventListener("click", getMealList);

// get meal list for provided ingredient(s)
function getMealList() {
    let searchInput = document.getElementById("search-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class="meal-item" data-id="${meal.idMeal}">

                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>

                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">View Recipe</a>
                        </div>

                    </div>
                `;
            });
        } else {
            html = "¡Lo siento! We couldn't find that..."
        }
        mealList.innerHTML = html;
    });
}