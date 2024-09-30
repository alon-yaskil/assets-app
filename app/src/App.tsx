import AssetsTable from "./components/AssetsTable";
import Header from "./components/Header";
import { Layout } from "./styles/app";

function App() {
  return (
    <Layout>
      <Header />
      <AssetsTable />
    </Layout>
  );
}

export default App;
