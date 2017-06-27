import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, color, buttonText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, { backgroundColor: color }]}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 0.2,
    borderColor: '#000000'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
