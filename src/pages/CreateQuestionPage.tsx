import { useAuth0 } from "@auth0/auth0-react";
import { Button, TextInput } from "@mantine/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addNewQuestions } from "../api/addNewQuestions";
import { IFormInput } from "../ts/Interfaces";
import { prepareQuestionsForUpload } from "../util/prepareQuestions";

export const CreateQuestionPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<IFormInput>();
  const { user } = useAuth0();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const preparedData = prepareQuestionsForUpload(data, user);
    addNewQuestions(preparedData).then(() => {
      navigate("/home");
    });
  };

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
