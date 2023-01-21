import { useQuery } from '@apollo/client';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Input } from '@rneui/themed';
import React, { useState, useLayoutEffect } from 'react';
import { Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import CustomerCard from '../components/CustomerCard';
import { GET_CUSTOMERS } from '../graphql/queries';
import { RootStackParamList } from '../navigator/RootNavigatior';
import { TabStackParamList } from '../navigator/TabNavigator';

export type CustomerScreenNavigationProp =
  CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, 'Customers'>, NativeStackNavigationProp<RootStackParamList>>;



const CustomerScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>('');
  const { loading, error, data } = useQuery(GET_CUSTOMERS);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <Image
        source={{ uri: 'https://links.papareact.com/3jc' }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder='Search by Customer'
        value={input}
        onChangeText={text => setInput(text)}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />

      {data?.getCustomers.map(({ name: ID, value: { email, name } }: CustomerResponse) => (
        <CustomerCard key={ID} email={email} name={name} userId={ID} />
      ))}
    </ScrollView>
  )

}

export default CustomerScreen;
