
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {localtime} from "./time/Timer"

function App() {
  
  return (
      <>
      <h2 className='text-black-600 font-bold text-xl' >
        Learn about redux toolkit</h2>
       <h1 className='text-black-800 text-xl font-bold' >{localtime}</h1> 
      <AddTodo />
      <Todos />
      </>
  )
}

export default App
