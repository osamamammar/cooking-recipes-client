import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddNewRecipePage,
  EditRecipePage,
  LandingPage,
  RecipePage,
} from "./screens";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/recipe/:id/edit" element={<EditRecipePage />} />
          <Route path="/add-new-recipe" element={<AddNewRecipePage />} />

          <Route path="*" />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
