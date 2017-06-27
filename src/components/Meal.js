import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SimpleStepper from 'react-native-simple-stepper'
import CardSection from './CardSection';

class Meal extends Component {
  state = { amount: 1};

  componentWillMount() {
      this.setState({ amount: this.props.meal.amount });
  }

  valueChanged(value) {
    this.setState({ amount: value });
  }

  render() {
    return (
      <CardSection>
        <View style={styles.imageContainerStyle}>
          <TouchableOpacity onPress={() => this.props.updateState('deleteMeal', this.props.idMeal)}>
            <Image
              style={styles.imageStyle}
              source={{ uri: 'http://www.freeiconspng.com/uploads/cancel-close-button-png-9.png' }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerContentStyle}>
          <Text>{this.props.meal.name}</Text>
        </View>

        <View style={styles.imageContainerStyle}>
          <Text>{this.state.amount}</Text>
        </View>

        <View style={styles.imageContainerStyle}>
          <SimpleStepper
            valueChanged={(value) => this.valueChanged(value)}
            initialValue={this.props.meal.amount}
           />
        </View>

      </CardSection>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 10,
    width: 10
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default Meal;
