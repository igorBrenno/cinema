import { RouterProvider } from "react-router-dom"
import router from "/src/router.jsx"

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
