import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

const CustomerScreen = () => {
    const tw = useTailwind();

    return (
      <SafeAreaView>
        <Text style={tw("text-blue-500")}> textInComponent </Text>
      </SafeAreaView>
    )

}

export default CustomerScreen;
