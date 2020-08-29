export const code = `import React from 'react';
import { CSVLink } from 'react-csv';

const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' },
];

const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: '한글은요?' },
    { firstname: 'Raed', lastname: '한글되나요', email: 'rl@smthing.co.com' },
    { firstname: '한글도좀', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
];

const CSV: React.FC = () => (
    <div>
        <CSVLink data={data} headers={headers}>
            Download me
        </CSVLink>
        ;
    </div>

export default CSV;`;
