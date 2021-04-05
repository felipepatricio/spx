export const getLaunch = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/launches/${id}`);
  return response.json();
}
