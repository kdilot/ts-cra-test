import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    styles?: any;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    marked?: boolean;
    danger?: boolean;
    onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
    styles,
    size = 'small',
    disabled = false,
    loading = false,
    marked = false,
    danger = false,
    children,
    onClick,
}) => {
    return (
        <Container
            onClick={onClick}
            style={{ ...styles }}
            size={size}
            loading={loading}
            disabled={disabled}
            marked={marked}
            danger={danger}>
            {children}
        </Container>
    );
};

const Container = styled.button<any>`
    cursor: ${(props) => (props.loading ? 'not-allowed' : 'pointer')};
    padding: ${(props) =>
        props.size === 'large'
            ? '6px 17px'
            : props.size === 'medium'
            ? '4px 15px'
            : ''};
    border-radius: 2px;
    outline: 0;
    margin: 10px;
    &:disabled {
        cursor: not-allowed;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.3);
    }
    border: 1px solid
        ${(props) => (props.marked ? 'transparent' : 'rgba(0, 0, 0, 0.5)')};
    background: ${(props) => (props.marked ? 'rgba(0, 0, 255, 0.6)' : '#fff')};
    color: ${(props) => (props.marked ? '#fff' : '#000')};
    ${(props) =>
        props.danger &&
        css`
            border: 1px solid
                ${props.marked ? 'transparent' : 'rgba(255, 0, 0, 0.65)'};
            background: ${props.marked ? 'rgba(255, 0, 0, 0.65)' : '#fff'};
            color: ${props.marked ? '#fff' : 'rgba(255, 0, 0, 1)'};
        `}
`;

export default Button;
