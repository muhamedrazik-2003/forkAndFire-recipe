const recipes = [
  {
    id: "muffins",
    title: "Blueberry Muffin Recipe",
    shortDescription: "Soft, fluffy muffins loaded with fresh berries.",
    description:
      "Light, fluffy, and bursting with juicy blueberries, these muffins are a timeless treat perfect for breakfast or a midday snack. They're easy to bake, store well, and smell incredible fresh from the oven.",
    image: "../images/recipes/muffins.jpg",
    prepTime: {
      total: "30 minutes",
      prep: "10 minutes",
      cook: "20 minutes",
    },
    ingredients: [
      "1½ cups all-purpose flour",
      "¾ cup granulated sugar",
      "½ teaspoon salt",
      "2 teaspoons baking powder",
      "⅓ cup vegetable oil",
      "1 large egg",
      "⅓ cup milk",
      "1 teaspoon vanilla extract",
      "1 cup fresh or frozen blueberries",
      "Optional: coarse sugar for topping",
    ],
    instructions: [
      "Preheat the oven: Set to 190°C (375°F) and line a muffin tin with paper liners.",
      "Mix dry ingredients: In a bowl, whisk together flour, sugar, salt, and baking powder.",
      "Combine wet ingredients: In another bowl, mix oil, egg, milk, and vanilla.",
      "Combine all: Pour wet mixture into the dry ingredients and stir until just combined.",
      "Add blueberries: Gently fold in the blueberries without overmixing.",
      "Fill & top: Fill each muffin cup about ¾ full. Sprinkle tops with coarse sugar if using.",
      "Bake: Bake for 18–20 minutes or until golden and a toothpick comes out clean.",
      "Cool & serve: Let cool for a few minutes before enjoying warm or at room temperature.",
    ],
    nutrition: {
      calories: "210kcal",
      carbs: "28g",
      protein: "3g",
      fat: "9g",
    },
  },
  {
    id: "croissants",
    title: "Savory Stuffed Croissant Recipe",
    shortDescription:"Buttery croissants stuffed with fresh greens, mozzarella, and a pesto twist.",
    description:
      "A buttery, flaky croissant turned into a flavorful savory meal. This recipe stuffs fresh croissants with pesto, mozzarella, roasted tomatoes, and peppery greens — then bakes them to perfection. Great for breakfast, brunch, or a light lunch.",
    image: "../images/recipes/croissants.jpg",
    prepTime: {
      total: "20 minutes",
      prep: "10 minutes",
      cook: "10 minutes",
    },
    ingredients: [
      "3 croissants (fresh or day-old)",
      "3 tablespoons basil pesto",
      "½ cup cherry tomatoes (halved)",
      "6–9 fresh mozzarella balls (or sliced)",
      "1 cup arugula (or spinach)",
      "Salt and black pepper, to taste",
      "Optional: sesame seeds or herbs for garnish",
    ],
    instructions: [
      "Preheat oven: Heat to 180°C (350°F).",
      "Slice the croissants: Carefully slice each croissant in half lengthwise, without cutting all the way through.",
      "Assemble filling: Spread pesto inside each croissant. Add a few tomato halves, mozzarella, and a handful of arugula.",
      "Season: Sprinkle lightly with salt and pepper. Optionally add sesame seeds on top.",
      "Bake: Place croissants on a baking tray lined with parchment paper. Bake for 8–10 minutes, or until the cheese melts and croissants are crisp.",
      "Serve: Enjoy warm, optionally with extra greens or dip on the side.",
    ],
    nutrition: {
      calories: "340kcal",
      carbs: "22g",
      protein: "9g",
      fat: "24g",
    },
  },
  {
    id: "eggplant",
    title: "Simple Roasted Eggplant Recipe",
    shortDescription:"Roasted eggplants filled with a savory, spiced veggie and breadcrumb mix.",
    description:
      "An easy, flavorful dish that makes a perfect side or main. This roasted eggplant is tender on the inside, slightly crisp on the outside, and packed with savory umami flavor. Great on its own or served with rice, bread, or yogurt dip.",
    image: "../images/recipes/eggplant.webp",
    prepTime: {
      total: "40 minutes",
      prep: "10 minutes",
      cook: "30 minutes",
    },
    ingredients: [
      "1 large eggplant (or 2 medium-sized)",
      "2 tablespoons olive oil",
      "1 teaspoon garlic powder",
      "½ teaspoon salt",
      "¼ teaspoon black pepper",
      "½ teaspoon smoked paprika (optional)",
      "Fresh herbs (parsley or mint) for garnish",
    ],
    instructions: [
      "Preheat the oven: Set your oven to 200°C (400°F).",
      "Prepare the eggplant: Wash and cut the eggplant into 1-inch cubes or rounds. Place them in a bowl.",
      "Season: Drizzle olive oil over the eggplant. Add garlic powder, salt, pepper, and paprika. Toss to coat evenly.",
      "Bake: Spread the seasoned eggplant on a lined baking tray in a single layer.",
      "Roast: Bake for about 25–30 minutes, flipping halfway, until golden brown and soft.",
      "Serve: Garnish with fresh herbs and serve hot or warm.",
    ],
    nutrition: {
      calories: "110kcal",
      carbs: "10g",
      protein: "1g",
      fat: "8g",
    },
  },
  {
    id: "omlette",
    title: "Simple Omlette Recipe",
    shortDescription:"A fluffy, protein-packed classic made with eggs and your favorite fillings.",
    description:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    image: "../images/recipes/image-omelette.jpeg",
    prepTime: {
      total: "10 minutes",
      prep: "5 minutes",
      cook: "5 minutes",
    },
    ingredients: [
      "2–3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    ],
    instructions: [
      "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
      "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
      "Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
      "Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      "Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
      "Enjoy: Serve hot, with additional salt and pepper if needed.",
    ],
    nutrition: {
      calories: "277kcal",
      carbs: "0g",
      protein: "20g",
      fat: "22g",
    },
  },
];
// home page recipe card data injection
const recipesWrapper = document.querySelector(".recipes-wrapper");

const cardData = recipes.map((recipe) => {
    return  `<section class="recipe-card">
                <a href="./recipe-pages/recipe.html/${recipe.id}">
                    <div class="recipe-image">
                        <img src=${recipe.image} alt=${recipe.title}>
                    </div>
                    <h2>${recipe.title}</h2>
                    <p>${recipe.shortDescription}</p>
                </a>
            </section>`
}).join("");

recipesWrapper.innerHTML = cardData;
