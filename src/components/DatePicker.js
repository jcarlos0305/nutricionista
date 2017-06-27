import React, { Component } from 'react';
import { View, DatePickerAndroid, TouchableOpacity, Text } from 'react-native';
import Button from './Button';

class DatePicker extends Component {
  state = { dateFrom: new Date(), dateTo: new Date(new Date().getTime() + 7 * 86400000) };

  monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];

  async showPicker(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ dateFrom: new Date(year,month,day), dateTo: new Date(new Date(year,month,day).getTime() + 7 * 86400000) });
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => this.showPicker()} style={[styles.dateStyle,{backgroundColor: '#4ea5ff'}]} >
          <Text>{this.state.dateFrom.getDate() + ' de ' + this.monthNames[this.state.dateFrom.getMonth()] + ' de ' + this.state.dateFrom.getFullYear()}</Text>
        </TouchableOpacity>
        <Text style={styles.dateStyle} >a   {this.state.dateTo.getDate() + ' de ' + this.monthNames[this.state.dateTo.getMonth()] + ' de ' + this.state.dateTo.getFullYear()}</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  dateStyle: {
    borderWidth: 0.1,
    marginLeft: 15,
    padding: 5
  }
};

export default DatePicker;
