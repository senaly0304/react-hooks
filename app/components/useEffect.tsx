"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { ShuffleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const useEffectComponent = () => {
  const [ image, setImage ] = useState<string>();
  const [ id, setId ] = useState<number>(0);

  useEffect(() => {
    setImage(`https://api.dicebear.com/9.x/notionists/svg/seed=${id}`);
  }, [id]);

  return (
    <div className="flex flex-col rounded-xl forced-colors:outline relative p-6 lg:p-8 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.05),0px_2px_2px_0px_rgba(9,9,11,0.08)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.06)_inset]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold underline underline-offset-2">useEffect</h2>
      </div>
      <div className="mb-5 text-sm/relaxed text-muted-foreground">
        <p>副作用を扱うためのhook</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button variant="outline" size="icon" onClick={() => setId((value) => value + 1)}>
          <ShuffleIcon />
        </Button>
        <Avatar>
          <AvatarImage src={image} />
        </Avatar>
      </div>
    </div>
  );
}

export default useEffectComponent