import Input from 'components/Input';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';
import { changeFilter, clearFilter } from '../../redux/filterSlice';

const Filter = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const isContactExists = contacts.length

  const handleFilterChange = ({ target: { value } }) =>
    dispatch(changeFilter(value));
  const handleFilterClear = () => dispatch(clearFilter());

  return (
    <>
      <Input
        id="filter-input"
        label="Find Contacts by name"
        type="text"
        name="filter"
        value={filterValue}
        disabled={!isContactExists}
        className={classes.input}
        onChange={handleFilterChange}
        handleClick={handleFilterClear}
        isShowButton={filterValue}
      />

      {!isContactExists && <p className={classes.message}>No Contacts</p>}
    </>
  );
};

export default Filter;
