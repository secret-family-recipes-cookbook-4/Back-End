exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          id: 1,
          recipe_id: 1,
          steps:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper."
        },
        {
          id: 2,
          recipe_id: 1,
          steps:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa."
        },
        {
          id: 3,
          recipe_id: 1,
          steps:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          recipe_id: 2,
          steps:
            "Quis sumo persecuti ius ad, ut delenit similique his. Cibo iriure ut his. Iisque assentior sea an, cu dicit efficiendi sea."
        },
        {
          id: 5,
          recipe_id: 2,
          steps:
            "An illud philosophia mea, mea fierent vulputate efficiendi te. Ad lorem luptatum adolescens pri. Cum alienum epicuri in."
        },
        {
          id: 6,
          recipe_id: 2,
          steps: "Detracto omnesque mei no, utroque deleniti singulis at sea."
        },
        {
          id: 7,
          recipe_id: 3,
          steps: "Ad lorem luptatum adolescens pri. Cum alienum epicuri in."
        },
        {
          id: 8,
          recipe_id: 3,
          steps:
            "Velit aliquip torquatos at eos, usu at cetero similique rationibus"
        },
        {
          id: 9,
          recipe_id: 4,
          steps:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper."
        },
        {
          id: 10,
          recipe_id: 4,
          steps:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa."
        },
        {
          id: 11,
          recipe_id: 5,
          steps:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 12,
          recipe_id: 5,
          steps:
            "Quis sumo persecuti ius ad, ut delenit similique his. Cibo iriure ut his. Iisque assentior sea an, cu dicit efficiendi sea."
        },
        {
          id: 13,
          recipe_id: 5,
          steps:
            "An illud philosophia mea, mea fierent vulputate efficiendi te. Ad lorem luptatum adolescens pri. Cum alienum epicuri in."
        },
        {
          id: 14,
          recipe_id: 6,
          steps: "Detracto omnesque mei no, utroque deleniti singulis at sea."
        },
        {
          id: 15,
          recipe_id: 6,
          steps: "Ad lorem luptatum adolescens pri. Cum alienum epicuri in."
        },
        {
          id: 16,
          recipe_id: 7,
          steps:
            "Velit aliquip torquatos at eos, usu at cetero similique rationibus"
        },
        {
          id: 17,
          recipe_id: 7,
          steps: "an quodsi ancillae neglegentur per. Ad duo laudem ignota. "
        },
        {
          id: 18,
          recipe_id: 7,
          steps:
            "usu at cetero similique rationibus, sed amet facilis vivendo no"
        },
        {
          id: 19,
          recipe_id: 8,
          steps: "Ad lorem luptatum adolescens pri. Cum alienum epicuri in."
        },
        {
          id: 20,
          recipe_id: 8,
          steps: "Detracto omnesque mei no, utroque deleniti singulis at sea."
        }
      ]);
    });
};
