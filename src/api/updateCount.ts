export async function updateCount(id: string, count: number) {
  const newCount = count + 1;
  try {
    let response = await fetch(
      `${process.env.REACT_APP_CLOUD_RUN_URL}/update-count?id=${id}&=count${newCount}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
