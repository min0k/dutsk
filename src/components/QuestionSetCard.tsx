import { Card, Text, Button, Group, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";

interface QuestionSetCardProps {
  title: string;
  author: string;
  questions: string[];
  backgroundColor?: string;
}

export const QuestionSetCard = ({
  title,
  author,
  questions,
  backgroundColor,
}: QuestionSetCardProps) => {
  const theme = useMantineTheme();

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
          By <span style={{ fontWeight: "bold" }}>{author}</span>
        </Text>
        <Button
          color={backgroundColor}
          fullWidth
          style={{ marginTop: 14 }}
          component={Link}
          to="./Write"
          state={{ questions: questions }}
        >
          Write
        </Button>
      </Card>
    </div>
  );
};
