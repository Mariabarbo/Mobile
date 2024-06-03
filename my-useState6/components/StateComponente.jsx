import { useState } from "react";
import {Text, View, StyleSheet, Button} from "react-native";

const Contador = () =>{

const [count, setCount] = useState(0);
  
    return(
        <View style={styles.container}>
            <View style={styles.container2}>

       <Text style={styles.negrito}>Você clicou {count} vezes!</Text>

       <Button
       title="Clique aqui"
       onPress={() => setCount(count + 1)}
       />    

        </View>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
      margin: 10,
      padding: 10,
      backgroundColor: "pink"
  
    },

    container2:{
      alignItems: 'center',
      borderWidth: 5,
      borderStyle: 'dashed',
      borderColor: 'purple',
      marginTop: 200,
      marginBottom: 200 
    },
  
  
    negrito: {
      fontWeight: 'bold',
      fontSize: 301
    },

    
})

export default Contador