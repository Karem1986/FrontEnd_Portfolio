import { useEffect, useContext } from "react"
import { gql, useMutation } from "@apollo/client"
import UserContext from "../Context/UserContext"

//glg mutation to validate users logged in access to shopping card

const LOGGED_IN = gql`
    mutation isLoggedIn($token: String) {
        isLoggedIn(token: $token)
    }
`

export default function TokenValidation() {
    const { isLoggedIn, setUpLoggingatTopLevel } = useContext(UserContext)
    const [tokenValidation, { data, loading, error }] = useMutation(LOGGED_IN, {
        //Indicating user is logged in saving the token to local
        //storage to persist the session:
        onCompleted({ isLoggedIn: isTokenValid }) {
            console.log("is token valid", isTokenValid)
            setUpLoggingatTopLevel(isTokenValid) //this will help to update the state in line 47
        },
    })

    useEffect(() => {
        //to run it only once when the page refreshes: user will not have to log in again after refreshing the page
        tokenValidation({ variables: { token: localStorage.getItem("token") } })
    }, [])

    return null
}
