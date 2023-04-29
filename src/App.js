import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import "./index.css"
function App() {
  return (
    <div className="bg-gray-100">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
