import React from 'react';
import { ListLayout, Container } from './styles';

interface Props {
    data: any;
    headerSplitter?: boolean;
    bottomSplitter?: boolean;
    dataSplitter?: any;
}

const FlatList: React.FC<Props> = ({
    data,
    dataSplitter,
    headerSplitter,
    bottomSplitter,
}) => {
    return data.map((m: any, i: number) => (
        <Container key={i.toString()}>
            {i === 0 && headerSplitter && dataSplitter}
            <ListLayout>{m}</ListLayout>
            {i < data.length - 1 && dataSplitter}
            {i === data.length - 1 && bottomSplitter && dataSplitter}
        </Container>
    ));
};

export default FlatList;
