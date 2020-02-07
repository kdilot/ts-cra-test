import React, { useEffect } from 'react';
import { Container } from './styles';
import { useParams, useRouteMatch, useHistory } from 'react-router-dom';

interface Param {
    name: string;
}

const Page: React.FC = () => {
    const params = useParams<Param>();
    const location = useRouteMatch();
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 3000);
    }, [history]);

    window.localStorage.setItem('test', params.name);
    console.log(location, params);
    console.log(params);
    console.log(location);
    return <Container>{params.name}</Container>;
};

export default Page;
