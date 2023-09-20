import { useState } from "react";
import DataContext from "./DataContext";

const DataState = (props) => {
    
    const [Username,setUsername] = useState("");
    const [QuestionArr,setQuestionArr] = useState([]); 




    return (
      <DataContext.Provider value={{Username,setUsername,QuestionArr,setQuestionArr}}>
        {props.children}
      </DataContext.Provider>
    );

}
export default DataState;
