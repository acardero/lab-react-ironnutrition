import FormField from './FormField';
import CoolButton from './CoolButton';
import React, { Component } from 'react';

// name, number of calories, and an image

class AddFormFood extends Component {
  state = {
    form: false,
    name: '',
    image: '',
    calories: '',
  };

  toggleForm = () => {
    const {form} = this.state;
    this.setState({
      form: !form,
    });
  };

  onChangeHandler(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addNewFood(this.state);
    this.setState({
      name: '',
      image: '',
      calories: '',
    });
  }

  render() {
    const {form} = this.state;

    return (
      <div>
        <CoolButton OnClick={this.toggleForm}>
          {form?"Hide Form":"Add new Food"}
        </CoolButton>
        {this.state.form && (
          <form onSubmit={event => this.handleFormSubmit(event)}>
            <FormField
              onChange={e => this.onChangeHandler(e)}
              label="Name"
              name="name"
              type="text"
              value={this.state.name}
              placeholder="e.g Alex Smith"
            />
            <FormField
              label="Calories"
              name="calories"
              onChange={e => this.onChangeHandler(e)}
              type="text"
              value={this.state.calories}
              placeholder="e.g. 150"
            />
            <FormField
              label="Image"
              name="image"
              onChange={e => this.onChangeHandler(e)}
              type="text"
              value={this.state.image}
              placeholder="e.g. /pizza.png"
            />
            <input type="submit" />
          </form>
        )}
      </div>
    );
  }
}

export default AddFormFood;
