import { View, Text } from 'react-native'
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Card, Divider, Icon } from '@rneui/themed';
import { color } from '@rneui/base';

type Props = {
  order: Order;
}

const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind();

  return (
    <Card containerStyle={
      {
        backgroundColor: "#59C1cc",
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        borderRadius: 5,
      }
    }>
      <View>
        <Icon name="box" type="entypo" size={50} color="white" />
        <View>
          <Text style={[tw("uppercase font-bold"), {
            color: "#FFFFFF",
            textAlign: 'center',
            fontSize: 12
          }]}>
            {order.carrier} - {order.trackingId}
          </Text>
          <Text style={[tw('font-bold'), {
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: 18
          }]}>
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color='white'/>

          <View style={{maxWidth: "auto"}}>
            <Text style={[tw("font-bold"), {
              marginTop: 10,
              textAlign: 'center',
              color: '#FFFFFF'
            }]}>Address</Text>

            <Text style={{
              fontSize: 12,
              textAlign: "center",
              color: "#FFFFFF"
            }}>
              {order.Address}, {order.City}
            </Text>

            <Text style={{
              textAlign: "center",
              fontSize: 12,
              fontStyle: "italic",
              color: "#FFFFFF"
            }}>Shipping Cost: R$ {order.shippingCost}</Text>
          </View>
        </View>
      </View>

      <Divider color='#FFFFFF'/>

      <View style={tw('p-5')}>
        {order.trackingItems.items.map((item) => (
          <View key={item.item_id} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
              <Text style={{
                fontSize: 12,
                fontStyle: 'italic',
                color: "#FFFFFF"
              }}>{item.name}</Text>
              <Text style={{
                fontSize: 14,
                color: "#FFFFFF"
              }}>x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  )
}

export default DeliveryCard;