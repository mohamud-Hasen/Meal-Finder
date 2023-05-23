const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const resultHeading = document.getElementById('result-heading');
const mealsEl = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');

//search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();
    // clear single meal
    singleMeal.innerHTML = '';

    // get search term
    const term = search.value;

    // check for empty
    if(term.trim()) {
        fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }else{
        alert('please enter a search term');
    }

}
//Event listeners
submit.addEventListener('click', searchMeal);

