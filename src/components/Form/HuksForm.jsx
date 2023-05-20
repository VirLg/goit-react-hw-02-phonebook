import { useState } from 'react';

export default function HuksForm(props) {
  const { getFormContact } = props;
  // console.log(onSubmit);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handleFormChange = evt => {
  //   if (evt.target.name === firstName) {
  //     setFirstName(evt.target.value);
  //   } else if (evt.target.name === number) {
  //     setNumber(evt.target.value);
  //   }
  // };

  const handleFormChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmitAddContact = evt => {
    evt.preventDefault();

    getFormContact({
      name,
      number,
    });
    // this.reset();
  };

  return (
    <form onSubmit={handleFormSubmitAddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleFormChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
