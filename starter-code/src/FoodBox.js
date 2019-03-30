import React, { Component } from 'react';
import filefoods from './foods.json';
import AddFormFood from './AddFoodForm';
import FoodCard from './FoodCard';
import FormField from './FormField';
import TodayFood from './TodayFood';

//new image sample:
//https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg

class FoodBox extends Component {
  state = {
    foods: filefoods,
    filtered: [],
    search: '',
    todayFood: [],
    totalCalories: 0,
  };

  addNewFood = food => {
    this.setState({ foods: [food, ...this.state.foods] });
  };

  addFoodtoList = food => {
    const { totalCalories, todayFood } = this.state;
    this.setState({
      totalCalories: totalCalories + +food.calories,
      todayFood: [...todayFood, food],
    });
  };

  filterBar = e => {
    const search = e.target.value.toLowerCase();
    const filteredFoods = this.state.foods.filter(
      food => food.name.toLowerCase().indexOf(search) !== -1
    );
    filteredFoods.sort(function(a, b) {
      if (a.name.indexOf(search) > b.name.indexOf(search)) return 1;
      if (a.name.indexOf(search) < b.name.indexOf(search)) return -1;
      return a.name > b.name ? 1 : -1;
    });

    this.setState({ filtered: filteredFoods, search });
  };

  render() {
    const { foods, filtered, search, totalCalories, todayFood } = this.state;
    const listFood = search.length ? filtered : foods;
    return (
      <div>
        <FormField
          label="Search Bar"
          name="calories"
          onChange={e => this.filterBar(e)}
          type="text"
          value={this.state.calories}
          placeholder="e.g. Pizza"
        />
        <AddFormFood addNewFood={this.addNewFood} />
        <div className="halfScreen">
          {listFood.map((food, i) => (
            <FoodCard key={i} food={food} addtoList={this.addFoodtoList} />
          ))}
        </div>
        <TodayFood items={todayFood} totalCalories={totalCalories} className="halfScreen"/>
      </div>
    );
  }
}
export default FoodBox;
