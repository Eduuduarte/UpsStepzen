import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../screen/CustomerScreen';
import OrdersScreen from '../screen/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
  Clientes: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#59C1CC",
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Clientes') {
          return (
            <Icon
              name="users"
              type="entypo"
              color={focused ? "#59C1CC" : "gray"}
            />
          )
        } else if (route.name === 'Orders') {
          return (
            <Icon
              name="box"
              type="entypo"
              color={focused ? "#EB6A7C" : "gray"}
            />
          )
        }
      }
    })}>
      <Tab.Screen name="Clientes" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator;