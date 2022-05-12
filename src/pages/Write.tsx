import { Button, Container, Text, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IQuestionState } from "../ts/Interfaces";

export const Write = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [textValue, setTextValue] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const location = useLocation();
  const questions = location.state as IQuestionState;

  const handleButtonClick = () => {
    if (currentQuestion === questions.questions.length - 1) {
      setAnswers((prevAnswers) => [...prevAnswers, textValue]);
      setComplete(true);
    } else {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
      setAnswers((prevAnswers) => [...prevAnswers, textValue]);
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
    return (
      <div>
        {answers.map((answer, idx) => (
          <Container>
            <Text weight="bold">{questions.questions[idx]}</Text>
            <Text key={idx} pb="xl">
              {answer}
            </Text>
          </Container>
        ))}
      </div>
    );
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
