import React, { useContext } from 'react'
import DataContext from '../Context/DataContext';


const Type = (props) => {
    const data = props.data;
    const context = useContext(DataContext);

    const setQuestionArr = context.setQuestionArr;
    const QuestionArr = context.QuestionArr;

    const clickHandler = (event) => {
        setQuestionArr( (prevArr) => {
            if (event.target.checked) {
                return [...prevArr, data];
            } 
            else{
                return prevArr.filter((a) => a !== event.target.name);
          }
        });
    };
      
    
  return (
    <div className='type'>
        <input type='checkbox' id={data} onChange={clickHandler} name={data}></input>
        <label htmlFor={data}>{data}</label>
    </div>
  )
}

export default Type
