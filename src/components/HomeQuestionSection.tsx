import { QuestionCard } from "./QuestionCard";
import { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { prepareQuestionsForRender } from "../util/prepareQuestionsForRender";
import { IQuestionDataFromApi } from "../ts/Interfaces";
import { LoggedInUserContext } from "../context/LoggedInUserContext";

export const HomeQuestionSection = () => {
  const { user, loginWithRedirect, isLoading } = useAuth0();
  const [questions, setQuestions] = useState<IQuestionDataFromApi[]>();
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);

  useEffect(() => {
    const getAllQuestions = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_CLOUD_RUN_URL}/all-questions`
      );
      const data = await res.json();
      const preparedData = prepareQuestionsForRender(data);
      setQuestions(preparedData);
    };

    getAllQuestions();
  }, []);

  useEffect(() => {
    if (!isLoading && user) {
      setLoggedInUser(user);
    }
  }, [isLoading, setLoggedInUser, user]);

  const RedirectButton = () => {
    return loggedInUser ? (
      <Button
        variant="outline"
        fullWidth
        style={{ marginTop: 14 }}
        component={Link}
        to="/create"
      >
        Add new question set
      </Button>
    ) : (
      <Button
        variant="outline"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={loginWithRedirect}
      >
        Login
      </Button>
    );
  };

  return (
    <div>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <Title pl="xl">Questions </Title>
      </Box>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1440, cols: 2, spacing: "xl" },
          { maxWidth: 920, cols: 1, spacing: "lg" },
        ]}
      >
        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" p="lg">
            <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
              <Text weight={500}>Add Your Own Questions</Text>
            </Group>
            <Text size="sm">By ... </Text>
            <RedirectButton />
          </Card>
        </div>
        {questions?.map((card: IQuestionDataFromApi) => {
          return (
            <QuestionCard
              key={card._id}
              title={card.title}
              author={card.name}
              questions={card.questions}
              backgroundColor={card.color}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};
