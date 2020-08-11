import React from 'react'
import { useQuery, gql } from '@apollo/client'


export default function Homepage() {
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


    return (
        <div>

            {data.allProducts.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <img class="products-homepage" src={item.imageUrl} alt="POLshop.com products"></img>

                    </div>
                )
            })}
        </div>
    )

}


