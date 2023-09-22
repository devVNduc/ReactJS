/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
export default function Time() {
    var [time, setTime] = useState(new Date());
    var [timeId, setTimeId] = useState();
    var [count, setCount] = useState(0);
    var valueColor = useRef("")
    var pasteColor = useRef("")
    useEffect(() => {
        timeId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        setTimeId(timeId);
        return () => {
            clearInterval(timeId);
        };
    }, [count]);
    
    function stopTime() {
            clearInterval(timeId);
            return; 
    }
    function startTime() {
        setCount(++count)
    }
    return (
      <>
            <h1 ref={pasteColor} style={{color: "rgb(0,0,255)"}}>Current time: {time.toLocaleString()}</h1>
        <button onClick={startTime}>Start time</button>
        <button onClick={stopTime}>End time</button>
        <h1>
          Change Color
          <div>
                    <input ref={valueColor} type="color" onChange={() => {
                        pasteColor.current.style.color = valueColor.current.value
                    }} />
          </div>
        </h1>
        {/* <button onClick={() => { props.start()}}>Start</button>
        <button onClick={props.stop}>End</button> */}
      </>
    );
}
