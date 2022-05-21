import { useContext, useEffect, useState } from "react";
import { Group, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { prepareQuestionsForRender } from "../util/prepareQuestionsForRender";
import { IQuestionDataFromApi } from "../ts/Interfaces";
import { QuestionCard } from "../components/QuestionCard";
import { LoginButton } from "../components/LoginButton";
import { LoggedInUserContext } from "../context/LoggedInUserContext";

export interface IFormControllerProps {
  setNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfilePage = () => {
  const { isLoading } = useAuth0();
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [userQuestions, setUserQuestions] = useState<IQuestionDataFromApi[]>();
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);

  useEffect(() => {
    const getUserQuestions = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_CLOUD_RUN_URL}/get-user-questions?name=${loggedInUser?.name}`
      );
      const data = await res.json();
      const preparedData = prepareQuestionsForRender(data);
      setUserQuestions(preparedData);
      setNumberOfQuestions(preparedData.length);
    };

    getUserQuestions();
  }, [loggedInUser, numberOfQuestions]);

  if (!loggedInUser) {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }

  return (
    <div>
      {!isLoading && loggedInUser && (
        <Group m="xl">
          <Image
            mb="md"
            style={{ width: 70 }}
            radius="md"
            src={loggedInUser?.picture}
          ></Image>
          <Text size="xl" mb="md">
            Hi, <span style={{ fontWeight: "bold" }}>{loggedInUser.name}.</span>
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
