import { useNavigation } from '@react-navigation/native';
import { Card, Icon, Text } from '@rneui/themed';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { CustomerScreenNavigationProp } from '../screen/CustomerScreen';

type Props = {
  email: string;
  name: string;
  userId: string
}

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyModal', { 
      name: name,
      userId: userId
    })}>
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View>
          <View style={tw("flex-row justify-between")}>
            <View>
              <Text style={tw("text-2xl font-bold")}>{name}</Text>
              <Text style={[tw('text-sm'), { color: '#59C1CC' }]}>ID: {userId}</Text>
            </View>

            <View style={[tw('flex-row'), {justifyContent: 'flex-end', alignItems: "center"}]}>
              <Text style={{ color: '#59C1CC'}}>{loading ? "loading..." : `${orders.length} x`}</Text>
              <Icon
                style={tw("mb-5 ml-auto")}
                name="box"
                type="entypo"
                color="#59C1CC"
                size={50}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CustomerCard;