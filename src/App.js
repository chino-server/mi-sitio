import React from 'react';
import './App.css';
import ResponsiveAppBar from './Components/Nav/navBar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ImgMediaCard from './Components/cardComponent/cardComponent';
import ItemList from './Components/itemList/itemList';

const App = () => {

    return (
      <div> 
       <ResponsiveAppBar> </ResponsiveAppBar>
        <ItemListContainer
        greeting="greeting"/>
        <ImgMediaCard 
        name= 'Pan'
        img= 'https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg' />
        <ItemList/>
      </div>

    )
  }

export default App;
