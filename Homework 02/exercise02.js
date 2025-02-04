fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    // All recipes array so i can use it later
    const allRecipes = data.recipes.slice();
    console.log(allRecipes);
    //All Desserts
    const desserts = allRecipes.filter((user) =>
      user.mealType.includes("Dessert")
    );
    console.log(desserts);

    //Get the names of recipes with more than 30 reviews

    const moreReviews = allRecipes.filter((user) => user.reviewCount > 30);
    console.log(moreReviews);

    //All recipes that use Cinnamon as an ingredient

    const cinnamon = allRecipes.filter((user) =>
      user.ingredients.includes("Cinnamon")
    );
    console.log(cinnamon);

    //Recipes that are served as both Lunch and Dinner

    const lunchAndDinner = allRecipes.filter(
      (user) =>
        user.mealType.includes("Lunch") && user.mealType.includes("Dinner")
    );
    console.log(lunchAndDinner);

    //The ingredients needed for "Mango Salsa Chicken" dish

    const mangoSalsaIngredients = allRecipes
      .filter((user) => user.name === "Mango Salsa Chicken")
      .map((user) => user.ingredients);
    console.log(mangoSalsaIngredients);

    //Calculate the average number of calories for all American cusine recipes

    const americanCuisine = allRecipes.filter(
      (user) => user.cuisine === "American"
    );
    console.log(americanCuisine);

    const avgCalories =
      americanCuisine.reduce((acc, user) => acc + user.caloriesPerServing, 0) /
      americanCuisine.length;
    console.log(avgCalories);

    //The average cooking time of all pasta recipes
    const allPasta = allRecipes.filter((user) => user.tags.includes("Pasta"));
    console.log(allPasta);

    const avgCookingTime =
      allPasta.reduce((acc, user) => acc + user.cookTimeMinutes, 0) /
      allPasta.length;
    console.log(avgCookingTime);

    //Find the recipe with the lowest number of reviews

    const recipeLowReview = allRecipes.reduce((a, b) =>
      a.reviewCount < b.reviewCount ? a : b
    );
    console.log(recipeLowReview);
  });
