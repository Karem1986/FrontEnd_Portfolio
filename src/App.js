import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import logo from "./logo.jpg"
import NavBar from "./components/Navigation"
import './App.css';
import Homepage from "./pages/Homepage"

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),

})
//testing our Apollo setup:
// client
//   .query({
//     query: gql`
//       query {
//        allCategories {
//          type
//        }
//       }
//     `
//   })
//   .then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar />

        <h1><img src={logo} alt="Polshop" style={{ width: 300, display: 'inline' }}
        ></img>POLshop.com: where your dreams come true!</h1>
        <Homepage />
      </div>
    </ApolloProvider>
  );
}

export default App;
