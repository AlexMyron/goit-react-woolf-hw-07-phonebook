import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

import classes from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleFormSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      number: { value: number },
    } = e.target.elements;

    if (!name || !number) return;
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isContactExists
      ? toast(`Contact "${name}" already exists`)
      : dispatch(
          addContact({
            name,
            number,
            id: nanoid(),
          })
        );

    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <div className={classes.content}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={classes.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div className={classes.content}>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          className={classes.input}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button className={classes.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default Form;
