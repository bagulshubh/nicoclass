import React, { useContext } from 'react';
import DataContext from '../Context/DataContext';

const Test = () => {

    const context = useContext(DataContext);
    const Questions = context.Questions;
    
    return (
    <div>
      This is test page
    </div>
  )
}

export default Test
