import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Protected from "./components/auth/Protected";
import Search from "./pages/Search";
import DetailMovie from "./pages/DetailMovie";
import Login from "./users/Login";
import Register from "./users/Register";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/search" element={<Search />} />

            <Route
              path="users/detail/:id"
              element={
                <Protected>
                  <DetailMovie />
                </Protected>
              }
            />
          </Routes>
          <Footer />
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
