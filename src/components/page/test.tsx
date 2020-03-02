import React from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import { Container, Enter, Title } from './styles';

type GreetingsProps = {
    name: string;
    mark: string;
};

const ColorButton = withStyles(() => ({
    root: {
        color: 'white',
        width: '100px',
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black',
        },
    },
}))(Button);
const ColorText = withStyles(() => ({
    root: {
        width: '300px',
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    },
}))(TextField);

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
    <Container>
        <Title>TRIZ STUDIO</Title>
        <Enter>
            <ColorText
                id="outlined-basic"
                label="패스워드"
                variant="outlined"
                type="password"
            />
            <ColorButton variant="contained" style={{ marginLeft: '10px' }}>
                접속
            </ColorButton>
        </Enter>
    </Container>
);

Greetings.defaultProps = {
    mark: 'tstetset',
};

export default Greetings;
