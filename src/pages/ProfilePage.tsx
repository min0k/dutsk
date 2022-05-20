import { useEffect, useState } from "react";
import { Group, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { prepareQuestionsForRender } from "../util/prepareQuestionsForRender";
import { IQuestionDataFromApi } from "../ts/Interfaces";
import { QuestionCard } from "../components/QuestionCard";
import { LoginButton } from "../components/LoginButton";

export const ProfilePage = () => {
  const { isLoading, user } = useAuth0();
  const [userQuestions, setUserQuestions] = useState<IQuestionDataFromApi[]>();

  useEffect(() => {
    const getUserQuestions = async () => {
      const res = await fetch(
        `http://localhost:8080/get-user-questions?name=${user?.name}`
      );
      const data = await res.json();
      const preparedData = prepareQuestionsForRender(data);
      setUserQuestions(preparedData);
    };

    getUserQuestions();
  }, [user]);

  if (!user) {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }

  return (
    <div>
      {!isLoading && user && (
        <Group m="xl">
          <Image
            mb="md"
            style={{ width: 70 }}
            radius="md"
            src={user?.picture}
          ></Image>
          <Text size="xl" mb="md">
            Hi, <span style={{ fontWeight: "bold" }}>{user.name}.</span>
          </Text>
        </Group>
      )}
      <Title m="xl">Your Questions</Title>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1440, cols: 2, spacing: "xl" },
          { maxWidth: 920, cols: 1, spacing: "lg" },
        ]}
      >
        {userQuestions?.map((card: IQuestionDataFromApi) => {
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
