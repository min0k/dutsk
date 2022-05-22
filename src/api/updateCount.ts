export async function updateCount(data: any) {
  const newCount = data.id++;
  console.log(newCount);

  try {
    let response = await fetch(
      `${process.env.REACT_APP_CLOUD_RUN_URL}/update-count?id=${newCount}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
