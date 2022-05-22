import {
  Card,
  Text,
  Button,
  Group,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteQuestions } from "../api/deleteQuestions";
import { IQuestionCard } from "../ts/Interfaces";

export const QuestionCard = ({
  title,
  author,
  questions,
  backgroundColor,
  inProfile,
  id,
  count,
  setNumberOfQuestions,
}: IQuestionCard) => {
  const theme = useMantineTheme();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const handleDelete = async () => {
    deleteQuestions(id!).then(() => {
      setNumberOfQuestions!((prevNumber) => prevNumber - 1);
      setModalOpened(false);
    });
  };
  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{title}</Text>
        </Group>
        <Text size="sm" weight={300}>
          By <span style={{ fontWeight: "bold" }}>{author.split(" ")[0]}</span>
        </Text>
        <Text size="sm" weight={300}>
          Answered 43 times
        </Text>
        <Button
          color={backgroundColor}
          fullWidth
          style={{ marginTop: 14 }}
          component={Link}
          to="/write"
          state={{ questions: questions, id: id, count: count }}
        >
          Write
        </Button>
        {inProfile && (
          <div>
            <Button
              color="red"
              fullWidth
              style={{ marginTop: 14 }}
              variant="light"
              onClick={() => setModalOpened(true)}
            >
              Delete
            </Button>
            <Modal
              centered
              opened={modalOpened}
              onClose={() => setModalOpened(false)}
              withCloseButton={false}
              overlayOpacity={0.55}
              overlayColor={
                theme.colorScheme === "dark"
                  ? theme.colors.dark[9]
                  : theme.colors.gray[2]
              }
              overlayBlur={3}
            >
              <Text mb="lg">
                This is permanant, are you sure you want to delete this?
              </Text>
              <Button
                onClick={handleDelete}
                mr="xs"
                variant="outline"
                color="red"
              >
                Yes
              </Button>
              <Button variant="outline" onClick={() => setModalOpened(false)}>
                No
              </Button>
            </Modal>
          </div>
        )}
      </Card>
    </div>
  );
};
