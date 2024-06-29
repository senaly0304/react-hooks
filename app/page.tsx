import UseStateComponent from "./components/useState";
import UseEffectComponent from "./components/useEffect";
import UseRefComponent from "./components/useRef";
import UseContextComponent from "./components/useContext";
import UseReducerComponent from "./components/useReducer";
import MemoComponent from "./components/memo";

export default function Home() {
  return (
    <main className="pt-8 pb-40 lg:pt-10 container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <UseStateComponent />
        <UseEffectComponent />
        <UseRefComponent />
        <UseContextComponent />
        <UseReducerComponent />
        <MemoComponent />
      </div>
    </main>
  );
}
