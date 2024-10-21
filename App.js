import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput'
import { StatusBar } from 'expo-status-bar';

export default function App() {
   
   const [goals, setGoals]= useState([]);
   const[isModelVisible, setIsModelVisible] = useState(false) 
  

  function addGoalHandler(goalText){
    setGoals((currentgoals) => [...currentgoals, goalText])

  }

  function deleteItem(index){
    const newGoals = goals.filter((el,i) =>i!=index)
    setGoals(newGoals); 
  }
  function startAddGoalHandler(){
    setIsModelVisible(true);
  }

  function closeGoalHandler(){
    setIsModelVisible(false);
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#A070D6" onPress={startAddGoalHandler}/>
      <GoalInput onClose={closeGoalHandler} visible={isModelVisible} onAddGoal ={addGoalHandler}/>
      <View style={styles.goalContainer}>
      <FlatList 
        data={goals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item} onDelete={() => deleteItem(itemData.index)}
          />}} />
      
      </View>
      
    </View>
    </>
    
     
    
  );
}

const styles = StyleSheet.create({
 appContainer: {
  paddingTop: 50,
  paddingHorizontal: 16,
  flex: 1,
  backgroundColor: '#1A0037'
 },
 
 goalContainer: {
  flex: 4,
 },
 
});
