const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.createElement("ul");
document.body.appendChild(ul);

button.addEventListener("click", () => {
  const searchValue = input.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      ul.innerHTML = "";
      data.meals.forEach((meal) => {
        const card = document.createElement("div");
        card.className = "card";
        const picDiv = document.createElement("div");
        picDiv.className = "pic";
        const img = document.createElement("img");
        img.src = meal.strMealThumb;
        img.alt = "meal";
        picDiv.appendChild(img);
        const h2 = document.createElement("h2");
        h2.textContent = meal.strMeal;
        const recipeButton = document.createElement("button");
        recipeButton.textContent = "Get Recipe";
        card.appendChild(picDiv);
        card.appendChild(h2);
        card.appendChild(recipeButton);
        ul.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
