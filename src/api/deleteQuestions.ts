export const deleteQuestions = async (id: string) => {
  try {
    let response = await fetch(
      `http://localhost:8080/delete-questions?id=${id}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
