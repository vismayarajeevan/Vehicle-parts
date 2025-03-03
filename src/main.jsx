import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import productStore from "./redux/productStore.js";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { SidebarProvider } from "./context/SidebarProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <SidebarProvider>
      <AuthProvider>
          <BrowserRouter>
          <Provider store={productStore}>
          <App />
          </Provider>  
          </BrowserRouter>
      </AuthProvider>
   </SidebarProvider>
  </StrictMode>
);
