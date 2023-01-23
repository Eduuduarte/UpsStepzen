import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Card } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'

type Props = {
    item: Order
}

const OrderCard = ({ item }: Props) => {
    const tw = useTailwind();

    return (
        <TouchableOpacity>
            <Card containerStyle={[tw('rounded-lg'), { paddingHorizontal: 5}]}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Icon
                            name="truck-delivery"
                            color={"#EB6A&C"}
                            type="material-community"
                        />
                        <Text style={{ fontSize: 10 }}>
                            {new Date(item.createdAt).toDateString()}
                        </Text>
                    </View>

                    <View>
                        <Text style={{ color: 'gray', fontWeight: '400', fontSize: 10 }}>{item.carrier}-{item.trackingId}</Text>
                        <Text style={{ color: 'gray', fontWeight: '500', fontSize: 16 }}>{item.trackingItems.customer.name}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: '#EB6A7C' }}>{item.trackingItems.items.length} x</Text>
                        <Icon style={{ marginLeft: 2 }} name="box" type="feather" />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default OrderCard;