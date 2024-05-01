import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Loader from './Loader';
import { fetchAll } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      {error && <p>{error}</p>}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '40px',
          padding: '60px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      </div>
      <ToastContainer />
      {isLoading && <Loader />}
    </>
  );
};

export { App };
