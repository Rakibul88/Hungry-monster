const searchMeal = () =>{
    const search = document.getElementById('search-input').value;
  
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

}

const mealContainer = document.getElementById('meal-list');


const displayMeals = meals =>{
    meals.forEach(meal => {
        console.log(meal);

        const mealDiv = document.createElement('div');
        mealDiv.className = ' align-items-center';
        mealDiv.innerHTML =`
        <div class="meal-namesDiv">
        <p class="meal-names">${meal.strMeal} </p>
        <button onclick="getIngredient('${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}','${meal.strIngredient6}')" class="btn btn-outline-warning">Order now </button>
        </div>
        `;

        mealContainer.appendChild(mealDiv);
      
    });
  
}

const getIngredient = (strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strIngredient1}/${strIngredient2}/${strIngredient3}/${strIngredient4}/${strIngredient5}/${strIngredient6}`


    fetch(url)
    .then(res => res.json())
    .then(data => displayIngredient(strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6))
}

const displayIngredient = (strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6) =>{

    const listDiv = document.getElementById('meal-items');

    listDiv.innerHTML = `
        <h3> Ingredients: </h3>
       <ul>
       <li>${strIngredient1}</li>
       <li>${strIngredient2}</li>
       <li>${strIngredient3}</li>
       <li>${strIngredient4}</li>
       <li>${strIngredient5}</li>
       <li>${strIngredient6}</li>
       </ul>
       <button class="btn btn-outline-primary">Buy Now</button>
    `;


}