import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from "react"
function GoalInput(props){
    const [goalText, setGoalText] = useState("")
    function goalInputHandler(text){
        setGoalText(text)
      }

      function addGoalHandler() {
        props.onAddGoal(goalText)
        props.onClose();
      }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('./assets/images/Goal.png')}/>
        <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}placeholder='Type your goal'/>
        <View style={styles.buttonContainer}>
          
        <View style={styles.Button}>
          <Button color="#f31282" title="cancel" onPress={props.onClose}/>
        </View >
        <View style={styles.Button}>
            <Button color="#5e0acc" onPress={addGoalHandler} title='Add Goal'/> 
          </View>
           

        </View>
        
      </View>
      </Modal>
       
    )
}
const styles= StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 24,
        borderBottomColor: 'grey',
        flex: 1,
        padding: 16,
        backgroundColor: '#1A0037'
      
       },
       textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#e4d0ff'
       },
       buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
       },
       Button: {
        width: 100,
        marginHorizontal: 8
       },
       image: {
        width: 200,
        height: 200,
        margin: 20,

       }
       
})

module.exports = GoalInput; 