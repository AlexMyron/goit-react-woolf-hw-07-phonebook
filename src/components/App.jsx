import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <>
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
    </>
  );
};

export { App };
