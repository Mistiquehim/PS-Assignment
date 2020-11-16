import React from 'react';
import FilterCategory from './FilterCategory/FilterCategory';
import './SpaceXFilters.css';

const SpaceXFilters = (props) => {

    const filterCategories = props.filterData.map(category =>
        <FilterCategory
            filterValues={category.data}
            filerType={category.type}
            key={category.type}
            filterDisplayName={category.displayName}
            activeItem={category.activeItem}
            onFilterApply={props.onFilterApply} />
    )

    return (
        <div className="launch-filters">
            <h2>Filters</h2>
            {filterCategories}
        </div>
    );
}

export default SpaceXFilters; 