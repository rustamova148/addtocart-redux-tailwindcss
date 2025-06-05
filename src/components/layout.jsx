import { Outlet } from "react-router-dom"
import CartTab from "./cartTab"
import Header from "./header"
import { useSelector } from "react-redux"
const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className="bg-zinc-200 w-[100%] min-h-screen">
      <main className={`min-w-full] m-auto p-5 transform transition-transform duration-500
      ${statusTabCart === false ? "" : "-translate-x-40"}
      `}>
       <Header />
       <Outlet />
      </main>
      <CartTab />
    </div>
  )
}

export default Layout