
import {  useState } from 'react';
import './App.css';

function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setbmi] = useState()

  const handleHeight = (event) => {
      setHeight(event.target.value)
  }

  const handleWeight = (event) => {
    setWeight(event.target.value)
  }

  
  const Calculate = () => {

    if(height === "" || weight === ""){
      alert("Enter details first")
    }else if(height < 0 || weight < 0){
      alert("Enter valid details")
    }
    else{
      const Height = height / 100


      setbmi((weight / (Height * Height)).toFixed(1))
      setHeight("")
      setWeight("")
    }
    

  }

  const handleReset = () => {
    setHeight("")
    setWeight("")
    setbmi("")
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500' >
      <div className=' bg-stone-50 border shadow-2xl rounded-2xl w-1/2 h-2/3  space-x-3 space-y-4'>
        <h1 className='font-serif text-3xl m-3 text-center font-semibold bg-gradient-to-r from-blue-500 border rounded-2xl p-2'>BMI Calculator</h1>
        <p className='text-2xl text-center font-serif font-semibold'>Height</p>
        <div className='flex justify-center'>
          <input className=' p-2 border border-black rounded-full w-4/5 text-center text-xl' type='number' placeholder='height in cm' 
            onChange={handleHeight} value={height}
          >
            {console.log(height)}
          </input >
        </div>

        <p className='text-2xl text-center font-serif font-semibold'>Weight</p>
        <div className='flex justify-center'>
          <input type='number' placeholder='weight in kg' className='p-2 border border-black rounded-full w-4/5 text-center text-xl'
            onChange={handleWeight} value={weight} >

          </input>
        </div>

        <br />
        <div className='flex justify-center space-x-5'>
          <button className='font-serif transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-xl rounded-full px-6 py-2 text-white text-lg  ' onClick={Calculate}>Calculate</button>
          <button className=' font-serif transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-xl rounded-full px-6 py-2 text-white text-lg  ' onClick={handleReset}>Reset</button>

        </div>

        {  bmi && <div className='flex justify-center text-2xl font-bold font-sans bg-gradient-to-r from-blue-500 border rounded-2xl p-2   '>
          Your BMI is  {  bmi}
        </div> 
        }
        
        

      </div>
    </div>
  );
}

export default App;
