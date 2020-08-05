import React, { useState } from 'react';
import styled from 'styled-components';
import { CATEGORIES } from './global';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

console.log(CATEGORIES);
const CategoryList: React.FC = () => {
    const [data, setData] = useState<any>(CATEGORIES);

    return (
        <Container>
            {/* {CATEGORIES.map((list: any, index: number) => createCategory(list))} */}
            <SortableTree
                treeData={data}
                onChange={(treeData: any) => setData(treeData)}
                canDrag={false}
                generateNodeProps={({ node, path }) => ({
                    title: (
                        <>
                            <input
                                value={node.title}
                                onChange={(event) => {
                                    setData([
                                        ...data,
                                        { title: 'asdfasdf', children: [] },
                                    ]);
                                    // const name = event.target.value;
                                }}
                            />
                            123123
                        </>
                    ),
                })}
            />
        </Container>
    );
};

const Container = styled.div`
    width: 410px;
    height: 800px;
    background: yellow;
    margin-top: 1rem;
    .group ~ .group {
        margin-top: 5px;
    }
`;

export default CategoryList;
