import Input from 'components/Input';
import classes from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { changeFilter, clearFilter } from '../../redux/filterSlice';

const Filter = () => {
  const { items: contacts } = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isContacts = contacts.length;

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
        disabled={!isContacts}
        className={classes.input}
        onChange={handleFilterChange}
        handleClick={handleFilterClear}
        isShowButton={filterValue}
      />

      {!isContacts && <p className={classes.message}>No Contacts</p>}
    </>
  );
};

export default Filter;
