import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";
import { Shoppingcard } from '../StoreRedux/actions';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"


const GET_ONE_PRODUCT = gql`
    query getOneProduct($productId: Int!) {
        product(id: $productId) {
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

const sendReviewMutation = gql`
  mutation createReview($title:String!, $comment: String!, $userId: Int!, $productId: Int!)   {
    createReview(title: $title, comment: $comment, userId: $userId, productId: $productId) {
        title
        comment
    }
  }
`

export default function Productdetail() {
    const { id: productId } = useParams()
    console.log('testing params:', productId)

    //Shopping cart-action triggered on button click
    const dispatch = useDispatch();
    console.log('shopping cart')


    const addToShoppingOnClick = (e) => {
        e.preventDefault()
        dispatch(Shoppingcard(productId))
    }

    //FORM
    const [review, setReview] = useState("")

    function onReview(e) {
        console.log('review', e.target.value);
        setReview(e.target.value)
    }

    //SEND REVIEW TO BACKEND
    const [sendthisReview] = useMutation(sendReviewMutation);
    function sendReview(e) {
        console.log('send this review', e.target.value);
        sendthisReview({
            variables: { //variables is a constant for graphl mutations
                title: "hi",
                comment: review,
                userId: 1,
                productId: 2 //needs login to make it dynamic 
            },

        })

    }

    //Here  i get the product: 
    const { data, loading, error } = useQuery(GET_ONE_PRODUCT, { variables: { productId: parseInt(productId) } });
    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    console.log('product', data)
    return (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>


            <div style={{ display: "flex", justifyContent: 'space-around' }}>
                <div >
                    <h2 style={{ marginBottom: 30 }} > {data.product.name}</h2>
                    <img style={{ margin: '0 auto' }} width='600px' className="single-image-product" src={data.product.imageUrl}
                        alt="POLshop.com products">
                    </img>

                    <p style={{ width: '50%' }}>{data.product.review.map(item => {
                        return (
                            <div key={item.id}>{item.title} {item.comment}</div>

                        )
                    })}</p>
                    <form >
                        <p>
                            Leave a review
                    </p>

                        <input type="text" id="review-form" onChange={onReview}></input>
                        <button onClick={sendReview}>Submit Review</button>
                    </form>
                    <div>
                        <button style={{ display: "flex", padding: 15, marginTop: 30, backgroundColor: "black", color: "white" }}
                            onClick={addToShoppingOnClick}>Get it now</button>
                    </div>

                </div>
                <div></div>
            </div>






        </div>
    )

}


