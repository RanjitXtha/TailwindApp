const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150?text=Spaghetti+Carbonara",
    category: "Popular Recipes",
    level: "Beginner",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's simple yet rich and creamy without any added cream.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g grated parmesan cheese",
      "Salt and black pepper",
      "1 tbsp olive oil"
    ],
    instructions: [
      "1. Cook the spaghetti in salted boiling water until al dente.",
      "2. In a separate pan, fry the pancetta in olive oil until crispy.",
      "3. In a bowl, beat the eggs and mix with grated parmesan.",
      "4. Drain the spaghetti and toss with pancetta and egg mixture off the heat.",
      "5. Season with salt and pepper and serve hot."
    ],
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: 2,
    count: 4
  },
  {
    id: 2,
    title: "Chocolate Lava Cake",
    image: "https://via.placeholder.com/150?text=Chocolate+Lava+Cake",
    category: "Dessert",
    level: "Intermediate",
    description: "A rich and decadent dessert featuring a soft chocolate cake exterior with a warm, gooey chocolate center.",
    ingredients: [
      "150g dark chocolate",
      "100g unsalted butter",
      "2 large eggs",
      "2 large egg yolks",
      "50g sugar",
      "40g flour",
      "Pinch of salt",
      "Powdered sugar (for dusting)"
    ],
    instructions: [
      "1. Preheat the oven to 200°C (400°F) and grease ramekins with butter.",
      "2. Melt chocolate and butter in a double boiler or microwave.",
      "3. In a separate bowl, whisk eggs, egg yolks, and sugar until pale and fluffy.",
      "4. Fold in melted chocolate and butter mixture, then add flour and salt.",
      "5. Pour into ramekins and bake for 10-12 minutes, until edges are set but center is still soft.",
      "6. Serve immediately, dusted with powdered sugar."
    ],
    prepTime: "15 minutes",
    cookTime: "12 minutes",
    servings: 4,
    count: 10
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    image: "https://via.placeholder.com/150?text=Chicken+Tikka+Masala",
    category: "Local",
    level: "Expert",
    description: "A popular Indian dish with grilled chicken chunks in a spiced tomato cream sauce, known for its rich flavor and complex spice profile.",
    ingredients: [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp garam masala",
      "1 tsp turmeric",
      "2 tbsp vegetable oil",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 inch ginger, grated",
      "1 can (400g) tomato puree",
      "1 cup heavy cream",
      "Salt and pepper",
      "Coriander leaves for garnish"
    ],
    instructions: [
      "1. Marinate chicken in yogurt, garam masala, turmeric, and salt for at least 2 hours or overnight.",
      "2. Grill or pan-sear the chicken until cooked through and slightly charred.",
      "3. In a large pan, heat oil and sauté onions, garlic, and ginger until soft.",
      "4. Add tomato puree and simmer for 10 minutes until thickened.",
      "5. Stir in cream and grilled chicken, cook for 5 more minutes.",
      "6. Garnish with coriander and serve with naan or rice."
    ],
    prepTime: "30 minutes (plus marination)",
    cookTime: "25 minutes",
    servings: 4,
    count: 7
  },
  {
    id: 4,
    title: "Caesar Salad",
    image: "https://via.placeholder.com/150?text=Caesar+Salad",
    category: "Vegetarian",
    level: "Beginner",
    description: "A refreshing salad made with romaine lettuce, croutons, and parmesan, tossed in a tangy Caesar dressing.",
    ingredients: [
      "1 head romaine lettuce",
      "50g croutons",
      "50g grated parmesan cheese",
      "2 tbsp Caesar dressing",
      "1 tbsp olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "1. Tear the romaine lettuce into bite-sized pieces and place in a bowl.",
      "2. Add croutons and grated parmesan.",
      "3. Drizzle with Caesar dressing and olive oil.",
      "4. Toss the salad until well coated.",
      "5. Season with salt and pepper, and serve immediately."
    ],
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: 2,
    count: 5
  },
  {
    id: 5,
    title: "Margarita",
    image: "https://via.placeholder.com/150?text=Margarita",
    category: "Drinks",
    level: "Intermediate",
    description: "A classic cocktail made with tequila, lime juice, and triple sec, served with a salted rim.",
    ingredients: [
      "50ml tequila",
      "25ml lime juice",
      "20ml triple sec",
      "Salt for the rim",
      "Ice cubes",
      "Lime wedge for garnish"
    ],
    instructions: [
      "1. Run a lime wedge around the rim of the glass and dip into salt.",
      "2. In a shaker, combine tequila, lime juice, and triple sec with ice.",
      "3. Shake well and strain into the prepared glass over ice.",
      "4. Garnish with a lime wedge and serve."
    ],
    prepTime: "5 minutes",
    cookTime: "0 minutes",
    servings: 1,
    count: 8
  },
  {
    id: 6,
    title: "Momo (Nepalese Dumplings)",
    image: "https://via.placeholder.com/150?text=Momo",
    category: "Local",
    level: "Intermediate",
    description: "Momo is a popular Nepalese dish, consisting of steamed dumplings filled with minced meat or vegetables, served with a tangy dipping sauce.",
    ingredients: [
      "200g all-purpose flour",
      "100g minced chicken or vegetables",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 inch ginger, grated",
      "1 tbsp soy sauce",
      "1 tbsp sesame oil",
      "Salt and pepper to taste",
      "Water (for dough)"
    ],
    instructions: [
      "1. Prepare the dough by mixing flour and water to form a smooth dough. Let it rest for 30 minutes.",
      "2. In a bowl, combine minced chicken or vegetables with onion, garlic, ginger, soy sauce, sesame oil, salt, and pepper.",
      "3. Roll the dough into small circles and place a spoonful of filling in the center.",
      "4. Fold and seal the edges of the dough to form a dumpling shape.",
      "5. Steam the dumplings for 10-12 minutes until cooked through.",
      "6. Serve with spicy dipping sauce."
    ],
    prepTime: "30 minutes",
    cookTime: "12 minutes",
    servings: 4,
    count: 6
  },
  {
    id: 7,
    title: "Dal Bhat",
    image: "https://via.placeholder.com/150?text=Dal+Bhat",
    category: "Local",
    level: "Beginner",
    description: "A staple meal in Nepal, Dal Bhat consists of steamed rice (bhat) and lentil soup (dal), often accompanied by vegetable curry and pickles.",
    ingredients: [
      "1 cup basmati rice",
      "1/2 cup yellow lentils",
      "1 tomato, chopped",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "Salt to taste",
      "Coriander leaves for garnish"
    ],
    instructions: [
      "1. Cook the rice in water until fluffy.",
      "2. In a pan, heat oil and sauté onions, garlic, and cumin seeds.",
      "3. Add chopped tomatoes and turmeric, cook until soft.",
      "4. Add lentils and water, simmer for 20 minutes until lentils are tender.",
      "5. Serve dal over rice, garnished with coriander."
    ],
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: 4,
    count: 10
  },
  {
    id: 8,
    title: "Yomari (Sweet Nepalese Dumpling)",
    image: "https://via.placeholder.com/150?text=Yomari",
    category: "Local",
    level: "Expert",
    description: "A traditional Nepalese sweet dumpling filled with molasses and sesame seeds, popular during the Yomari Punhi festival.",
    ingredients: [
      "200g rice flour",
      "100g molasses",
      "50g sesame seeds",
      "1 tbsp ghee",
      "Pinch of cardamom powder",
      "Water (for dough)"
    ],
    instructions: [
      "1. Mix rice flour with warm water to form a soft dough. Let it rest for 30 minutes.",
      "2. In a pan, roast sesame seeds and mix with molasses and cardamom powder.",
      "3. Shape the dough into cone-like dumplings and fill with the sesame-molasses mixture.",
      "4. Seal the edges and steam for 15-20 minutes until firm.",
      "5. Brush with ghee before serving."
    ],
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    servings: 4,
    count: 5
  },
  {
    id: 9,
    title: "Margarita Pizza",
    image: "https://via.placeholder.com/150?text=Margarita+Pizza",
    category: "Western",
    level: "Beginner",
    description: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves, representing the colors of the Italian flag.",
    ingredients: [
      "1 pizza base",
      "100g mozzarella cheese",
      "2 fresh tomatoes, sliced",
      "1 tbsp olive oil",
      "Fresh basil leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "1. Preheat oven to 220°C (430°F).",
      "2. Spread olive oil over the pizza base.",
      "3. Arrange tomato slices and mozzarella on top.",
      "4. Bake for 10-12 minutes until the crust is golden and cheese is melted.",
      "5. Top with fresh basil leaves, season with salt and pepper, and serve hot."
    ],
    prepTime: "10 minutes",
    cookTime: "12 minutes",
    servings: 2,
    count: 7
  },
  {
    id: 10,
    title: "Samosa",
    image: "https://via.placeholder.com/150?text=Samosa",
    category: "Popular Recipes",
    level: "Intermediate",
    description: "A crispy pastry filled with spiced potatoes, peas, and onions, deep-fried to perfection. A favorite street food snack across South Asia.",
    ingredients: [
      "2 cups all-purpose flour",
      "1/2 cup water",
      "3 potatoes, boiled and mashed",
      "1/2 cup peas",
      "1 onion, finely chopped",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "1/2 tsp turmeric",
      "Salt and pepper",
      "Oil for frying"
    ],
    instructions: [
      "1. Prepare the dough by mixing flour with water. Knead into a smooth dough and let it rest.",
      "2. In a pan, heat oil and sauté cumin seeds, onions, potatoes, peas, and spices.",
      "3. Roll the dough into small circles and fill with the spiced potato mixture.",
      "4. Fold into triangles and deep fry until golden brown.",
      "5. Serve hot with chutney."
    ],
    prepTime: "30 minutes",
    cookTime: "20 minutes",
    servings: 4,
    count: 10
  },
  {
    id: 11,
    title: "Masala Chai",
    image: "https://via.placeholder.com/150?text=Masala+Chai",
    category: "Drinks",
    level: "Beginner",
    description: "A spiced tea brewed with milk, tea leaves, and a mixture of spices like cardamom, cinnamon, and ginger. A comforting drink often enjoyed in South Asia.",
    ingredients: [
      "2 cups water",
      "2 cups milk",
      "2 tbsp black tea leaves",
      "4 cardamom pods, crushed",
      "1 cinnamon stick",
      "1 inch ginger, grated",
      "2 tbsp sugar (optional)"
    ],
    instructions: [
      "1. Boil water with cardamom, cinnamon, and ginger.",
      "2. Add tea leaves and simmer for 5 minutes.",
      "3. Add milk and sugar, bring to a boil again.",
      "4. Strain into cups and serve hot."
    ],
    prepTime: "5 minutes",
    cookTime: "10 minutes",
    servings: 2,
    count: 8
  },
  {
    id: 12,
    title: "Paneer Butter Masala",
    image: "https://via.placeholder.com/150?text=Paneer+Butter+Masala",
    category: "Vegetarian",
    level: "Intermediate",
    description: "A rich and creamy dish made with paneer cubes simmered in a spiced tomato and cream sauce, perfect for pairing with naan or rice.",
    ingredients: [
      "200g paneer, cubed",
      "2 tomatoes, pureed",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1/2 cup heavy cream",
      "2 tbsp butter",
      "1 tsp garam masala",
      "Salt and pepper",
      "Coriander for garnish"
    ],
    instructions: [
      "1. Heat butter in a pan and sauté onions and garlic until soft.",
      "2. Add tomato puree and cook until oil separates.",
      "3. Stir in garam masala and cream, simmer for 5 minutes.",
      "4. Add paneer cubes and cook for another 5 minutes.",
      "5. Garnish with coriander and serve hot."
    ],
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
    count: 6
  }
];

export {recipes}