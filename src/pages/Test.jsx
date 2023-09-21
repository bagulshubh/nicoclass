import React, { useContext, useEffect, useState } from "react";
import DataContext from "../Context/DataContext";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Card from "../Componets/Card";

const Test = () => {
    const context = useContext(DataContext);
    const Questions = context.Questions;
    const [parts, setParts] = useState([]);
    const [marked, setMarked] = useState([]);
    console.log(Questions);
    const [ind, setind] = useState(0);

    useEffect(() => {
        if (Questions.length > ind) {
            const str = Questions[ind];
            const arr = [];
            const mark = [];
            let temp = "";
            let flag = false;

            for (let i = 0; i < str.length; i++) {
                if (str[i] === "$") {
                    arr.push(temp);

                    if (flag) {
                        mark.push(temp);
                        flag = false;
                    } else {
                        flag = true;
                    }
                    temp = "";
                } else {
                    temp += str[i];
                }
            }

            if (temp !== "") {
                arr.push(temp);
            }

            setMarked(mark);
            setParts(arr);
        }
    }, [Questions, ind]);

    const nextHandler = () => {
        console.log("next");
        const index = ind + 1;
        setind(index);
    };

    const prevHandler = () => {
        console.log("prev");
        const index = ind - 1;
        setind(index);
    };

    return (
        <div>
            <MathJaxContext>

                {/* This will dynamically change the control panel for questions  */}
                <div>
                    {
                        Questions.map((q , index)=>{
                            return(
                                <Card setind={setind} index={index}></Card>
                            )
                        })
                    }
                </div>

                <div>
                    {/* {!parts ? (
                        <div></div>
                    ) : (
                        parts.map((part) => {
                            return (
                                <div>
                                    {marked.includes(part) ? (
                                        <MathJax dynamic>\[{part}\]</MathJax>
                                    ) : (
                                        <span>{part}</span>
                                    )}
                                </div>
                            );
                        })
                        
                    )} */}
                    {
                        parts.length>0 ? (<MathJax dynamic inline><MathJax>{`\\[${parts}\\]`}</MathJax></MathJax>):(<div></div>)
                    }
                    
                </div>

                <div>
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

                <div className="btn">Submit</div>
            </MathJaxContext>
        </div>
    );
};

export default Test;
