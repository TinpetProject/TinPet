import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Messenger from "./screen/Messenger";
import Login from "./screen/Login";
import Dashboard from "./screen/Dashboard/Dashboard";
import "./App.css";

function App() {
    return (
        <>
            <HomePage>
                <NavBar />
                <SideBar />
                <div className="main">
                    <Dashboard />
                </div>

                {/* <Messenger /> */}
                {/* <Login /> */}

                {/* Chua lam router an db ha tri ???*/}
            </HomePage>
        </>
    );
}

export default App;
