import React from 'react'
import ListCard from './ListCard'
const List = (props)=>{
 return( 
   <div>
    {
      props.items.map((item,index)=><ListCard key={index} item={item}/>)
    }
  </div>
 )
}

export default List