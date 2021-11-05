import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./screen/Messenger";
import Login from "./screen/Login";
<<<<<<< HEAD
import Dashboard from "./screen/Dashboard/Dashboard";
import "./App.css";

function App() {
    return (
        <>
            <HomePage>
                <NavBar />
                <div className="main">
                    <div className="content-wrapper">
                        <SideBar />
                        <Dashboard />
                    </div>
                </div>

                {/* <Messenger /> */}
                {/* <Login /> */}

                {/* Chua lam router an db ha tri ???*/}
            </HomePage>
        </>
    );
=======

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
        <Login />
      </HomePage>
    </>
  );
>>>>>>> 689a9106b11758fc3d5585c247e28da2c69a1b8e
}

export default App;
