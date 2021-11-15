import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./pages/Messenger";
import Login from "./screen/Login";
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
          </div>
        </div>

        <Messenger />
        {/* <Dashboard /> */}
        {/* <Login /> */}

        {/* Chua lam router an db ha tri ???*/}
      </HomePage>
    </>
  );
}

export default App;
