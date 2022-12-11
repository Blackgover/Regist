import Login from "./pages/Login";

import { StyledContainer, CopyrightText } from "./components/style";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entry from "./pages/dataEntry";

function App() {
  return(
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/entry" element={<Entry />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </StyledContainer>
    </Router>
  )
}

export default App;