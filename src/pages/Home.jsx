import React, { useContext } from 'react'
import Type from '../Componets/Type';
import DataContext from '../Context/DataContext';
import { Navigate , useNavigate } from 'react-router-dom';


const Home = () => {

  const questionTypes = ['AreaUnderTheCurve_21' , 'BinomialTheorem_13' , 'BinomialTheorem_24','AreaUnderTheCurve_15','AreaUnderTheCurve_2','BinomialTheorem_3','BinomialTheorem_4','AreaUnderTheCurve_5'];

  const context = useContext(DataContext);
  const setUsername = context.setUsername;
  const QuestionArr = context.QuestionArr;
  const setTotalTime = context.setTotalTime;
  const navigate  = useNavigate();
  const changeHandler = (event)=>{
    setUsername(event.target.value);
  }

  const StartHandler = ()=>{
    setTotalTime(5*QuestionArr.length);
    context.getQuestions();
    navigate('/test');
  }

  return (
    <div className='Home'>

      <input type='text' placeholder='Enter Username' onChange={changeHandler} className='input-username'></input>

      <div className='select-wrapper'>

        {
          questionTypes.map((type)=>{
            return (
              <Type data = {type}></Type>
            )
          })
        }


      </div>

      <div className='home-time'>Time: {5*QuestionArr.length} Min</div>

      <div className='btn' onClick={StartHandler}>Start</div>


    </div>
  )
}

export default Home
