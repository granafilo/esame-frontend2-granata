import { Outlet } from "react-router"
import Header from "./Header"

type Props = {}

const Shell = (props: Props) => {
  return (
    <div className="shell">
      <Header />
      <Outlet />
    </div>
  )
}

export default Shell