import React, { useContext } from 'react'
import DataContext from '../Context/DataContext';

const Card = (props) => {
  
    const context = useContext(DataContext)
    const index = props.index;
    const setind = props.setind;
    const ind = props.ind;
    const prevtimem = context.prevtimem;
    const prevtimes = context.prevtimes;
    const minutes = context.minutes;
    const seconds = context.seconds;

    
    const clickHandler = ()=>{
        let arr = context.timeperq;
        let timem;
        let times;
        if(arr[ind]){
            timem = arr[ind][0] + (Math.abs( prevtimem - minutes));
            times = arr[ind][1] + (Math.abs(prevtimes - seconds)) ;
        }
        else{
            timem = (Math.abs( prevtimem - minutes));
            times =  (Math.abs(prevtimes - seconds)) ;
        }
        if(times>=60){
            times = 0;
            timem = timem + 1;
        }
        
        arr[ind] = [timem,times];
        context.setTimeperq(arr);
        context.setPrevtimem(context.minutes);
        context.setPrevtimes(context.seconds);
        console.log(arr[ind]);
        setind(index);

    }


  return (
    <div onClick={clickHandler} className={ind===index ? ("card active"):("card")}>
      {index+1}
    </div>
  )
}

export default Card;
