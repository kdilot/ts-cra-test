import React from 'react';
import { Header, Content, Footer } from './styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SampleList } from 'common';
import { Helmet } from 'react-helmet-async';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    child: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const DATA = new Array(12).fill(null);

const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>메인 페이지</title>
            </Helmet>
            <Header>
                <Link to="/page/home">Header </Link>
            </Header>
            <Header>
                <Link to="/page/content">Content </Link>
            </Header>
            <Content>
                {/* <FlatList
                    data={DATA}
                    dataSplitter={<DividerLayout />}
                    headerSplitter={true}
                    bottomSplitter={true}
                /> */}
                <Grid
                    className={classes.root}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    {DATA.map((m: any, i: number) => (
                        <Grid item className={classes.child} xs={3} key={i}>
                            <SampleList />
                        </Grid>
                    ))}
                </Grid>
            </Content>
            <Footer>
                <Link to="/page/footer">Footer </Link>
            </Footer>
        </>
    );
};

export default Home;
