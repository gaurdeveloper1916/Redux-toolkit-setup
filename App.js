import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Middle from "./components/Middle";
import { Provider } from "react-redux";
import store from "./components/store/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/middle" element={<Middle />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
