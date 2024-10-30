/* eslint-disable @typescript-eslint/no-explicit-any */
async function getUsersData(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `https://retoolapi.dev/pmCQ7k/usersdata?_page=${page}&_limit=${limit}`,
      {
        cache: "force-cache",
      }
    );
    const data = await response.json();
    // await new Promise((res) => setTimeout(res, 5000));
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}
async function getUsersOverallData(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `https://retoolapi.dev/7V3hgj/overall_data?_page=${page}&_limit=${limit}`
      //   {
      //     cache: "force-cache",
      //   }
    );
    const data = await response.json();
    await new Promise((res) => setTimeout(res, 2000));
    console.log(data);
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

export { getUsersData, getUsersOverallData };
