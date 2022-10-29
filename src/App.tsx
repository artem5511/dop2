import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';

type PropsType=
    {
      userId: number,
      id: number,
      title: string,
      completed: boolean
    }

function App() {
  const [show, setShow] = useState<Array<PropsType>>([])

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then(response => response.json())
  //       .then(json => setTodos(json))
  // },[])

  const useShowUP = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => setShow(json))
      }

      const clean =()=> {
    setShow([])
      }

  return (
      <div className="App">
        <Button name={'Show me'} callBack={useShowUP}/>
        <Button name={'Clean me'} callBack={clean}/>
        <ul>
          {show.map(el => {
            return (
                <li>
                  <span>{el.id} - </span>
                  <span>{el.title}</span>
                  <span>{el.completed}</span>
                </li>
            )
          })}
        </ul>
      </div>
  );
}


export default App;
