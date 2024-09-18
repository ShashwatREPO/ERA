// import { StyleSheet,Image, Text, View } from 'react-native'
// import React from 'react'

// export default function searching() {
//   return (
//     <View className='flex h-full w-full '>
//         <Image source={require("../assets/images/added/finding.png")} resizeMode='contain'/>
//     </View>
//   )
// }

import { StyleSheet, Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; // To navigate to a new screen

export default function Searching() {
  const navigation = useNavigation();

  // Use useEffect to navigate after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the new screen after 3 seconds
      navigation.navigate('afterfinding'); // Replace 'NextScreen' with your target screen name
    }, 3000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/images/added/finding.png")} 
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
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});
