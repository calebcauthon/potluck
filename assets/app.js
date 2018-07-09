new Vue({
  el: '#app',
  data: {
    grains: [],
    veggies: [],
    grains: [],
    beans: [],
    sauces: null,
    veggie1: null,
    veggie2: null,
    sauce: null,
    bean: null,
    isShowingRecipe: false,
    isShowingIngredients: false,
    ingredients: []
  },
  beforeMount() {
    this.loadApplicationData()
      .then(data => {
        this.grains = data.grains;
        this.veggies = data.veggies;
        this.beans = data.beans;
        this.sauces = data.sauces;
      })
      .then(() => this.randomizeMeal());

  },
  methods: {
    loadApplicationData: function() {
      return (
        axios.get('/firebase-credentials')
        .then(response => getApplicationData(response.data))
      );
    },
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
        this.grain = findRandomThing(this.grains);
      }
    },
    pickRandomVeggie: function () {
      const lastVeggie1 = this.veggie1;
      const lastVeggie2 = this.veggie2;

      while(lastVeggie1 == this.veggie1 || lastVeggie2 == this.veggie2) {
        this.veggie1 = findRandomThing(this.veggies);
        this.veggie2 = findRandomThing(this.veggies);

        while (this.veggie2 == this.veggie1) {
          this.veggie2 = findRandomThing(this.veggies);
        }
      }
    },
    pickRandomSauce: function () {
      this.sauce = findRandomThing(this.sauces);
    },
    pickRandomBean: function () {
      this.bean = findRandomThing(this.beans);
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