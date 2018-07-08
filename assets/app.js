function startApplication(grains, veggies, beans, sauces) {
  return new Vue({
    el: '#app',
    data: {
      grain: null,
      veggie1: null,
      veggie2: null,
      sauce: null,
      bean: null,
      isShowingRecipe: false,
      isShowingIngredients: true,
      ingredients: []
    },
    beforeMount() {
      this.randomizeMeal();
    },
    methods: {
      randomizeMeal: function() {
        this.pickRandomGrain();
        this.pickRandomVeggie();
        this.pickRandomSauce();
        this.pickRandomBean();
        this.ingredients = [this.grain, this.veggie1, this.veggie2, this.sauce, this.bean];
        this.showIngredients();
      },
      pickRandomGrain: function () {
        const lastGrain = this.grain;

        while(lastGrain == this.grain) {
          this.grain = findRandomThing(grains);
        }
      },
      pickRandomVeggie: function () {
        const lastVeggie1 = this.veggie1;
        const lastVeggie2 = this.veggie2;

        while(lastVeggie1 == this.veggie1 || lastVeggie2 == this.veggie2) {
          this.veggie1 = findRandomThing(veggies);
          this.veggie2 = findRandomThing(veggies);

          while (this.veggie2 == this.veggie1) {
            this.veggie2 = findRandomThing(veggies);
          }
        }
      },
      pickRandomSauce: function () {
        this.sauce = findRandomThing(sauces);
      },
      pickRandomBean: function () {
        this.bean = findRandomThing(beans);
      },
      showRecipe: function() {
        this.isShowingIngredients = false;
        this.isShowingRecipe = true;
      },
      showIngredients: function() {
        this.isShowingRecipe = false;
        this.isShowingIngredients = true;
      }
    }
  });

  function findRandomThing(things) {
    var max = things.length - 1;
    var randomNumber = Math.floor(Math.random() * (Math.floor(max) + 1));
    return things[randomNumber];
  }
}