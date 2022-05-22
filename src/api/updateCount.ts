export async function updateCount(data: any) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_CLOUD_RUN_URL}/update-count?id=${data.id}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
