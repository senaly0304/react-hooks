"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

type ContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const ExampleContext = createContext<ContextType>({} as ContextType);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [ count, setCount ] = useState<number>(1);

  const ParentComponent = () => {
    return (
      <div className="p-2 border rounded-md w-full">
        <h2 className="text-sm/relaxed mb-2 text-muted-foreground">
          親コンポーネント
        </h2>
        <div className="flex gap-2 mb-2 h-10">
          {[...Array(count)].map((_, i) => (
            <Avatar key={i}>
              <AvatarImage src={`https://api.dicebear.com/9.x/notionists/svg/seed=${i}`} />
            </Avatar>
          ))}
        </div>
        {children}
      </div>
    )
  }

  return (
    <ExampleContext.Provider value={{ count, setCount }}>
      <ParentComponent />
    </ExampleContext.Provider>
  )
}

const useExampleContext = () => useContext(ExampleContext);

const ChildComponent = ({ children }: { children: ReactNode }) => {
  const { count, setCount } = useExampleContext();

  return (
    <div className="p-2 border rounded-md w-full">
      <h2 className="text-sm/relaxed mb-2 text-muted-foreground">
        子コンポーネント
      </h2>
      <div className="flex items-center mb-2 gap-2">
        <Button disabled={count === 0} variant="outline" size="icon" onClick={() => {setCount((value) => value - 1)}}>
          <MinusCircleIcon />
        </Button>
        <Button disabled={count === 5} variant="outline" size="icon" onClick={() => {setCount((value) => value + 1)}}>
          <PlusCircleIcon />
        </Button>
      </div>
      {children}
    </div>
  )
}

const GrandChildComponnet = () => {
  const { count } = useExampleContext();

  return (
    <div className="p-2 border rounded-md w-full">
      <h2 className="text-sm/relaxed mb-2 text-muted-foreground">
        孫コンポーネント
      </h2>
      <div className="flex gap-2 h-10">
        {[...Array(count)].map((_, i) => (
          <Avatar key={i}>
            <AvatarImage src={`https://api.dicebear.com/9.x/notionists/svg/seed=${i}`} />
          </Avatar>
        ))}
      </div>
    </div>
  )
}

const useContextComponent = () => {
  
  return (
    <div className="flex flex-col rounded-xl forced-colors:outline relative p-6 lg:p-8 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.05),0px_2px_2px_0px_rgba(9,9,11,0.08)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold underline underline-offset-2">useContext</h2>
      </div>
      <div className="mb-5 text-sm/relaxed text-muted-foreground">
        <p>グローバルに値を受け渡すためのhook</p>
      </div>
      <ContextProvider>
        <ChildComponent>
          <GrandChildComponnet />
        </ChildComponent>
      </ContextProvider>
    </div>
  )
}

export default useContextComponent