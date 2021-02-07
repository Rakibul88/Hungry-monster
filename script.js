
document.getElementById('search-btn').addEventListener('click', function(){

const searchInput = document.getElementById('search-input').Value;

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => searchMeal(data))

const searchMeal = meals =>{
    console.log(meals);
}

})


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => searchMeal(data))

const searchMeal = meals =>{
    console.log(data.meals[0].strMeal);
}