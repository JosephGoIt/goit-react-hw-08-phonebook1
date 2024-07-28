import React from 'react';
import css from './Filter.module.css';

export const Filter = () => {
    // const dispatch = useDispatch();
    // const filter = useSelector(getFilter);
  
    const onFilterChange = (e) => {
    //   dispatch(setFilter(e.target.value));
    };
  
    return (
      <div className={css.container}>
        <p>Find Contacts by Name</p>
        <input
          type="text"
          name="filter"
          placeholder="Search by name"
        //   value={filter}
          onChange={onFilterChange}
        />
      </div>
    );
  };