import React, { useContext } from 'react'
import DataContext from '../Context/DataContext';


const Type = (props) => {
    const data = props.data;
    const context = useContext(DataContext);

    const setQuestionArr = context.setQuestionArr;
    const QuestionArr = context.QuestionArr;

    const clickHandler = (event)=>{
        if(event.target.checked){
            const arr = QuestionArr;
            arr.push(data);
            setQuestionArr(arr);
        }
        else{
            const arr = [];
            QuestionArr.map( a=> {
                if(a!==event.target.name){
                    arr.push(a)       
                }
                
            })
            setQuestionArr(arr);
        }
    }
    
  return (
    <div>
        <input type='checkbox' id={data} onChange={clickHandler} name={data}></input>
        <label htmlFor={data}>{data}</label>
    </div>
  )
}

export default Type
