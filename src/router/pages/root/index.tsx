import {Link, Outlet} from "react-router-dom";
import {MetaTags, type MetaTagsProps} from "../../components/meta-tags";

const metaTags: MetaTagsProps = {
    title: "Страница Main",
    description: "Описание страницы Main",
}

export const Root = () => {
    return <MetaTags {...metaTags}>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main><Outlet/></main>
    </MetaTags>
}