import React, { useContext } from 'react'
import Type from '../Componets/Type';
import DataContext from '../Context/DataContext';


const Home = () => {

  const questionTypes = ['AreaUnderTheCurve_21' , 'BinomialTheorem_13' , 'BinomialTheorem_24','AreaUnderTheCurve_15','AreaUnderTheCurve_2','BinomialTheorem_3','BinomialTheorem_4','AreaUnderTheCurve_5'];

  const context = useContext(DataContext);
  const setUsername = context.setUsername;

  const changeHandler = (event)=>{
    setUsername(event.target.value);
  }

  return (
    <div>

      <input type='text' placeholder='Enter Username' onChange={changeHandler}></input>

      <div>

        {
          questionTypes.map((type)=>{
            return (
              <Type data = {type}></Type>
            )
          })
        }


      </div>


    </div>
  )
}

export default Home
