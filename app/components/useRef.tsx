"use client"

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { MousePointerClickIcon } from "lucide-react";

const useRefComponent = () => {
  const ref = useRef<number>(0);

  const clickHandler = () => {
    ref.current = ref.current + 1;
    alert(ref.current + "回目のクリック");
  }

  return (
    <div className="flex flex-col rounded-xl forced-colors:outline relative p-6 lg:p-8 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.05),0px_2px_2px_0px_rgba(9,9,11,0.08)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold underline underline-offset-2">useRef</h2>
      </div>
      <div className="mb-5 text-sm/relaxed text-muted-foreground">
        <p>レンダリングを跨いで値を保持できるhook</p>
      </div>
      <div className="flex items-center justify-center mb-5">
        <Button variant="outline" size="icon" onClick={clickHandler}>
          <MousePointerClickIcon />
        </Button>
      </div>
      <div className="text-xs/relaxed text-muted-foreground space-y-1">
        <p>※useStateとは違い, 値が変化しても画面レンダリングは発生しない</p>
        <p>※refを含むコンポーネント内においてレンダリングが発生すれば, refの値はリセットされる</p>
      </div>
    </div>
  );
}

export default useRefComponent