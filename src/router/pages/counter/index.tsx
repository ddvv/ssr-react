import {Counter as CounterComponent} from "../../../components/counter";
import {MetaTags, type MetaTagsProps} from "../../components/meta-tags";

const metaTags: MetaTagsProps = {
    title: "Страница Counter",
    description: "Описание страницы Counter",
}

export const Counter = () => {
    return <MetaTags {...metaTags}>
        <h1>Counter Page</h1>
        <CounterComponent/>
    </MetaTags>;
}