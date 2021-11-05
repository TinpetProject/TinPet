import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./screen/Messenger";
import Login from "./screen/Login";

function App() {
    return (
        <>
            <HomePage>
                <NavBar />
                <ContentWrapper>
                    <SideBar />
                    <Content>{/* <Messenger /> */}</Content>
                </ContentWrapper>
                {/* <Login /> */}

                {/* Chua lam router an db ha tri ???*/}
            </HomePage>
        </>
    );
}

export default App;
