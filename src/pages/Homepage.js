import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from "react-router-dom";


export default function Homepage() {

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
        </div>
    )

}


