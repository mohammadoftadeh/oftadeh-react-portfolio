import React, { Suspense } from 'react';
import Title from '../title/Title';
import CardList from '../cardList/CardList';
import SkeletonLoader from './../skeletonLoader/SkeletonLoader';
import { portfolios } from './../../@fake-db/db/portfolios-db';
import withCustomScroll from './../../hoc/withCustomScroll';
import './PortfolioSide.scss';

const Card = React.lazy(() => import('../card/Card'));

class PortfolioSide extends React.Component{

    state = {
        portfolios
    }

    render(){
        return(
            <>
                <Title>Portfolios</Title>
                <CardList>
                    {
                        this.state.portfolios.map(item => (
                            <Suspense key={item.id} fallback={<SkeletonLoader />}>
                                <Card {...item} />
                            </Suspense>
                        ))
                    }
                </CardList>
            </>
        );
    }
}

export default withCustomScroll(PortfolioSide);