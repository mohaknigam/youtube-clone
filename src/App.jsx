import React from "react";
import Header from "./components/Header/Header.jsx";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
