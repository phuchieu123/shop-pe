// import Header from "./layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routers";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((item, index) => {
            const Page = item.component;
            return <Route key={index} path={item.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
