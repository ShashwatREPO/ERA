import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function afterfinding() {
  return (
        <View style={styles.container}>
          <Image 
            source={require("../assets/images/added/afterfinding.png")} 
            resizeMode='contain' 
            style={styles.image}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: "100%",
        height: "100%",
      },
      text: {
        marginTop: 20,
        fontSize: 18,
        color: 'gray',
      },
    });