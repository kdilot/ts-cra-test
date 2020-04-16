import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';

const list = [
    { name: 'Category1' },
    { name: 'Category2' },
    { name: 'Category3' },
    { name: 'Category4' },
    { name: 'Category5' },
    { name: 'Category6' },
    { name: 'Category7' },
    { name: 'Category8' },
    { name: 'Category9' },
];

const MenuItem = ({ text, selected }: any) => {
    return (
        <ItemLayout className={`menu-item ${selected ? 'active' : ''}`}>
            <span>{text}</span>
        </ItemLayout>
    );
};

const Menu = (list: any, selected: string) =>
    list.map((el: any) => {
        const { name } = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });

const Menu1: React.FC = () => {
    const [selected, setSelected] = useState<any>('item1');
    return (
        <Container>
            <ScrollMenu
                data={Menu(list, selected)}
                alignCenter={true}
                selected={selected}
                onSelect={(key) => setSelected(key)}
                wheel={false}
            />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 0.5rem 0;
    .menu-item-wrapper:first-child .menu-item {
        margin-left: 0;
    }
    .menu-item-wrapper:last-child .menu-item {
        margin-right: 0;
    }
    .menu-item-wrapper:focus {
        outline: none;
    }
`;

const ItemLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    padding-bottom: 0;
    margin: 0 1rem;
    span {
        border-bottom: 2px solid transparent;
        cursor: pointer;
    }
    &.active span {
        border-bottom: 2px solid black;
    }
`;

export default Menu1;
