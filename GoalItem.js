import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return(
       
        <View style ={styles.goalItem} >
          <Pressable 
            onPress={props.onDelete}
            //</View>android_ripple={{color: '#210466'}}
            style={({pressed})=>pressed  && styles.pressedItem}
            >
              <Text style = {styles.goaltext}>{props.text}</Text>
              </Pressable>
              </View> 
              
    )
}
const styles = StyleSheet.create({
    goalItem: {
       marginTop: 15,
       borderRadius: 6,
       backgroundColor: '#5e0acc' ,
       },
       goaltext: {
        color: 'white',
        margin: 8,
        padding: 3,
       },
    pressedItem: {
        opacity: 0.5,
    }

})

module.exports = GoalItem;

