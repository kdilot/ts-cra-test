import React from 'react';
import { Container } from './styles';
import {
    useParams,
    useRouteMatch,
    useHistory,
    useLocation,
} from 'react-router-dom';

interface Param {
    name: string;
}

const Page: React.FC = () => {
    const params = useParams<Param>();
    const location = useRouteMatch();
    window.localStorage.setItem('test', params.name);
    console.log(location, params);
    console.log(params);
    console.log(location);
    console.log(useHistory());
    console.log(useLocation());
    return <Container>{params.name}</Container>;
};

export default Page;
