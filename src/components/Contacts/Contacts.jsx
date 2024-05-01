import { useSelector, useDispatch } from 'react-redux';
import classes from './Contacts.module.css';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div className={classes.list}>
      <ul>
        {contacts &&
          contacts.map(({ id, name, phone }) => (
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
