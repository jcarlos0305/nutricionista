import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const ButtonWrapper = () => {
  return (
    <View style={styles.buttonStyle}>
      <Button buttonText={'Cancelar'} color={'#b6b6b6'} onPress={() => console.log('Por implementar')} />
      <Button buttonText={'Listo'} color={'#149d3e'} onPress={() => console.log('Por implementar')} />
    </View>
  );
};

const styles = {
  buttonStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ButtonWrapper;
