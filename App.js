import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

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
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(
      currentGoals => currentGoals.filter(goal => goal.id !== goalId)
    )
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id} // Caso queira usar um nome diferente de key
        data={courseGoals}
        renderItem={
          ({ item }) => (
            <GoalItem 
              onDelete={removeGoalHandler.bind(this, item.id)}
              title={item.value}
            />)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#88335844",
  },
});
