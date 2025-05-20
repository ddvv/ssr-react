import {useGetUsersQuery} from "../../../redux/services/jsonplaceholder";
import {MetaTags, type MetaTagsProps} from "../../components/meta-tags";

const metaTags: MetaTagsProps = {
    title: "Страница Users",
    description: "Описание страницы Users",
}

export const Users = () => {
    const {data, error, isLoading} = useGetUsersQuery();

    return <MetaTags {...metaTags}>
        <h1>Users Page</h1>
        {isLoading && <p>Пользователи загружаются</p>}
        {error && <p>Не удалось загрузить</p>}
        {data && <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>}
    </MetaTags>;
}