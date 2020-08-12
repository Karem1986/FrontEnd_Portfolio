import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useHistory, Link } from "react-router-dom";


export default function Homepage() {
    const history = useHistory();


    // const res = useQuery(gql`
    //     query {
    //         allProducts {
    //             name
    //             imageUrl
    //         }
    //             }
    //         `
    // )
    // console.log('res', res)

    const { data, loading, error } = useQuery(gql`
    query {
        allProducts {
            name
            imageUrl
        }
            }
        `);

    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    function goToProductDetailpage(event) {
        event.preventDefault()

        history.push("/productpage/:id?")
        console.log('test target value', event.target.value)
    }

    function handleClick(e, data) {
        // access to e.target here
        history.push("/productpage/:id?")
        console.log('data', data);
    }

    return (
        <div>

            {data.allProducts.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}

                        <Link><img id={item.id} className="products-homepage" src={item.imageUrl}
                            alt="POLshop.com products" onClick={((e) => handleClick(e, data))}>

                        </img></Link>

                    </div>
                )
            })}
        </div>
    )

}


