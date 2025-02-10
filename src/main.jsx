import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import productStore from "./redux/productStore.js";
import CategoryProvider from "./context/CategoryProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <BrowserRouter>
      <Provider store={productStore}>
      <App />
      </Provider>  
      </BrowserRouter>
    </CategoryProvider>
  </StrictMode>
);
