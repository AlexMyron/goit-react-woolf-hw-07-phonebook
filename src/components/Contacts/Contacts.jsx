import { useSelector, useDispatch } from 'react-redux';
import classes from './Contacts.module.css';
import { getContacts, getFilterValue } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleFilterContacts = () =>
    contacts.length
      ? contacts.filter(({ name }) =>
          name.toLowerCase().startsWith(filterValue.toLowerCase())
        )
      : [];

  return (
    <div className={classes.list}>
      <ul>
        {contacts &&
          handleFilterContacts().map(({ id, name, number }) => (
            <li key={id} className={classes.item}>
              <div>
                <span>{name}</span>:&nbsp;
                <span>{number}</span>
              </div>
              <button
                className={classes.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Contacts;
