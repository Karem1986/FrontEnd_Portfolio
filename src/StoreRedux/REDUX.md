   -1.Create reducer for the state we are going to use (if it doesn't exist yet) []
     -2. Import it into combined the root reducer file []
     TEST: redux dev tool and make sure the property is in the state tab, ex 'homeDetail' []
     -3. create action to feed the data into the store --feed/actions.js []
     TEST: dispacth the action in the component and check redux dev tools and 
     make sure the data is in the righ object property in the state tab.

     -4. create Selector []
     -5. Import selector in the component: add the const and then log it 
     -6. Use the selector to display in return() the data
      -- look at the data logged to the console and use that as key for the map()