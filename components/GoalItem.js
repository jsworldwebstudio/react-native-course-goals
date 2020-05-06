import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem} on >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  }
});

export default GoalItem;
