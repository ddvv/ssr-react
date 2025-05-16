import {Link, Outlet} from "react-router-dom";

export const Root = () => {
    return <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main><Outlet/></main>
    </>
}