import {MetaTags, type MetaTagsProps} from "../../components/meta-tags";

const metaTags: MetaTagsProps = {
    title: "Страница About",
    description: "Описание страницы About",
}

export const About = () => {
    return <MetaTags {...metaTags}>
        <h1>About Page</h1>
    </MetaTags>;
}