import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Dimensions
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisibleModal, setVisibleModal] = useState(false)

  const addGoalHandler = (goalTitle) => {
    // Esta maneira pode haver erro
    // setCourseGoals([...courseGoals, enteredGoal])
    // Esta maneira sempre é garantida de funcionar
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle,
      },
    ]);

    setVisibleModal(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(
      currentGoals => currentGoals.filter(goal => goal.id !== goalId)
    )
  }

  const cancelAddGoalHandler = () => {
    setVisibleModal(false)
  }

  return (
    <View style={styles.container}>
      <Button
        title='Add new goal'
        onPress={() => setVisibleModal(true)}
      />
      <GoalInput
        visible={isVisibleModal}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id} // Caso queira usar um nome diferente de key
        data={courseGoals}
        renderItem={
          ({ item }) => (
            <GoalItem 
              onDelete={removeGoalHandler.bind(this, item.id)}
              title={item.value}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
