import React, { useState } from 'react';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      style={styles.main}
    >
      <View style={styles.section}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="gray"
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },

  buttonGroup: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '80%'
  },

  button: {
    width: '40%'
  }
})

export default GoalInput;
