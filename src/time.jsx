
export default function click(props) {
    return (
        <>    
        <button onClick={() => { props.start()}}>Start</button>
        <button onClick={props.stop}>End</button>
        </>
    );
}