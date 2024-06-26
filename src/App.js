import { Route, Link, Routes } from "react-router-dom";

// routing
import Router1 from "./page/Router1";
import Router2 from "./page/Router2";

function App() {
  return (
    <div className="App">
      <div>
        <p>자동 배포 테스트</p>  
        <p>취약점 점검!!</p>      
        <p>
          <Link to="/r1">Router1</Link>
        </p>
        <p>
          <Link to="/r2">Router2</Link>
        </p>
      </div>
      <div>
        <Routes>
          <Route path="/r1" element={<Router1 />} />
          <Route path="/r2" element={<Router2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;