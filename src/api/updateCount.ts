export async function updateCount(id: string, count: number) {
  console.log(count);

  const newCount = count + 1;
  console.log(newCount);

  try {
    let response = await fetch(
      `${process.env.REACT_APP_CLOUD_RUN_URL}/update-count?id=${id}&count=${newCount}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
