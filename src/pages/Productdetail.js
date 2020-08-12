import React from 'react'
import { useQuery, gql } from '@apollo/client'


export default function Productdetail() {

    const { data, loading, error } = useQuery(gql`
    query {
        product(id: 9) {
            id
            name
            imageUrl
        }
            }
        `);


    if (loading) return <h2>Hello</h2>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    console.log('product', data)
    // return (
    // //     <div>

    // //         {data.product.map(item => {
    // //             return (
    // //                 <div key={item.id}>
    // //                     {item.id}
    // //                     {item.name}
    // //                     <img className="product-detail" src={item.imageUrl} alt="POLshop.com products"></img>

    // //                 </div>
    // //             )
    // //         })}
    // //     </div>
    // // )

}


