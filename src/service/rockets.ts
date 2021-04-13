export const getRockets = async () => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/rockets`);
  return response.json();
};

export const getRocket = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_API_BASE_URL}/rockets/${id}`
  );
  return response.json();
};
