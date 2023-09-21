import React, { useContext, useEffect, useState } from "react";
import DataContext from "../Context/DataContext";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Card from "../Componets/Card";
import CountdownTimer from "../Componets/CountdownTimer";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const context = useContext(DataContext);
    const Questions = context.Questions;
    const prevtimem = context.prevtimem;
    const prevtimes = context.prevtimes;
    const minutes = context.minutes;
    const seconds = context.seconds;

    const [ind, setind] = useState(0);
    const navigate = useNavigate();

    useState(()=>{
        context.setPrevtimem(context.totalTime-1);
    })

    

    const nextHandler = () => {
        console.log("next");
        calculateTime(ind);
        const index = ind + 1;
        setind(index);
    };

    const prevHandler = () => {
        console.log("prev");
        calculateTime(ind);
        const index = ind - 1;
        setind(index);
    };

    const calculateTime = (ind)=>{
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
    }

    const submitHandler = ()=>{
        calculateTime(ind);
        navigate('/submit');
    }

    return (
        <div className="test-wrapper">
            <MathJaxContext>

                {/* This will dynamically change the control panel for questions  */}
                <div className="control-panel">
                    <div className="number-panel">
                    {
                        Questions.map((q , index)=>{
                            return(
                                <Card setind={setind} index={index} ind={ind}></Card>
                            )
                        })
                    }
                    </div>
                    <CountdownTimer initialMinutes={context.totalTime}></CountdownTimer>
                </div> 

                <div className="qustion-wrapper">
                    
                    {
                        Questions.length>0 ? (<MathJax dynamic inline><MathJax>{`\\[${Questions[ind]}\\]`}</MathJax></MathJax>):(<div></div>)
                    }
                    
                </div>

                <div className="btn-wrapper">
                    {ind === 0 ? (
                        <div></div>
                    ) : (
                        <div onClick={prevHandler} className="btn">
                            Prev
                        </div>
                    )}
                    {ind + 1 === Questions.length ? (
                        <div></div>
                    ) : (
                        <div onClick={nextHandler} className="btn">
                            Next
                        </div>
                    )}
                </div>

                <div className="btn" onClick={submitHandler}>Submit</div>
            </MathJaxContext>
        </div>
    );
};

export default Test;
