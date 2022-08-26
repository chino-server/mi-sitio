import React from 'react';
import './App.css';
import ResponsiveAppBar from './Components/Nav/navBar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';


class App extends React.Component {
  render(){
    return (
      <div> 
       <ResponsiveAppBar> </ResponsiveAppBar>
        <ItemListContainer
        greeting="greeting"/>
      </div>
    )
  }
}

export default App;
