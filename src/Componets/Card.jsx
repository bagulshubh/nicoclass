import React from 'react'

const Card = (props) => {

    const index = props.index;
    const setind = props.setind;
    const ind = props.ind;

    const clickHandler = ()=>{
        setind(index);
    }


  return (
    <div onClick={clickHandler} className={ind===index ? ("card active"):("card")}>
      {index+1}
    </div>
  )
}

export default Card;
