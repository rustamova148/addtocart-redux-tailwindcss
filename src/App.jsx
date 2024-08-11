import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import Detail from "./pages/detail"



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route index element={<Home />} />
         <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App