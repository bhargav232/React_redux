import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
import { updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div className='text-blue-500'>Todos List</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>

         <div className='gap-6 flex justify-between'>
            <button className='text-white-500, bg-green-500  border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md '
                  onClick={() => {
                    const newText = prompt("Enter the new text for the todo:"); 
                    if (newText !== null) {
                      dispatch(updateTodo({ id: todo.id, newText }));
                    }
                  }}
                >
               
                <FontAwesomeIcon icon={faEdit} />
        
              </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <FontAwesomeIcon icon={faTrash} />   
            </button>

         </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos