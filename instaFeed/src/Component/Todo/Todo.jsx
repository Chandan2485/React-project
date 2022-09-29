import React, { useState } from "react";

export function Todo() {
  const [count, setcount]=useState(1)
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState({});
  // const [color, setColor]=useState(['red','green'])

  const add = () => {
    settodos([...todos, todo]);
    settodo({mass:""});
    setcount(count+1)
  };


  return (
    <div>


      <div>
     
        <input
          type="text"
          value={todo.mass}
          onChange={(e) => settodo(
            {mass:e.target.value,
            id:count}
            )}
        />
        <button onClick={add}>Add</button>
      </div>


      <div>
      {/* <p style={{color:color[0]}}>kjdakjsfgadjaskggggggg</p> */}
        {todos.map((x) => {
          return (
            <div>
              
              <span>{x.mass}</span>

              <button>edit</button>

              <button
                onClick={() => {
                  let item = todos.filter((value) => value.id !== x.id);
                  settodos([...item]);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
