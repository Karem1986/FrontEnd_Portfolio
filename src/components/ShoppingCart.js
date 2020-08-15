import React from 'react';
import { selectShoppingCart } from '../StoreRedux/selector';
import { useSelector } from "react-redux"
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom';

//multiples ids in backend
//use it here in the query 
const FIND_BY_ID = gql`
   query arrayProducts($Ids: [Int]) {
        arrayProducts(containsIds: $Ids) {
            id
            name
            imageUrl
            review {
                id
                title
                comment

            }
        }
    }

`

export default function ShoppingCart() {

    const { id: containsIds } = useParams()
    console.log('testing params:', containsIds)
    const shoppingCart = useSelector(selectShoppingCart)
    // console.log('selector', shoppingCart[0].id) // id of the first element.
    const arrayShoppingproducts = shoppingCart.map(item => parseInt(item.id))
    console.log('array', arrayShoppingproducts)
    //Here finds the product by id
    // [1,3,6,2]
    const { data, loading, error } = useQuery(FIND_BY_ID, { variables: { Ids: arrayShoppingproducts } });//
    console.log('data', data)
    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;



    return (
        <div>

            <h1>Shopping cart</h1>
            {data.arrayProducts.map((item, key) => {
                return (
                    <>
                        <div key={item.id}>{item.name} {item.review.comment}</div>
                        <img style={{ margin: '0 auto' }} width='600px' className="single-image-product" src={item.imageUrl}
                            alt="red-dress" />
                    </>



                )

            })}


        </div>
    )



}
