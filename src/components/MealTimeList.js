import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios'; npm install --save axios
import MealTime from './MealTime';
import Card from './Card';
import CardSection from './CardSection';
import AddMealTimeButton from './AddMealTimeButton';

class MealTimeList extends Component {

  state = { mealTimes: [] };

  componentWillMount() {
    // axios.get('url').then(response => console.log(response)); para requests en apis web
    // this.setState({ mealTimes: [{ nombre: 'Tiempo de comida' }] });
  }

  renderMealtimes() {
    return this.state.mealTimes.map( (mealTime, index) =>
      <MealTime key={index} mealTime={mealTime}/>
    );
  }

  addNewMealTime() {
    let tempList = this.state.mealTimes.concat({ name: 'Nuevo Tiempo de comida', time: "Hora", meals: [] });
    this.setState({ mealTimes: tempList});
  }

  render() {
    return (
      <ScrollView>
        {this.renderMealtimes()}
        <AddMealTimeButton onPress={() => this.addNewMealTime()}/>
      </ScrollView>
    );
  }
}

export default MealTimeList;
