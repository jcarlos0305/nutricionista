import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AddMealTimeButton = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.imageContainerStyle}>
          <TouchableOpacity onPress={props.onPress}>
            <Image
              style={styles.imageStyle}
              source={{ uri: 'http://www.freeiconspng.com/uploads/plus-icon-0.png' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainerStyle}>
          <Text style={styles.textStyle}>Tiempo de comida</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageStyle: {
    height: 20,
    width: 20
  },
  textStyle: {
    color: '#18bf04'
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AddMealTimeButton;
