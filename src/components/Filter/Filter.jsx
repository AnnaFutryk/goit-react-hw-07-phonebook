import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';

const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          placeholder="Enter contact name"
          value={value}
          onChange={handleChangeFilter}
          id={filterInputId}
        />
      </Label>
    </>
  );
};

export default Filter;
