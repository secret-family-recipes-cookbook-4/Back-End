exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          user_id: 2,
          title: "Vegetable Spring Rolls",
          source: "Julia",
          notes: "Use almost any combo of veggies",
          img_url:
            "https://steamykitchen.com/wp-content/uploads/2013/01/vegetable-egg-rolls-recipe-featured-1165.jpg",
          ingredients:
            "spring roll wraps, thinly sliced nappa cabbage, bean sprouts",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "appetizer"
        },
        {
          id: 2,
          user_id: 3,
          title: "Halibut Steaks",
          source: "Grandma",
          notes: "Check to ensure doneness and prevent drying",
          img_url:
            "https://assets.bonappetit.com/photos/57adc3901b3340441497568f/16:9/w_1000,c_limit/butter-basted-halibut-steaks-with-capers.jpg",
          ingredients: "6oz halibut steaks, 3 tsp capers",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "seafood"
        },
        {
          id: 3,
          user_id: 1,
          title: "Mini Potato Pancake",
          source: "Jake",
          notes: "Makes a great appetizer",
          img_url:
            "https://assets.epicurious.com/photos/5761d0d88accf290434553ab/master/pass/classic-potato-pancakes.jpg",
          ingredients: "4 russet potatoes, peeled, 2 lge eggs",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "vegetarian"
        },
        {
          id: 4,
          user_id: 4,
          title: "Flour Tortillas",
          source: "Susely",
          notes: "Nothing beats fresh",
          img_url:
            "https://thecafesucrefarine.com/wp-content/uploads/Flour-Tortillas.jpg",
          ingredients: "4 cups all purpose flour, 2 tbps lard",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "bread"
        },
        {
          id: 5,
          user_id: 4,
          title: "Flank Steak",
          source: "Jerome",
          notes: "Tender, juicy, perfection",
          img_url:
            "https://s23209.pcdn.co/wp-content/uploads/2018/07/Grilled-Flank-Steak-and-VegetablesIMG_5680.jpg",
          ingredients: "2 lbs flank steak, 1/3 C soy sauce",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "steak"
        },
        {
          id: 6,
          user_id: 3,
          title: "Baby Back Ribs",
          source: "Billy",
          notes: "Falling off the bone goodness",
          img_url:
            "https://img.buzzfeed.com/video-api-prod/assets/c29816f9aa804990840bc86f972f39c8/BFV9034_OnePanBabyBackRibs-ThumbB1080.jpg",
          ingredients: "2 lbs baby back pork ribs, 1/2 C ketchup",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "pork"
        },
        {
          id: 7,
          user_id: 2,
          title: "Baked Mac-n-Cheese",
          source: "Jake",
          notes: "6 cheeses dancing in harmony",
          img_url:
            "https://media1.s-nbcnews.com/j/newscms/2019_33/1471214/six-cheese-truffle-mac-and-cheese-today-081519-tease_778781b10a3bd89615b0328e23253d40.today-inline-small2x.jpg",
          ingredients: "2 lbs cavatappi pasta, 1/4 cup unsalted butter",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "pasta"
        },
        {
          id: 8,
          user_id: 1,
          title: "Eggplant Parmesan",
          source: "Gianna",
          notes: "Baked version that saves effort and calories",
          img_url:
            "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2011/09/Baked-Eggplant-Parmesan-SQ-073.jpg",
          ingredients: "1 lge firm eggplant, 1 1/2 lb cheese",
          instructions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper.",
          tags: "Italian"
        }
      ]);
    });
};
