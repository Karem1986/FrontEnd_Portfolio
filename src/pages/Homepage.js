import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from "react-router-dom";


export default function Homepage() {

    //Sort by price- local state 
    // set up an html select with some options: "price", "amounOfReviews"
    // you have to control it with local state and set the correct option:
    // https://github.com/Codaisseur/developer-resource-explorer/commit/84dc9327ec8bf554e881d3e84ee30130b78d80e7 
    // console.log() your state "sortBy", that should change between the 2 options

    const [sortBy, setSortBy] = useState(null) // "price" || "amountOfReviews";
    console.log('sortBy', sortBy)

    console.log(sortBy) // price || amountOfReviews
    const { data, loading, error } = useQuery(gql`
    query {
        allProducts {
            id
            name
            imageUrl
        }
            }
        `);

    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    //Sorting-2nd part 
    if (sortBy === "price") {
        data.allProducts.sort(a, b => a.price - b.price)
    }
    if (sortBy === "reviews") {
        data.allProducts.sort(a, b => a.allProducts.reviews.length - b.allProducts.reviews.length)
    }

    function handleClick(e) {
        console.log('event', e);
    }

    return (
        <div>
            {data.allProducts.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}

                        <Link to={`/productpage/${item.id}`}><img id={item.id} className="products-homepage" src={item.imageUrl}
                            alt="POLshop.com products" onClick={((e) => handleClick(e))}>

                        </img></Link>

                    </div>
                )
            })}

            <h2>
                Sort by price or review
                <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                >
                    <option>Price</option>
                    <option>Amount of reviews</option>
                </select>

            </h2>
        </div>
    )

}


