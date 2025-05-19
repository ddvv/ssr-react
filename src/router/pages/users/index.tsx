import {useGetUsersQuery} from "../../../redux/services/jsonplaceholder";

export const Users = () => {
    const {data, error, isLoading} = useGetUsersQuery();

    return <div>
        <h1>Users Page</h1>
        {isLoading && <p>Пользователи загружаются</p>}
        {error && <p>Не удалось загрузить</p>}
        {data && <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>}
    </div>;
}