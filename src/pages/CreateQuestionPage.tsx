import { Button, NativeSelect, TextInput } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

// Use Controller - React-hook-forms

interface IFormInput {
  title: String;
  name: String;
  questions: String[];
  color: String;
}

export const CreateQuestionPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Title"
        {...(register("title"), { required: true, maxLength: 16 })}
      />
      <TextInput
        label="Name"
        {...(register("name"), { required: true, maxLength: 16 })}
      />
      <TextInput
        label="Question 1"
        {...(register("questions"), { required: true, maxLength: 100 })}
      />
      <TextInput
        label="Question 2"
        {...(register("questions"), { required: true, maxLength: 100 })}
      />
      <TextInput
        label="Question 3"
        {...(register("questions"), { required: true, maxLength: 100 })}
      />
      <NativeSelect
        mb="xl"
        {...(register("color"), { required: true })}
        data={["React", "Vue", "Angular", "Svelte"]}
        placeholder="Pick one"
        label="Pick a color"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
