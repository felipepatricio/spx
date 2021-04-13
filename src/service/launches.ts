const urlLaunches = `${process.env.NEXT_API_BASE_URL}/launches`

export const getOneLaunch = async (id: string) => {
  const response = await fetch(`${urlLaunches}/${id}`);
  return response.json();
}

export const getLaunches = async () => {
  const response = await fetch(`${urlLaunches}`)
  return response.json()
}

export const getPastLaunches = async () => {
  const response = await fetch(`${urlLaunches}/past`)
  return response.json()
}

export const getLatestLaunch = async () => {
  const response = await fetch(`${urlLaunches}/latest`)
  return response.json()
}

export const getNextLaunch = async () => {
  const response = await fetch(`${urlLaunches}/latest`)
  return response.json()
}
