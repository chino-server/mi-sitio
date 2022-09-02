import React, {useState, useEffect} from 'react'
import Item from '../item/item'

 const ItemList = () => {
  
  const [user, setUser]= useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users')
	.then(response => response.json())
	.then(response => setUser (response))
  }, [])

    return (
    <div> {user.map ((user)=>{
        return <Item key={user.id} data={user}/>
    })}
    </div>
  )
}


export default ItemList
