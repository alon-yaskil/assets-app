import styled from "styled-components";
import AssetsTable from "./components/AssetsTable";
import Header from "./components/Header";

function App() {
  return (
    <Layout>
      <Header />
      <AssetsTable />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
