import { HomePage, ContentWrapper } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./screen/Messenger";

function App() {
  return (
    <>
      <HomePage>
        <NavBar />
        <SideBar />
        <ContentWrapper>
          <Messenger />
        </ContentWrapper>
      </HomePage>
    </>
  );
}

export default App;
