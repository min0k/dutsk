export const deleteQuestions = async (id: string) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_CLOUD_RUN_URL}/delete-questions?id=${id}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
