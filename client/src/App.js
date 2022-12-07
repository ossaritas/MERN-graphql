import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Client";

const client = new ApolloClient({
  uri: 'http://localhost:5050/graphql',
  cache: new InMemoryCache()
})
function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
        <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
