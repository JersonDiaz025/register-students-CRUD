import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";
import PopupMsg from "./components/PopupAlert/PopupMsg";
import { useContext, useEffect} from 'react';
import { Context } from "./store/StoreProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUserToken } from "./utils/getUserLocalStorage";
import {configRoutes} from "./Routes-config/routes";

function App() {

  const [store, dispatch] = useContext(Context);
  const { sidebar, user, msgPopup } = store;
  const { openPopup, msgResponse } = msgPopup;
  const { openSidebar } = sidebar;
  const { isLogged } = user;
  const {routes, data } = configRoutes(user);

  useEffect(() => { 
    getUserToken(dispatch);
  }, [])
  
  return (
    <Router>
      <main className="dashboard-container">
        <div>
          {isLogged && (
            <>
              <Navbar store={store} dispatch={dispatch} />
              {openSidebar && <Sidebar dispatch={dispatch} />}
            </>
            )}
            {true? (
              <>
                {openPopup && <PopupMsg msgResponse={msgResponse} />}
                <Routes>
                  {routes?.map(({ path, element: Component, props }) => (
                    <Route
                      path={path}
                      element={<Component props={props} dispatch={dispatch} />}
                      key={path.length}
                    />
                  ))}
                </Routes>
              </>
            ) : (
              <Loader />
              )}
        </div>
      </main>
    </Router>
  );
}

export default App;
