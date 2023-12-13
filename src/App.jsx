
import { useState } from 'react';
import './App.css';
import ToDoInput from './components/todoInput';
import Todolist from './components/todolist';


function App() {
  const [listTodo, setListTodo] = useState([

  ])

  let addList = (inputText) => {
    if (inputText !== "") { setListTodo([...listTodo, inputText]) }

  }
  let deleteListItem = (deleteItem) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(deleteItem, 1)
    setListTodo([...newListTodo])
    console.log("jdfnk", deleteItem);
  }

  return (
    <>
      <div className='main-container'>
        <div className="center-container">
          <ToDoInput addList={addList} />
          <h1 className="app-heading">My ToDO</h1>
          <hr />

          <li className="list-item">Add Your Task Here? </li>

          {listTodo.map((listItem, indexValue) => {
            return (
              <Todolist key={indexValue} index={indexValue} item={listItem} deleteItem={deleteListItem} />
            )
          })}


        </div>
      </div>
    </>

  );
}

export default App;
