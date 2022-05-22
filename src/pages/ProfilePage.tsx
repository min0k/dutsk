import { useEffect, useState } from "react";
import { Box, Group, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { prepareQuestionsForRender } from "../util/prepareQuestionsForRender";
import { IQuestionDataFromApi } from "../ts/Interfaces";
import { QuestionCard } from "../components/QuestionCard";
import { LoginButton } from "../components/LoginButton";
import { Skeleton } from "@mantine/core";

export interface IFormControllerProps {
  setNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfilePage = () => {
  const { isLoading } = useAuth0();
  const [userQuestions, setUserQuestions] = useState<IQuestionDataFromApi[]>();
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
  const [userFromSession, setUserFromSession] = useState<any>();
  useEffect(() => {
    const getUserQuestions = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_CLOUD_RUN_URL}/get-user-questions?name=${userFromSession?.name}`
      );
      const data = await res.json();
      const preparedData = prepareQuestionsForRender(data);
      setUserQuestions(preparedData);
      setNumberOfQuestions(preparedData.length);
    };
    getUserQuestions();
  }, [userFromSession, numberOfQuestions]);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user")!);
      setUserFromSession(user);
    }
  }, []);

  console.log(userFromSession);

  if (!userFromSession) {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }

  if (isLoading) {
    return (
      <Box m="xl">
        <Skeleton height={70} width="70px" mb="xl" />
        <Skeleton height={40} width="240px" mt="xl" radius="xl" />
        <Skeleton height={8} mt="xl" width="100px" radius="xl" />
      </Box>
    );
  }

  return (
    <div>
      {userFromSession && (
        <Group m="xl">
          <Image
            mb="md"
            style={{ width: 70 }}
            radius="md"
            src={userFromSession?.picture}
          ></Image>
          <Text size="xl" mb="md">
            Hi,{" "}
            <span style={{ fontWeight: "bold" }}>{userFromSession!.name}.</span>
          </Text>
        </Group>
      )}
      <Title m="xl">Your Questions</Title>
      <Text m="xl">You have {numberOfQuestions} question sets</Text>
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
              inProfile={true}
              id={card._id}
              setNumberOfQuestions={setNumberOfQuestions}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};
