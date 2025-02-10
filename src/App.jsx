import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import RoomsPage from "./pages/RoomsPage/RoomsPage";
import RoomDeteilsPage from "./pages/RoomDeteilsPage/RoomDeteilsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegionPage from "./pages/RegionPage/RegionPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/rooms/:id" element={<RoomDeteilsPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/region" element={<RegionPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ScrollToTop />
          </main>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
