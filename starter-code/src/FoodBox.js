import React from 'react';
import foods from './foods.json';

function Container() {
  return (
    <div>
      <AddFormFood />
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
                  <input className="input" type="number" value="1" />
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
export default Container;
