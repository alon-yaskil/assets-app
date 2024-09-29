import styled from "styled-components"
import AssetsTable from "./components/AssetsTable"
import Header from "./components/Header"

function App() {
    return (
        <Layout>
            <Header></Header>
            <AssetsTable></AssetsTable>
        </Layout>
    )
}

export default App

const Layout = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--app-background);
`
