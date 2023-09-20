import { useState } from "react";
import DataContext from "./DataContext";

const DataState = (props) => {
    
    const [Username,setUsername] = useState("");
    const [QuestionArr,setQuestionArr] = useState([]); 
    const [totalTime , setTotalTime] = useState(0);
    const [Questions , setQuestions] = useState([]);


    const getQuestions = async()=>{

      const url = 'https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=';

      QuestionArr.map( async(type)=>{
        const response = await fetch(url+type);
        const output = await response.json();
        
        setQuestions((prevArr)=>{
          return [...prevArr,output[0].Question]
        })
      } )


    }

    return (
      <DataContext.Provider value={{Username,setUsername,QuestionArr,setQuestionArr,setTotalTime,totalTime,getQuestions,Questions}}>
        {props.children}
      </DataContext.Provider>
    );

}
export default DataState;
