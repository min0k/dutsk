import { useForm } from "react-hook-form";

export const CreateQuestionPage = () => {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={undefined}>
        <label>Who are you </label>
        <input
          autoFocus
          autoComplete="off"
          placeholder="JobuTupaki"
          {...register("user", {
            pattern: {
              value: /^\S*$/,
              message: "No spaces",
            },
            required: "Identity required",
            maxLength: {
              value: 20,
              message: "Identity must be shorter than 20 characters",
            },
          })}
        />
        <p>{errors.user?.message}</p>
        <label>What is your word of choice </label>
        <input
          autoComplete="off"
          placeholder="Bagel"
          {...register("word", {
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Letters only",
            },
            required: "Word required",
            maxLength: {
              value: 20,
              message: "Word must be shorter than 20 characters",
            },
          })}
        />
        <p>{errors.word?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
