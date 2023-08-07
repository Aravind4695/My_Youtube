import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Router";


function App() {
  return (
        <>       
          <RouterProvider router={appRouter}></RouterProvider>
        </>
  );
}

export default App;
