import {useQuery, gql} from "@apollo/client";
import { initializeApollo } from 'src/apollo';

const MyQuery = gql`
  query MyQuery {
    name
  }
`;
export default function Home() {
  const { data, loading } = useQuery(MyQuery);

  if(loading) return <span>Loading...</span>
  
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MyQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}