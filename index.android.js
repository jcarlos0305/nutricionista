import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MealTimeList from './src/components/MealTimeList';
import ButtonWrapper from './src/components/ButtonWrapper';
import DatePicker from './src/components/DatePicker';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Semana Nueva'} />
    <DatePicker />
    <MealTimeList />
    <ButtonWrapper />
  </View>
);

AppRegistry.registerComponent('Nutricionista', () => App);
