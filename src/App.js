import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import NavBar from "./components/Navigation"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage"
import Productdetail from "./pages/Productdetail"

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
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/productpage/:id?" component={Productdetail} />
            <Route path="/home/productpage" component={Homepage} />
          </Switch>

          <Homepage />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
