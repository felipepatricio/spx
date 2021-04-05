import { LaunchInterface } from "models/launches";

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/launches/past`)
  const launches = await response.json()

  const paths = launches.map(({id}: LaunchInterface) => ({
    params: {
      id
    }
  }))
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }: any) => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/launches/${params.id}`)
  const launch = await response.json()

  return { props: { launch } }
}

const Launch = ({ launch }: any) => {
  return (<>
    <h1>Launch {launch?.name}</h1>
    <p>{launch?.details}</p>
  </>);
};

export default Launch;
