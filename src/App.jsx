import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import RoomsPage from "./pages/RoomsPage/RoomsPage";
import RoomDeteilsPage from "./pages/RoomDeteilsPage/RoomDeteilsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDeteilsPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
