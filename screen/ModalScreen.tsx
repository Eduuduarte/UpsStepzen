import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigatior';
import useCustomerOrders from '../hooks/useCustomerOrders';
import DeliveryCard from '../components/DeliveryCard';

type ModalScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, "MyModal">>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const {
        params: { name, userId }
    } = useRoute<ModalScreenRouteProp>();

    const { loading, error, orders } = useCustomerOrders(userId);
    return (
        <View>
            <TouchableOpacity onPress={navigation.goBack} style={[tw('absolute'), { zIndex: 10, top: 5, right: 5 }]} >
                <Icon
                    name='closecircle'
                    type='antdesign'
                />
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
                <View style={{borderColor: "#59C1CC", borderBottomWidth: 1, paddingBottom: 10}}>
                    <Text style={[tw("font-bold"), {textAlign: 'center', fontSize: 20, color: "#59C1CC"}]}>{name}</Text>
                    <Text style={{textAlign: 'center', fontSize: 16, fontStyle: 'italic'}}>deliveries</Text>
                </View>
            </View>

            <FlatList
                contentContainerStyle={{ paddingBottom: 200}}
                data={orders}
                keyExtractor={order => order.trackingId}
                renderItem={({ item: order }) => <DeliveryCard order={order} />}
            />
        </View>
    )
}

export default ModalScreen;