import { useState } from "react";
export default function Btvn() {
  var [arr, setArr] = useState([
    {
      id: Math.random(),
      name: "a",
    },
    {
      id: Math.random(),
      name: "b",
    },
    {
      id: Math.random(),
      name: "c",
    },
  ]);
  return (
    <>
      <h1>hello</h1>
      <button onClick={() => {
        arr.sort((a, b) => {
          return b.id - a.id 
        })
        setArr([
          ...arr,
          {
            id: Math.random(),
            name: "d",
          },
        ]);
      }}>Click</button>
      { 
        arr.map((item) =>
        {
          return (
            <div key={item.id}>
              <input type="text" />
              {item.id}
              <span> </span>
              {item.name}
            </div> 
          )
        })      
      }
    </>
  )
}