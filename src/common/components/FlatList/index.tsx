import React from 'react';
import { ListLayout } from './styles';

interface Props {
    data: any;
    dataSpliter?: any;
}

const FlatList: React.FC<Props> = ({ data, dataSpliter }) => {
    console.log(dataSpliter);
    return data.map((m: any, i: number) => {
        return (
            <>
                <ListLayout key={i.toString()}>{m}</ListLayout>
                {i < data.length - 1 && dataSpliter}
            </>
        );
    });
};

export default FlatList;
