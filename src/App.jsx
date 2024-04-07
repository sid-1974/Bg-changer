import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')
  
 
  return (
    <div className='w-full h-screen duration-200 flex flex-col justify-center items-center' style={{backgroundColor:color}}>
      <h1 className='text-5xl '>Change Color.</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-3 rounded-3xl' style={{border:'2px solid black'}}>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          onClick={() => setColor('red')} style={{backgroundColor:'red',border:'2px solid black'}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          onClick={() => setColor('green')} style={{backgroundColor:'green',border:'2px solid black'}}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          onClick={() => setColor('yellow')} style={{backgroundColor:'yellow',border:'2px solid black'}}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          onClick={() => setColor('blue')} style={{backgroundColor:'blue',border:'2px solid black'}}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          onClick={() => setColor('pink')} style={{backgroundColor:'pink',border:'2px solid black'}}>pink</button>
          
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
          onClick={() => setColor('orange')} style={{backgroundColor:'orange',border:'2px solid black'}}>Orange</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
