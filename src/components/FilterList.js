import React from "react";
import PropTypes from "prop-types";

import Filter from "./Filter";

import filterValidator from "../validators/filterValidator";

import "./FilterList.css";

class FilterList extends React.Component {
    render() {
        const {filters, onClearClick, onFilterClick} = this.props;
        const headerArray = filters.reduce((acc, filter) => {
            if (!acc.includes(filter.category)) {
                return acc.concat(filter.category);
            }
            return acc;
        }, []);
        const filterCategoryArray = headerArray.map((category) => {
            const valueArray =
                filters.filter(filter => filter.category === category)
                    .map(filter => (
                        <Filter key={`${category}_${filter.value}`} filter={filter} onClick={onFilterClick}/>
                    ));
            return (
                <div key={category}>
                    <h3>{category}</h3>
                    {valueArray}
                </div>
            );
        });
        return (
            <div className="col-100">
                {filterCategoryArray}
                <button
                    className="btn"
                    onClick={() => {
                        onClearClick();
                    }}
                >Clear All
                </button>
            </div>
        );
    }
}

FilterList.propTypes = {
    filters: PropTypes.arrayOf(filterValidator).isRequired,
    onClearClick: PropTypes.func.isRequired,
    onFilterClick: PropTypes.func.isRequired,
};

export default FilterList;
