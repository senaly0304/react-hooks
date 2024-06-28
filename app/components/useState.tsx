"use client"

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react"; 
import { CirclePlusIcon, CircleMinusIcon } from "lucide-react";

const useStateComponent = () => {
  const [ count, setCount ] = useState<number>(50);

  return (
    <div className="flex flex-col rounded-xl forced-colors:outline relative p-6 lg:p-8 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.05),0px_2px_2px_0px_rgba(9,9,11,0.08)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold underline underline-offset-2">useState</h2>
      </div>
      <div className="mb-5 text-sm/relaxed text-muted-foreground">
        <p>状態を管理するためのhook</p>
      </div>
      <div className="mb-5">
        <Progress value={count} />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button disabled={count === 0} variant="outline" size="icon" onClick={() => setCount((value) => value - 10)}>
          <CircleMinusIcon />
        </Button>
        <span className="font-bold">{count}</span>
        <Button disabled={count === 100} variant="outline" size="icon" onClick={() => setCount((value) => value + 10)}>
          <CirclePlusIcon />
        </Button>
      </div>
    </div>
  )
}

export default useStateComponent