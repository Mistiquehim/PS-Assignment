import React from 'react';
import LazyImage from '../../../View/LazyImage/LazyImage'
import './FigureItem.css'

const FigureItem = React.memo((props) => {
    return (
        <figure className="figure-item">
            <LazyImage src={props.source} alt={props.name} />
        </figure>
    );
});

export default FigureItem;