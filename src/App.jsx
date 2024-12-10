import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./Components/utils/routes";
import { useGlobalStates } from "./Context/Context";
import Layout from "./Layout/Layout";

function App() {
  const { state } = useGlobalStates();
  const themeClass = state.theme === "dark" ? "dark" : "light";
  return (
    <div className={`App ${themeClass}`}>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route
            path={routes.pnf}
            element={<h1>Page not found - Error 404</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
