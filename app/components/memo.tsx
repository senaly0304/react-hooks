"use client"

import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"
import { Dispatch, ReactNode, SetStateAction, memo, useState } from "react"

const ParentComponent = ({ children, count1, setCount1 }: { children: ReactNode; count1: number; setCount1: Dispatch<SetStateAction<number>> }) => {
  console.log("親レンダリング");

  return (
    <div className="p-2 border rounded-md w-full">
      <h2 className="text-sm/relaxed mb-2 text-muted-foreground">
        親コンポーネント
      </h2>
      <div className="mb-2 flex items-center gap-5">
        <Button variant="outline" size="icon" onClick={() => setCount1((value) => value + 1)}>
          <PlusCircleIcon />
        </Button>
        <p className="text-sm/relaxed text-muted-foreground">親のカウント : {count1}</p>
      </div>
      {children}
    </div>
  )
}

const ChildComponent = memo(({ count2, setCount2 }: { count2: number; setCount2: Dispatch<SetStateAction<number>> }) => {
  console.log("子レンダリング");

  return (
    <div className="p-2 border rounded-md w-full">
      <h2 className="text-sm/relaxed mb-2 text-muted-foreground">
        子コンポーネント
      </h2>
      <div className="mb-2 flex items-center gap-5">
        <Button variant="outline" size="icon" onClick={() => setCount2((value) => value + 1)}>
          <PlusCircleIcon />
        </Button>
        <p className="text-sm/relaxed text-muted-foreground">子のカウント : {count2}</p>
      </div>
    </div>
  )
})

const useMemoComponent = () => {
  const [ count1, setCount1 ] = useState<number>(0);
  const [ count2, setCount2 ] = useState<number>(0);
  
  return (
  <div className="flex flex-col rounded-xl forced-colors:outline relative p-6 lg:p-8 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.05),0px_2px_2px_0px_rgba(9,9,11,0.08)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset]">
    <div className="flex justify-between items-center mb-2">
      <h2 className="font-bold underline underline-offset-2">memo</h2>
    </div>
    <div className="mb-5 text-sm/relaxed text-muted-foreground">
      <p>値が更新されていないコンポーネントに対するレンダリングをスキップするhook</p>
    </div>
    <div className="mb-5">
      <ParentComponent count1={count1} setCount1={setCount1}>
        <ChildComponent count2={count2} setCount2={setCount2} />
      </ParentComponent>
    </div>
    <div className="text-xs/relaxed text-muted-foreground space-y-1">
      <p>※通常, 親のカウントが増えると, 子のカウントが増えていないのにも関わらず, 親・子コンポーネントともに再レンダリングが発生する. 子コンポーネントをmemo化することで, 親のカウントが変化した際に, 親コンポーネントにのみ再レンダリングを発生させ, 子コンポーネントの無駄な再レンダリングを防ぐ</p>
    </div>
  </div>
  )
}

export default useMemoComponent