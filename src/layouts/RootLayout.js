import { NavLink, ScrollRestoration , Outlet } from "react-router-dom"

export const RootLayout = () => {
  return (
    <div className="root-layout">
        <ScrollRestoration/>
        <header >
            <nav className="nav-bar">
                <h1>Travelcy</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/explore">Explore</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
