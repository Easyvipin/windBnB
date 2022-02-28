import "./App.css";
import Content from "Components/Content";
import styled from "styled-components";
import Header from "Components/Header";
import SubHeader from "Components/SubHeader";

const LayoutContainer = styled.div`
  padding: 3rem 6rem;
`;

function App() {
  return (
    <LayoutContainer>
      <Header />
      <SubHeader />
      <Content />
    </LayoutContainer>
  );
}

export default App;
