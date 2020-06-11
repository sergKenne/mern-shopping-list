import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {Provider} from 'react-redux';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/ItemModel';
import {Container} from 'reactstrap';
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
            <ItemModel/>
            <ShoppingList/>
        </Container>
        
      </div>
    </Provider>  
  );
}

export default App;
