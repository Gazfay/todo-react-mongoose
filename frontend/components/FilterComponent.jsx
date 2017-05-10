import React from 'react'
import moment from 'moment';
import classnames from 'classnames';

const FilterComponent = ({filter, setVisibleFilter}) => {
  const changeFilter = (filter) =>{
    setVisibleFilter(filter);
  }

  return (
    <div className="col-md-8 col-md-push-2 filter-content">
      <ul className="nav nav-tabs nav-justified">
        <li role="presentation" className={classnames({'active': filter == 'SHOW_ALL'})} onClick={() => {changeFilter("SHOW_ALL")}}><a>All</a></li>
        <li role="presentation" className={classnames({'active': filter == 'SHOW_ACTIVE'})} onClick={() => {changeFilter("SHOW_ACTIVE")}}><a>Active</a></li>
        <li role="presentation" className={classnames({'active': filter == 'SHOW_COMPLETED'})} onClick={() => {changeFilter("SHOW_COMPLETED")}}><a>Completed</a></li>
      </ul>
    </div>
  );
}

export default FilterComponent;