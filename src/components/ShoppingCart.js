import React, { useEffect } from 'react';
import { selectShoppingCart } from '../StoreRedux/selector';
import { useSelector } from "react-redux"
import { useQuery, gql } from '@apollo/client'



const FIND_BY_ID = gql`
    query getProductById($productId: Int!) {
        product(id: $productId) {
            id
            name
            imageUrl
            review {
                title
                comment

            }
        }
    }
`

export default function ShoppingCart() {
    const shoppingCart = useSelector(selectShoppingCart)
    console.log('selector', shoppingCart)

    //Here finds the product by id

    const { data, loading, error } = useQuery(FIND_BY_ID);
    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <div>

            <h1>Shopping cart</h1>
            {data.map((item, key) => {
                return (
                    <div key={item.id}>{item.id}</div>
                )


            })}


        </div>
    )



}
