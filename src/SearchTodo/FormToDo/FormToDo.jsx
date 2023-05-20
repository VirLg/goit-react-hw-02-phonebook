import { useState } from 'react';

export const FormToDo = props => {
  const { createUser, close } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { value, name } }) => {
    if (name === email) setEmail(value);
    else if (name === password) setPassword(value);
  };
  const handleSubmit = e => {
    e.preventTdefault();
    createUser({ email: email, password: password });
    setEmail('');
    setPassword('');
  };

  return (
    <form>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value="name"
          onChange=""
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
          value="number"
          onChange=""
        />
      </label>

      <input type="submit" />
    </form>
  );
};

export default FormToDo;
