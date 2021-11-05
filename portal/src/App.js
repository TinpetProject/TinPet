import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./screen/Messenger";
import AuthenticationForm from "./screen/AuthenticationForm";

function App() {
  return (
    <>
      <HomePage>
        {/* <NavBar />
        <ContentWrapper>
          <SideBar />
          <Content>
            <Messenger />
          </Content>
        </ContentWrapper> */}
        <AuthenticationForm />
      </HomePage>
    </>
  );
}

export default App;
