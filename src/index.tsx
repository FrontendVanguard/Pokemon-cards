import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { App } from "./components/App/App";
import { Character } from "./components/Character/Character";
import GlobalStyle from "./globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Character />} />
    </>
  )
);

root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
