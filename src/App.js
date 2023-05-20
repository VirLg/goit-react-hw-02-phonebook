import './App.css';
import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Section } from './components/Section/Section';
import { Contact } from './components/Contats/Contact';

import { Filter } from './components/FilterContact/FilterContact';

import HuksForm from './components/Form/HuksForm';
import { AppToDo } from './SearchTodo/App/App';

export default function App() {
  //*useState
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  //*useState
  const formSubmitHendler = data => {
    const state = contacts.find(el => el.name === data.name);
    if (state) {
      return Notify.failure('Sorry, this contact already in your list.');
    } else {
      addNewContact(data);
    }
  };

  const addNewContact = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    setContacts(prevState => {
      return [contact, ...prevState];
    });
    // setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
  };

  const DeleteContact = ContactId => {
    // console.log(ContactId);
    // setState(prevState => ({
    //   contacts: prevState.contacts.filter(el => ContactId !== el.id),
    // }));
  };

  const handleSearchInput = evt => {
    setFilter(evt.target.value);

    //  setState({
    //     filter: evt.target.value,
    //   });
  };

  return (
    <>
      <Section>
        <h1>Phonebook</h1>

        <HuksForm getFormContact={addNewContact} />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleSearchInput} />
      </Section>
    </>
  );
}

{
  /* <Contact contacts={visibleContacts} onDeleteContact={DeleteContact} /> */
}

// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHendler = data => {
//     const state = this.state.contacts.find(el => el.name === data.name);
//     if (state) {
//       return Notify.failure('Sorry, this contact already in your list.');
//     } else {
//       this.addNewContact(data);
//     }
//   };

//   addNewContact = data => {
//     const { name, number } = data;
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   DeleteContact = ContactId => {
//     console.log(ContactId);
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(el => ContactId !== el.id),
//     }));
//   };

//   handleSearchInput = evt => {
//     this.setState({
//       filter: evt.target.value,
//     });
//   };

//   render() {
//     const { filter = '', contacts } = this.state;

//     const visibleContacts = contacts.filter(el => el.name.includes(filter));

//     // contacts.filter(el=>el.name.includes(filter))

//     return (
//       <>
//         <Section>
//           <h1>Phonebook</h1>

//           <HuksForm onSubmit={this.state.contacts} />
//         </Section>

//         <Section>
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.handleSearchInput} />
//           <Contact
//             contacts={visibleContacts}
//             onDeleteContact={this.DeleteContact}
//           />
//         </Section>
//         <Section>
//           <AppToDo />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;

{
  /* <Form onSubmit={this.formSubmitHendler} /> */
}
