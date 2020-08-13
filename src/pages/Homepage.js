import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from "react-router-dom";


export default function Homepage() {

    //Sort by price- local state 
    // set up an html select with some options: "price", "amounOfReviews"
    // you have to control it with local state and set the correct option:
    // https://github.com/Codaisseur/developer-resource-explorer/commit/84dc9327ec8bf554e881d3e84ee30130b78d80e7 
    // console.log() your state "sortBy", that should change between the 2 options

    const [sortBy, setSortBy] = useState(null)
    const [productsSorted, setSortedProducts] = useState([])
    // "price" || "amountOfReviews";
    console.log('sortBy', sortBy)

    console.log(sortBy) // price || amountOfReviews
    const { data, loading, error } = useQuery(gql`
    query {
        allProducts {
            id
            name
            imageUrl
            price
            review {
                title
                comment 
            }

       
        }
            }
        `);


    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    function sortedData() {

        if (sortBy === "price") {
            console.log('sort by price')
            return [...data.allProducts].sort((a, b) => a.price > b.price ? 1 : -1)

        }
        else if (sortBy === "review") {
            console.log("sort by reviews")
            return [...data.allProducts].sort((a, b) => a.review.length > b.review.length ? 1 : -1)

        }
        else {
            return data.allProducts
        }
    }
    console.log('data', data)


    function handleClick(e) {
        console.log('event', e);
    }

    return (
        <div style={{ display: "flex" }}>
            <div>
                <h2>
                    <select
                        style={{ backgroundColor: "black", color: 'white', marginTop: 40 }}
                        className="sorting-homepage"
                        placeholder="sortybypriceandreviews"
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value)}
                    >
                        <option value="">Sort by price and reviews</option>
                        <option value="price">Price</option>
                        <option value="review">Amount of reviews</option>
                    </select>
                </h2>


            </div>

            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {sortedData().map(item => {
                    return (
                        <div key={item.id}>
                            {item.name}
                            <Link to={`/productpage/${item.id}`}>
                                <img id={item.id} className="products-homepage" src={item.imageUrl}
                                    alt="POLshop.com products" onClick={((e) => handleClick(e))}>
                                </img></Link>

                        </div>
                    )
                })}

            </div>


        </div>
    )

}


