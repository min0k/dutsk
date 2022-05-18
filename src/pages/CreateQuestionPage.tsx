import { Button, TextInput } from "@mantine/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IFormInput {
  title: String;
  name: String;
  question1: String;
  question2: String;
  question3: String;
}

export const CreateQuestionPage = () => {
  const { handleSubmit, control } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, ...rest } }) => (
          <TextInput
            mb="xl"
            label="Title"
            placeholder="One or two words on the topic of your questions."
            required
            maxLength={24}
            {...rest}
          ></TextInput>
        )}
      ></Controller>
      <Controller
        name="name"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <TextInput
            mb="xl"
            label="Name"
            placeholder="Your username"
            required
            maxLength={20}
            {...rest}
          ></TextInput>
        )}
      ></Controller>
      <Controller
        name="question1"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <TextInput
            mb="xl"
            label="Question 1"
            placeholder="Question 1"
            required
            maxLength={100}
            {...rest}
          ></TextInput>
        )}
      ></Controller>
      <Controller
        name="question2"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <TextInput
            mb="xl"
            label="Question 2"
            placeholder="Question 2"
            required
            maxLength={100}
            {...rest}
          ></TextInput>
        )}
      ></Controller>
      <Controller
        name="question3"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <TextInput
            mb="xl"
            label="Question 3"
            placeholder="Question 3"
            required
            maxLength={100}
            {...rest}
          ></TextInput>
        )}
      ></Controller>

      <Button type="submit">Submit</Button>
    </form>
  );
};
