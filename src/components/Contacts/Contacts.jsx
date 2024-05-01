import { useSelector, useDispatch } from 'react-redux';
import classes from './Contacts.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

const Contacts = () => {
  const { items: contacts } = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterContacts = () => {
    console.log(contacts);
    return contacts.length
      ? contacts.filter(({ name }) =>
          name.toLowerCase().startsWith(filterValue.toLowerCase())
        )
      : [];
  };

  return (
    <div className={classes.list}>
      <ul>
        {contacts &&
          handleFilterContacts().map(({ id, name, phone }) => (
            <li key={id} className={classes.item}>
              <div>
                <span>{name}</span>:&nbsp;
                <span>{phone}</span>
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
