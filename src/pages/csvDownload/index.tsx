import React from 'react';
import { CSVLink } from 'react-csv';
import styled from 'styled-components';

const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' },
];

const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'english@eng.com' },
    { firstname: 'Raed', lastname: 'me', email: 'readme.md' },
    { firstname: '길동', lastname: '홍', email: 'hong@hohoho.com' },
];

const CSV: React.FC = () => (
    <Container>
        <CSVLink data={data} headers={headers}>
            Download CSV
        </CSVLink>
    </Container>
);

const Container = styled.div`
    padding: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 4px;
`;

export default CSV;
