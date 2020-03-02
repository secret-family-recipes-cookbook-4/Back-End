exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          user_id: 2,
          title: "Vegetable Spring Rolls",
          source: "Julia",
          notes: "Use almost any combo of veggies",
          img_url: "https://steamykitchen.com/wp-content/uploads/2013/01/vegetable-egg-rolls-recipe-featured-1165.jpg"
        },
        {
          id: 2,
          user_id: 3,
          title: "Halibut Steaks",
          source: "Grandma",
          notes: "Check to ensure doneness and prevent drying",
          img_url: "https://assets.bonappetit.com/photos/57adc3901b3340441497568f/16:9/w_1000,c_limit/butter-basted-halibut-steaks-with-capers.jpg"
        },
        {
          id: 3,
          user_id: 1,
          title: "Mini Potato Pancake",
          source: "Jake",
          notes: "Makes a great appetizer",
          img_url: 'https://assets.epicurious.com/photos/5761d0d88accf290434553ab/master/pass/classic-potato-pancakes.jpg'
        },
        {
          id: 4,
          user_id: 4,
          title: "Flour Tortillas",
          source: "Susely",
          notes: "Nothing beats fresh",
          img_url: "https://thecafesucrefarine.com/wp-content/uploads/Flour-Tortillas.jpg"
        },
        {
          id: 5,
          user_id: 4,
          title: "Flank Steak",
          source: "Jerome",
          notes: "Tender, juicy, perfection",
          img_url: "https://s23209.pcdn.co/wp-content/uploads/2018/07/Grilled-Flank-Steak-and-VegetablesIMG_5680.jpg"
        },
        {
          id: 6,
          user_id: 3,
          title: "Baby Back Ribs",
          source: "Billy",
          notes: "Falling off the bone goodness",
          img_url: "https://img.buzzfeed.com/video-api-prod/assets/c29816f9aa804990840bc86f972f39c8/BFV9034_OnePanBabyBackRibs-ThumbB1080.jpg"
        },
        {
          id: 7,
          user_id: 2,
          title: "Baked Mac-n-Cheese",
          source: "Jake",
          notes: "6 cheeses dancing in harmony",
          img_url: "https://media1.s-nbcnews.com/j/newscms/2019_33/1471214/six-cheese-truffle-mac-and-cheese-today-081519-tease_778781b10a3bd89615b0328e23253d40.today-inline-small2x.jpg"
        },
        {
          id: 8,
          user_id: 1,
          title: "Eggplant Parmesan",
          source: "Gianna",
          notes: "Baked version that saves effort and calories",
          img_url: "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2011/09/Baked-Eggplant-Parmesan-SQ-073.jpg"
        }
      ]);
    });
};
