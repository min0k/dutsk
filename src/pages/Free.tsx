import RichTextEditor from "@mantine/rte";
import React, { useState } from "react";

export const Free = () => {
  const [value, onChange] = useState("What's on your mind?");
  return (
    <div>
      <RichTextEditor
        value={value}
        onChange={onChange}
        controls={[["alignLeft", "alignCenter", "alignRight"]]}
      />
    </div>
  );
};
