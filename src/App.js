import './App.css';
import {useState} from 'react'
import Todo from './Todo';

function App() {


  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [todoList, setTodoList] = useState([]);


  /*function addTodo(){


  }*/

  const addTodo = () => {

      setTodoList([...todoList, {todo:todo, time:time}]);
      /*
      [
        t = {
          todo: "React tanfolyam",
          time: "8 óra"
        },
        t = {
          todo: "Ebéd",
          time: "1 óra"
        }
      ]
      */
      setTodo("");
      setTime("");

  }


  return (
    <div className="App">
      <div className="container">
          <h1>React Todo-List</h1>

          <label>Feladat:</label>
          <input type="text" id="todo" value={todo} onChange={(e)=>{

            setTodo(e.target.value);

          }} />

          <label>Teljesítéshez szükséges idő:</label>
          <input type="text" id="time" value={time} onChange={(e)=>{

            setTime(e.target.value);
          }} />

          <button id="add" onClick={addTodo}>Hozzáad</button>

          {

              todoList.map((t)=>{

                return <Todo todo={t.todo} time={t.time} />
              })

          }
      </div>  
    </div>
  );
}

export default App;
