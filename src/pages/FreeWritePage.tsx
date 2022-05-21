import { Textarea } from "@mantine/core";
import { useEffect, useRef } from "react";

export const FreeWritePage = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current!.focus();
  }, []);

  return (
    <div>
      <Textarea
        autosize
        radius="sm"
        placeholder="words words words..."
        variant="unstyled"
        ref={ref}
      />
    </div>
  );
};
