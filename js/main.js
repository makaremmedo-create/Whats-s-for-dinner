var meals = [
    {
        title: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and beef bacon",
        image: "images/creamy-spaghetti-carbonara.jpg",
        rating: 4.8,
        reviews: 234,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        difficulty: "Easy",
        country: "Italian",
        isLong: false,
        ingredients: [
            "400g spaghetti pasta",
            "200g beef bacon, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Freshly ground black pepper",
            "Salt for pasta water"
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat. Add diced beef bacon and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
            "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with beef bacon.",
            "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
        ],
        nutrition: [
            { name: "Calories", value: "520 kcal", icon: "fa-fire" },
            { name: "Protein", value: "28g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "62g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "18g", icon: "fa-droplet" },
            { name: "Fiber", value: "3g", icon: "fa-seedling" },
            { name: "Sodium", value: "680mg", icon: "fa-cube" }
        ],
        tips: [
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water - it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream - authentic carbonara is made with eggs only"
        ]
    },
    {
        title: "Honey Garlic Salmon",
        description: "Pan-seared salmon with a sweet and savory glaze",
        image: "images/honey-garlic-salmon.jpg",
        rating: 4.9,
        reviews: 187,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        country: "Seafood",
        isLong: false,
        ingredients: [
            "2 salmon fillets (6oz each)",
            "3 tablespoons honey",
            "2 tablespoons soy sauce",
            "4 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1 teaspoon fresh ginger, grated",
            "Sesame seeds for garnish",
            "Green onions, sliced"
        ],
        instructions: [
            "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
            "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
            "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
            "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
        ],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-fire" },
            { name: "Protein", value: "35g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "28g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "14g", icon: "fa-droplet" },
            { name: "Fiber", value: "0g", icon: "fa-seedling" },
            { name: "Sodium", value: "720mg", icon: "fa-cube" }
        ],
        tips: [
            "Don't overcook salmon - it should be slightly pink in the center",
            "Use wild-caught salmon for best flavor and nutrition",
            "Let the sauce caramelize slightly for deeper flavor",
            "Pair with steamed broccoli or asparagus for a complete meal"
        ]
    },
    {
        title: "Thai Green Curry",
        description: "Vibrant and aromatic curry with vegetables and coconut milk",
        image: "images/thai-green-curry.jpg",
        rating: 4.7,
        reviews: 312,
        prepTime: "15 min",
        cookTime: "25 min",
        servings: "4 people",
        difficulty: "Intermediate",
        country: "Asian",
        isLong: false,
        ingredients: [
            "2 tablespoons green curry paste",
            "400ml coconut milk",
            "300g chicken breast, sliced",
            "1 red bell pepper, sliced",
            "100g green beans",
            "1 eggplant, cubed",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Fresh Thai basil leaves"
        ],
        instructions: [
            "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
            "Add half the coconut milk and stir to combine with the curry paste.",
            "Add sliced chicken and cook until no longer pink, about 5 minutes.",
            "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
            "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
            "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
        ],
        nutrition: [
            { name: "Calories", value: "420 kcal", icon: "fa-fire" },
            { name: "Protein", value: "26g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "22g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "26g", icon: "fa-droplet" },
            { name: "Fiber", value: "5g", icon: "fa-seedling" },
            { name: "Sodium", value: "890mg", icon: "fa-cube" }
        ],
        tips: [
            "Adjust spice level by using more or less curry paste",
            "Add vegetables in stages based on cooking time needed",
            "Fresh Thai basil is essential for authentic flavor",
            "Use full-fat coconut milk for richest, creamiest sauce"
        ]
    },
    {
        title: "Classic Beef Burger",
        description: "Juicy homemade burger with all the fixings",
        image: "images/classic-beef-burger.jpg",
        rating: 4.6,
        reviews: 421,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        difficulty: "Easy",
        country: "American",
        isLong: false,
        ingredients: [
            "500g ground beef (80/20)",
            "4 burger buns",
            "4 slices cheddar cheese",
            "Lettuce leaves",
            "Tomato slices",
            "Red onion, sliced",
            "Pickles",
            "Burger sauce or condiments"
        ],
        instructions: [
            "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
            "Season patties generously with salt and pepper on both sides.",
            "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast burger buns lightly on the grill or in a pan.",
            "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
        ],
        nutrition: [
            { name: "Calories", value: "650 kcal", icon: "fa-fire" },
            { name: "Protein", value: "38g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "42g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "35g", icon: "fa-droplet" },
            { name: "Fiber", value: "2g", icon: "fa-seedling" },
            { name: "Sodium", value: "920mg", icon: "fa-cube" }
        ],
        tips: [
            "Don't press down on burgers while cooking - keeps them juicy",
            "Make indent in center to prevent burger from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and flavor"
        ]
    },
    {
        title: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "images/mediterranean-quinoa-bowl.jpg",
        rating: 4.5,
        reviews: 156,
        prepTime: "20 min",
        cookTime: "35 min",
        servings: "2 people",
        difficulty: "Easy",
        country: "Mediterranean",
        isLong: true,
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
        ],
        nutrition: [
            { name: "Calories", value: "480 kcal", icon: "fa-fire" },
            { name: "Protein", value: "18g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "20g", icon: "fa-droplet" },
            { name: "Fiber", value: "10g", icon: "fa-seedling" },
            { name: "Sodium", value: "540mg", icon: "fa-cube" }
        ],
        tips: [
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein"
        ]
    },
    {
        title: "Chicken Tikka Masala",
        description: "Rich and creamy Indian curry with tender chicken pieces",
        image: "images/chicken-tikka-masala.jpg",
        rating: 4.7,
        reviews: 389,
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people",
        difficulty: "Intermediate",
        country: "Asian",
        isLong: true,
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons ginger, grated",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
        ],
        nutrition: [
            { name: "Calories", value: "450 kcal", icon: "fa-fire" },
            { name: "Protein", value: "38g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "24g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "22g", icon: "fa-droplet" },
            { name: "Fiber", value: "4g", icon: "fa-seedling" },
            { name: "Sodium", value: "760mg", icon: "fa-cube" }
        ],
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ]
    },
    {
        title: "Margherita Pizza",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        image: "images/margherita-pizza.jpg",
        rating: 4.9,
        reviews: 512,
        prepTime: "90 min",
        cookTime: "12 min",
        servings: "2 people",
        difficulty: "Intermediate",
        country: "Italian",
        isLong: true,
        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Parmesan cheese for topping"
        ],
        instructions: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature (usually 250°C/480°F).",
            "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
            "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
        ],
        nutrition: [
            { name: "Calories", value: "580 kcal", icon: "fa-fire" },
            { name: "Protein", value: "24g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "68g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "22g", icon: "fa-droplet" },
            { name: "Fiber", value: "4g", icon: "fa-seedling" },
            { name: "Sodium", value: "920mg", icon: "fa-cube" }
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ]
    },
    {
        title: "Beef Tacos",
        description: "Flavorful Mexican tacos with seasoned ground beef",
        image: "images/beef-tacos.jpg",
        rating: 4.6,
        reviews: 278,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        difficulty: "Easy",
        country: "American",
        isLong: false,
        ingredients: [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened, about 5 minutes.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
        ],
        nutrition: [
            { name: "Calories", value: "420 kcal", icon: "fa-fire" },
            { name: "Protein", value: "26g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "32g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "20g", icon: "fa-droplet" },
            { name: "Fiber", value: "4g", icon: "fa-seedling" },
            { name: "Sodium", value: "780mg", icon: "fa-cube" }
        ],
        tips: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option"
        ]
    },
    {
        title: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        image: "images/caesar-salad.jpg",
        rating: 4.4,
        reviews: 198,
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",
        difficulty: "Easy",
        country: "Mediterranean",
        isLong: false,
        ingredients: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese, shaved",
            "1 cup croutons",
            "2 anchovy fillets (optional)",
            "Lemon wedges",
            "Black pepper"
        ],
        instructions: [
            "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper."
        ],
        nutrition: [
            { name: "Calories", value: "320 kcal", icon: "fa-fire" },
            { name: "Protein", value: "12g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "18g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "22g", icon: "fa-droplet" },
            { name: "Fiber", value: "3g", icon: "fa-seedling" },
            { name: "Sodium", value: "680mg", icon: "fa-cube" }
        ],
        tips: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve"
        ]
    },
    {
        title: "Pad Thai",
        description: "Popular Thai stir-fried noodles with shrimp and peanuts",
        image: "images/pad-thai.jpg",
        rating: 4.8,
        reviews: 445,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Intermediate",
        country: "Asian",
        isLong: false,
        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "Lime wedges and cilantro"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro."
        ],
        nutrition: [
            { name: "Calories", value: "540 kcal", icon: "fa-fire" },
            { name: "Protein", value: "32g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "62g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "16g", icon: "fa-droplet" },
            { name: "Fiber", value: "4g", icon: "fa-seedling" },
            { name: "Sodium", value: "1120mg", icon: "fa-cube" }
        ],
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ]
    },
    {
        title: "French Onion Soup",
        description: "Rich beef broth with caramelized onions and melted cheese",
        image: "images/french-onion-soup.jpg",
        rating: 4.7,
        reviews: 267,
        prepTime: "15 min",
        cookTime: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        country: "Mediterranean",
        isLong: true,
        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup chicken broth",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated"
        ],
        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add a splash of broth and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
        ],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-fire" },
            { name: "Protein", value: "18g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "36g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "18g", icon: "fa-droplet" },
            { name: "Fiber", value: "4g", icon: "fa-seedling" },
            { name: "Sodium", value: "980mg", icon: "fa-cube" }
        ],
        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]
    },
    {
        title: "Chicken Stir-Fry",
        description: "Quick and healthy stir-fry with colorful vegetables",
        image: "images/chicken-stir-fry.jpg",
        rating: 4.5,
        reviews: 324,
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "4 people",
        difficulty: "Easy",
        country: "Asian",
        isLong: false,
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],
        instructions: [
            "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
            "Serve immediately over steamed rice or noodles."
        ],
        nutrition: [
            { name: "Calories", value: "320 kcal", icon: "fa-fire" },
            { name: "Protein", value: "34g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "18g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "12g", icon: "fa-droplet" },
            { name: "Fiber", value: "5g", icon: "fa-seedling" },
            { name: "Sodium", value: "840mg", icon: "fa-cube" }
        ],
        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]
    },
    {
        title: "Lasagna Bolognese",
        description: "Layered Italian pasta with rich meat sauce and béchamel",
        image: "images/lasagna-bolognese.jpg",
        rating: 4.9,
        reviews: 478,
        prepTime: "30 min",
        cookTime: "90 min",
        servings: "4 people",
        difficulty: "Intermediate",
        country: "Italian",
        isLong: true,
        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil"
        ],
        instructions: [
            "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
            "Cook lasagna sheets according to package directions. Drain and set aside.",
            "Preheat oven to 180°C (350°F).",
            "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
            "Top final layer with béchamel, mozzarella, and parmesan cheese.",
            "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
        ],
        nutrition: [
            { name: "Calories", value: "680 kcal", icon: "fa-fire" },
            { name: "Protein", value: "42g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "28g", icon: "fa-droplet" },
            { name: "Fiber", value: "6g", icon: "fa-seedling" },
            { name: "Sodium", value: "920mg", icon: "fa-cube" }
        ],
        tips: [
            "Make bolognese sauce a day ahead for better flavor",
            "Don't skip the resting time after baking",
            "Use fresh pasta sheets for best texture",
            "Freeze leftovers in individual portions"
        ]
    },
    {
        title: "Shrimp Scampi",
        description: "Garlicky shrimp in lemon butter sauce",
        image: "images/shrimp-scampi.jpg",
        rating: 4.8,
        reviews: 356,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        country: "Seafood",
        isLong: false,
        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup chicken broth",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes"
        ],
        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add chicken broth to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],
        nutrition: [
            { name: "Calories", value: "520 kcal", icon: "fa-fire" },
            { name: "Protein", value: "36g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "54g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "18g", icon: "fa-droplet" },
            { name: "Fiber", value: "3g", icon: "fa-seedling" },
            { name: "Sodium", value: "620mg", icon: "fa-cube" }
        ],
        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use homemade broth for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },
    {
        title: "Vegetable Curry",
        description: "Hearty vegetarian curry with coconut milk",
        image: "images/vegetable-curry.jpg",
        rating: 4.6,
        reviews: 289,
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people",
        difficulty: "Easy",
        country: "Asian",
        isLong: true,
        ingredients: [
            "2 potatoes, cubed",
            "1 cauliflower, florets",
            "2 carrots, sliced",
            "1 can chickpeas",
            "400ml coconut milk",
            "3 tablespoons curry powder",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Fresh spinach"
        ],
        instructions: [
            "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
            "Add potatoes and carrots, cook for 5 minutes.",
            "Pour in coconut milk and 1 cup water. Bring to simmer.",
            "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
            "Stir in fresh spinach and cook until wilted.",
            "Serve hot over basmati rice or with naan bread."
        ],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-fire" },
            { name: "Protein", value: "14g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "48g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "16g", icon: "fa-droplet" },
            { name: "Fiber", value: "12g", icon: "fa-seedling" },
            { name: "Sodium", value: "480mg", icon: "fa-cube" }
        ],
        tips: [
            "Add vegetables in order of cooking time needed",
            "Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired"
        ]
    },
    {
        title: "BBQ Pulled Beef",
        description: "Slow-cooked tender beef in smoky barbecue sauce",
        image: "images/bbq-pulled-beef.jpg",
        rating: 4.7,
        reviews: 412,
        prepTime: "15 min",
        cookTime: "240 min",
        servings: "4 people",
        difficulty: "Easy",
        country: "American",
        isLong: true,
        ingredients: [
            "1kg beef chuck roast",
            "1 cup BBQ sauce",
            "1/2 cup apple cider vinegar",
            "2 tablespoons brown sugar",
            "1 tablespoon paprika",
            "1 tablespoon garlic powder",
            "Burger buns",
            "Coleslaw for serving"
        ],
        instructions: [
            "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over beef chuck.",
            "Place beef in slow cooker with apple cider vinegar and 1/2 cup water.",
            "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
            "Remove beef and shred with two forks. Discard excess fat.",
            "Return shredded beef to slow cooker, mix with BBQ sauce.",
            "Serve on toasted buns with coleslaw on top."
        ],
        nutrition: [
            { name: "Calories", value: "620 kcal", icon: "fa-fire" },
            { name: "Protein", value: "48g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "52g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "22g", icon: "fa-droplet" },
            { name: "Fiber", value: "3g", icon: "fa-seedling" },
            { name: "Sodium", value: "1180mg", icon: "fa-cube" }
        ],
        tips: [
            "Use beef chuck for best results - it stays moist",
            "Let beef rest before shredding for juicier meat",
            "Make your own BBQ sauce for better flavor",
            "Leftovers freeze well for up to 3 months"
        ]
    },
    {
        title: "Greek Moussaka",
        description: "Traditional layered eggplant casserole with lamb",
        image: "images/greek-moussaka.jpg",
        rating: 4.8,
        reviews: 234,
        prepTime: "30 min",
        cookTime: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        country: "Mediterranean",
        isLong: true,
        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil"
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],
        nutrition: [
            { name: "Calories", value: "580 kcal", icon: "fa-fire" },
            { name: "Protein", value: "36g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "32g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "32g", icon: "fa-droplet" },
            { name: "Fiber", value: "8g", icon: "fa-seedling" },
            { name: "Sodium", value: "820mg", icon: "fa-cube" }
        ],
        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },
    {
        title: "Teriyaki Chicken Bowl",
        description: "Sweet and savory chicken over rice with vegetables",
        image: "images/teriyaki-chicken-bowl.jpg",
        rating: 4.7,
        reviews: 367,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "2 people",
        difficulty: "Easy",
        country: "Asian",
        isLong: false,
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot."
        ],
        nutrition: [
            { name: "Calories", value: "540 kcal", icon: "fa-fire" },
            { name: "Protein", value: "42g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "14g", icon: "fa-droplet" },
            { name: "Fiber", value: "4g", icon: "fa-seedling" },
            { name: "Sodium", value: "1240mg", icon: "fa-cube" }
        ],
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]
    },
    {
        title: "Caprese Sandwich",
        description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        image: "images/caprese-sandwich.jpg",
        rating: 4.5,
        reviews: 189,
        prepTime: "10 min",
        cookTime: "5 min",
        servings: "2 people",
        difficulty: "Easy",
        country: "Italian",
        isLong: false,
        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella, sliced",
            "2 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tablespoons pesto",
            "2 tablespoons balsamic glaze",
            "Olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Slice ciabatta bread in half horizontally.",
            "Toast bread lightly until just crispy.",
            "Spread pesto on both sides of bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
            "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
            "Close sandwich, cut in half, and serve immediately."
        ],
        nutrition: [
            { name: "Calories", value: "480 kcal", icon: "fa-fire" },
            { name: "Protein", value: "22g", icon: "fa-dumbbell" },
            { name: "Carbohydrates", value: "48g", icon: "fa-wheat-awn" },
            { name: "Fat", value: "22g", icon: "fa-droplet" },
            { name: "Fiber", value: "3g", icon: "fa-seedling" },
            { name: "Sodium", value: "680mg", icon: "fa-cube" }
        ],
        tips: [
            "Use ripe, in-season tomatoes for best flavor",
            "Buffalo mozzarella is traditional but harder to slice",
            "Toast bread lightly - not too crispy",
            "Add smoked turkey for a heartier sandwich"
        ]
    }
];

