import {Text, View, Image} from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View className='flex  w-full flex-row justify-between align-middle'>
        <View className="">
            <Text className='text-lg font-bold'>Hello,</Text>
            <Text className='text-primary text-lg font-bold'>John Doe</Text>
        </View>
        <Image source={require('../../assets/images/added/customercare.png')} className='' />
    </View>
  )
}