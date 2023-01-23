import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { RootStackParamList } from '../navigator/RootNavigatior';
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTailwind } from 'tailwind-rn/dist';
import useOrders from '../hooks/useOrders';
import { Button, Image } from '@rneui/themed';

// type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
  >;

const OrdersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({focused, color}) => (
        <Text style={{ color: focused ? "#EB6A7C" : color, fontSize: 10 }}>Orders</Text>
      )
    })
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#EB6A7C"}}>
      <Image 
        source={{uri: "https://links.papareact.com/m51"}}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View>
        <Button 
        onPress={() => setAscending(!ascending)}
        color="pink"
        titleStyle={{ color: "gray", fontWeight: "400" }}
        style={{padding: 10}}
        >
          {ascending ? "Showing: oldest first" :  "Showing: Most recent first"}
        </Button>

        {orders?.sort((a, b) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
          }
        })}
      </View>
    </ScrollView>
  )
}

export default OrdersScreen;