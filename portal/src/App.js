import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./screen/Messenger";
import Login from "./screen/Login";

import InputPost from "./screen/Profile/InputPost";
import ProfileHead from "./screen/Profile/ProfileHead";
import Pictures from "./screen/Profile/Picture";
import AboutPet from "./screen/Profile/AboutPet";

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
        {/* <Login /> */}
        <NavBar />
        <ContentWrapper>
          <SideBar />
          <Content>
            <ProfileHead/>
            <InputPost/>
            <Pictures/>
            <AboutPet/>
          </Content>
        </ContentWrapper>
      </HomePage>
    </>
  );
}

export default App;
