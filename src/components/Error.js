import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError
    return (
        <>
            <h1>Error is {err.id} and status is {err.status}</h1>
        </>
    )
}

export default Error