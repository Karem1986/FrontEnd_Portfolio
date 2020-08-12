import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom';


const GET_ONE_PRODUCT = gql`
    query getOneProduct($productId: Int!) {
        product(id: $productId) {
            id
            name
            imageUrl
        }
    }
`


export default function Productdetail() {
    const { id: productId } = useParams()
    console.log('testing params:', productId)

    const { data, loading, error } = useQuery(GET_ONE_PRODUCT, { variables: { productId: parseInt(productId) } });

    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    console.log('product', data)

    return (
        <div>

            <h2>Product name: {data.product.name}</h2>


        </div>
    )

}


