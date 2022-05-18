import { Blockquote } from "@mantine/core";

export const AboutPage = () => {
  return (
    <div>
      <Blockquote
        pb="xl"
        color="blue"
        cite="– Haruki Murakami, Norwegian Wood"
        sx={{ fontSize: "small" }}
      >
        What happens when people open their hearts? They get better.
      </Blockquote>
    </div>
  );
};
