import { Button, Container, Text, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface QuestionState {
  questions: string[];
}

export const Write = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [textValue, setTextValue] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(false);

  const location = useLocation();
  const questions = location.state as QuestionState;

  const handleButtonClick = () => {
    if (currentQuestion === questions.questions.length - 1) {
      setComplete(true);
    } else {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
      setTextValue("");
    }
  };

  const questionTitle = questions.questions.map((question) => {
    return (
      <Text weight="bold" pb="xl">
        {question}
      </Text>
    );
  });

  if (complete) {
    return <Title>Complete</Title>;
  }

  return (
    <Container>
      {questionTitle[currentQuestion]}
      <Textarea
        value={textValue}
        onChange={(event) => setTextValue(event.currentTarget.value)}
        autosize
        radius="sm"
        mb="xl"
        minRows={8}
      />
      <Button variant="outline" onClick={handleButtonClick}>
        Next Question
      </Button>
    </Container>
  );
};
