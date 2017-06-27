import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TimePickerAndroid, Picker, TextInput } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Meal from './Meal';

class MealTime extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.renderMeals = this.renderMeals.bind(this);
    this.state = { mealTimes: {} };
  }

  componentWillMount() {
    this.setState({ mealTimes: this.props.mealTime });
  }

  async showTimePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: true
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        if (minute === 0) {
          minute = '00';
        }
        this.updateState('time', hour + ':' + minute);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  updateState(attr, value) {
    let tempList = {};
    if (attr === 'name') {
      tempList = {
        name: value,
        time: this.state.mealTimes.time,
        meals: this.state.mealTimes.meals
      };
    } else if (attr === 'time') {
      tempList = {
        name: this.state.mealTimes.name,
        time: value,
        meals: this.state.mealTimes.meals
      };
    } else if (attr === 'meal') {
      tempList = {
        name: this.state.mealTimes.name,
        time: this.state.mealTimes.time,
        meals: this.state.mealTimes.meals.concat(value)
      };
    } else if (attr === 'deleteMeal') {
      this.state.mealTimes.meals.splice(value, 1);
    }
    this.setState({ mealTimes: tempList });
  }

  renderMeals() {
    return this.state.mealTimes.meals.map((meal, index) => (
      <Meal
        key={index}
        meal={meal}
        updateState={this.updateState}
        idMeal={index}
      />
    ));
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.imageContainerStyle}>
            <TouchableOpacity>
              <Image
                style={styles.imageStyle}
                source={{ uri: 'http://www.freeiconspng.com/uploads/cancel-close-button-png-9.png' }}
              />
            </TouchableOpacity>
          </View>


          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.updateState('name', text)}
            value={this.state.mealTimes.name}
          />

          <View style={styles.imageContainerStyle}>
            <TouchableOpacity onPress={() => this.showTimePicker()} style={[styles.dateStyle, { backgroundColor: '#4ea5ff' }]} >
              <Text>{this.state.mealTimes.time}</Text>
            </TouchableOpacity>
          </View>
        </CardSection>

        {this.renderMeals()}

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            onValueChange={itemValue => this.updateState('meal', { name: itemValue, amount: 1 })}
          >
            <Picker.Item label="Almidones" value="Almidones" />
            <Picker.Item label="Proteínas" value="Proteínas" />
            <Picker.Item label="Vegetales" value="Vegetales" />
            <Picker.Item label="Frutas" value="Frutas" />
            <Picker.Item label="Lácteos" value="Lácteos" />
            <Picker.Item label="Grasas" value="Grasas" />
            <Picker.Item label="Azúcares" value="Azúcares" />
          </Picker>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textInputStyle: {
    flex: 1
  },
  dateStyle: {
    padding: 5
  },
  imageStyle: {
    height: 20,
    width: 20
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default MealTime;
