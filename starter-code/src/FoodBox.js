import React, { Component } from 'react';
import filefoods from './foods.json';
import AddFormFood from './AddFoodForm';

//new image sample:
//https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg

class FoodBox extends Component {
  state = { foods: filefoods };

  addNewFood = food => {
    this.setState({ foods: [food, ...this.state.foods] });
  };

  render() {
    const { foods } = this.state;
    return (
      <div>
        <AddFormFood addNewFood={this.addNewFood} />
        {foods.map(({ name, image, calories }, i) => (
          <div key={i} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img alt={name} src={image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" defaultValue="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}
export default FoodBox;
