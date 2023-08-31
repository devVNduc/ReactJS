import { useSelector} from "react-redux";
export default function Child() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
          <div>Child {count} </div>
    </>
  );
}