console.log(meals.length);

var lastIndex = -1;
var shownMeals = [];

function getRandomIndex() {
    if (shownMeals.length == meals.length) {
        shownMeals = [];
    }

    var currentIndex = Math.floor(Math.random() * meals.length);
    while (currentIndex == lastIndex || shownMeals.includes(currentIndex)) {
        currentIndex = Math.floor(Math.random() * meals.length);
    }

    // console.log(currentIndex);
    lastIndex = currentIndex;
    shownMeals.push(currentIndex);
    return currentIndex;
}

function showMeal(meal) {
    // console.log(meal);
    document.getElementById("mealImg").src = meal.image;
    document.getElementById("mealImg").alt = meal.title;
    document.getElementById("mealRate").innerHTML = meal.rating;
    document.getElementById("mealReviews").innerHTML = "(" + meal.reviews + " reviews)";
    document.getElementById("mealPrep").innerHTML = meal.prepTime;
    document.getElementById("mealCook").innerHTML = meal.cookTime;
    document.getElementById("mealServings").innerHTML = meal.servings;
    document.getElementById("mealLevel").innerHTML = meal.difficulty;
    document.getElementById("mealType").innerHTML = meal.country;
    document.getElementById("mealName").innerHTML = meal.title;
    document.getElementById("mealDesc").innerHTML = meal.description;

    var warning = "";
    if (meal.isLong) {
        warning = `<div class="warning rounded-3 p-3 mb-4">
            <div class="d-flex align-items-center">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                    <p class="fw-semibold">Extended Preparation Time</p>
                    <p class="small-text">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                </div>
            </div>
        </div>`;
    } else {
        warning = "";
    }
    document.getElementById("warningBox").innerHTML = warning;
    // document.getElementById("timeWarning").classList.remove("d-none");

    var ingredients = "";
    for (var i = 0; i < meal.ingredients.length; i++) {
        ingredients += `<li class="d-flex align-items-start">
            <span class="num rounded-circle d-flex justify-content-center align-items-center">${i + 1}</span>
            <span>${meal.ingredients[i]}</span>
        </li>`;
    }
    document.getElementById("ingredientsList").innerHTML = ingredients;

    var instructions = "";
    for (var i = 0; i < meal.instructions.length; i++) {
        instructions += `<div class="step d-flex align-items-start gap-3">
            <span class="step-num rounded-4 d-flex justify-content-center align-items-center">${i + 1}</span>
            <p>${meal.instructions[i]}</p>
        </div>`;
    }
    document.getElementById("instructionsList").innerHTML = instructions;

    var nutrition = "";
    for (var i = 0; i < meal.nutrition.length; i++) {
        nutrition += `<div class="col-md-6">
            <div class="nutri-item ${meal.nutrition[i].name.toLowerCase()} d-flex justify-content-between align-items-center p-3">
                <div class="d-flex align-items-center">
                    <span class="icon-box rounded-3"><i class="fa-solid ${meal.nutrition[i].icon}"></i></span>
                    <span class="name">${meal.nutrition[i].name}</span>
                </div>
                <span class="value">${meal.nutrition[i].value}</span>
            </div>
        </div>`;
    }
    document.getElementById("nutritionList").innerHTML = nutrition;

    var tips = "";
    for (var i = 0; i < meal.tips.length; i++) {
        tips += `<div class="tip d-flex align-items-start p-3">
            <i class="fa-solid fa-circle-check"></i>
            <p>${meal.tips[i]}</p>
        </div>`;
    }
    document.getElementById("tipsList").innerHTML = tips;
}

function changeMeal() {
    showMeal(meals[getRandomIndex()]);
    document.getElementById("recipe").scrollIntoView({ behavior: "smooth" });
}

showMeal(meals[getRandomIndex()]);
