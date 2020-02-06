import React from 'react';
import { Container } from './styles';
import { RouteComponentProps } from 'react-router-dom';

interface Param {
    name: string;
}

const Page: React.FC<RouteComponentProps<Param>> = ({ location, match }) => {
    window.localStorage.setItem('test', match.params.name);
    console.log(location, match);
    return <Container>{match.params.name}</Container>;
};

export default Page;
