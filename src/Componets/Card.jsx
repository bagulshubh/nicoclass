import React from 'react'

const Card = (props) => {

    const index = props.index;
    const setind = props.setind;

    const clickHandler = ()=>{
        setind(index);
    }


  return (
    <div onClick={clickHandler}>
      {index+1}
    </div>
  )
}

export default Card;
