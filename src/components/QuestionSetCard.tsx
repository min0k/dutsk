import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

interface QuestionSetCardProps {
  image: string;
  title: string;
  description: string;
}

export const QuestionSetCard = ({
  image,
  title,
  description,
}: QuestionSetCardProps) => {
  const theme = useMantineTheme();

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{title}</Text>
        </Group>
        <Text size="sm">{description}</Text>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Write
        </Button>
      </Card>
    </div>
  );
};
