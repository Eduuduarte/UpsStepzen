import { gql, useQuery } from '@apollo/client';

export const GET_CUSTOMERS = gql`
    query GetCustomers {
        getCustomers {
            value {
                email
                name
            }
            name
        }
    }
`;

export const GET_ORDERS = gql`
    getOrders {
        value {
            Address
            City
            Lat
            Lng
            carrier
            createdAt
            shippingCost
            trackingId
            trackingItems {
                customer_id
                customer {
                email
                name
                }
                items {
                name
                item_id
                price
                quantity
                }
            }
        }
    }
`;