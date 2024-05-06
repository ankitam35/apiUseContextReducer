export const fetchData = async (url) => {
  try {
    const response = await fetch(url).then((res) => res.json());
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
