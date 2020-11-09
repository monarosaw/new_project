const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[],
     },
     get appetizers(){
       return this._courses.appetizers;
     },
     get mains(){
       return this._courses.mains;
     },
     get desserts(){
       return this._courses.desserts;
     },
     set appetizers(appetizers){
       this._courses.appetizers=appetizers;
     },
     set mains(mains){
       this._courses.mains=mains;
     },
     set desserts(desserts){
       this._courses.desserts=desserts;
     },
     get courses(){
       return {
         appetizers: this.appetizers,
         mains:this.mains,
         desserts:this.desserts
       };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price:dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return dishes[randomIndex];
  },
  generateRandmMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Yoour meal is ${appetizer.name}, ${main.name}, and 
    ${dessert.name}, and the total price is ${totalPrice}`;
  }
  };
  

menu.addDishToCourse('mains', 'steak', 15)
menu.addDishToCourse('mains', 'hotpot', 80)
menu.addDishToCourse('mains', 'ribs', 30)
menu.addDishToCourse('appetizers', 'seaweed', 8.23)
menu.addDishToCourse('appetizers', 'tofu', 9.19)
menu.addDishToCourse('appetizers', 'sushi', 10)
menu.addDishToCourse('desserts', 'cake', 4.5)

console.log(menu.generateRandmMeal());

  