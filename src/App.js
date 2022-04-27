import GlobalStyles from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
