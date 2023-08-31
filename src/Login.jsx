/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  Memo,
  memo,
} from "react";
import "./Login.css";
import Time from "./time.jsx";
var idTime = 0;
var Child = memo(
  (props) => {
    console.log("Render");
    return (
      <>
        <h1>hello</h1>
      </>
    );
  },
  function (prevProps, nextProps) {
    return  nextProps.data.length%10;
  }
);
export default function clock() {
  // var [time,setTime] = useState(new Date())
  // var [count,setCount] = useState(0)
  var [x, setX] = useState(0);
  var [data, setData] = useState([]);
  function makeD() {
    setData([...data,1])
  }
 
  // var tinhtong = useCallback(
  //   (n) => {
  //     let sum = 0;
  //     for (let i = 0; i < n; i++) {
  //       sum += i
  //     }
  //     console.log("abc")
  //     return sum
  //   }, [])
  // var ketqua = useMemo(() => {
  //   return tinhtong(1000)
  // },[tinhtong])
  // useEffect(() => {
  //   idTime = setInterval(() => {
  //     setTime(new Date())
  //   }, 1000)
  //   return () => {
  //     clearInterval(idTime)
  //   }
  // }, [count])
  // function stop(){
  //   return clearInterval(idTime);
  // }
  // function start() {
  //   setCount(++count)
  // }
  // var item = useRef(null)
  // var takeColor = useRef(null)

  return (
    <>
      <h1>{x}</h1>
      <Child data={data}></Child>
      <button
        onClick={makeD}
      >
        Increase X
      </button>
      {/* <p>{ketqua}</p>      
      <h1>Xin chao</h1>
      <span ref={item}>{time.toLocaleTimeString()}</span>
      <input ref={takeColor} type="color" style={{ backgroundColor: "rgb(0,255,0)" }} onChange={(e) => {
        item.current.style.color = takeColor.current.value
      }} />
      <Time
        stop={stop}
        start={start}
        item={item}
        valueColor={takeColor}
      ></Time> */}
    </>
  );
}
