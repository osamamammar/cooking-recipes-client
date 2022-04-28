import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
