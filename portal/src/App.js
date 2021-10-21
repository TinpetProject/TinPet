import { HomePage } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <HomePage>
        <NavBar />
        <SideBar />
      </HomePage>
    </>
  );
}

export default App;
