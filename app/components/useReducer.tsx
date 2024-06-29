"use client"

import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useReducer } from "react";

const UseReducerComponent = () => {

  const reducer = (state: { count: number }, action: { type: string; }) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    };
    throw Error("Unknown action");
  }

  const [ state, dispatch ] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col rounded-xl forced-colors:outline relative p-6 lg:p-8 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.05),0px_2px_2px_0px_rgba(9,9,11,0.08)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold underline underline-offset-2">useReducer</h2>
      </div>
      <div className="mb-5 text-sm/relaxed text-muted-foreground">
        <p>新たなstateを返す関数を事前に定義し, stateを更新するためのhook</p>
      </div>  
      <div className="flex items-center gap-5">
        <Button variant="outline" size="icon" onClick={() => dispatch({ type: "increment" })}>
          <PlusCircleIcon />
        </Button>
        <div className="text-sm/relaxed text-muted-foreground">
          <p>Count : {state.count}</p>
        </div>
      </div>
    </div>
  )
}

export default UseReducerComponent