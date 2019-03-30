import React, { Component } from 'react';

class FoodCard extends Component {
  render() {
    const { food, addtoList } = this.props;
    const { name, image, calories } = food;
    return (
      <div className="box">
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
                <button
                  onClick={() => addtoList({ name, calories })}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodCard;
