
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {localtime} from "./time/Timer"

function App() {
  
  return (
    <>
      <h2 className='text-blue-500 font-bold text-xl' >
        Learn about redux toolkit</h2>
       <h1 className='text-blue-600'>{localtime}</h1> 
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
