import { useState } from 'react';
import { FormToDo } from '../FormToDo/FormToDo';

export const AppToDo = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const openModal = () => {
    setIsShowModal(true);
    // this.setState({ isShowModal: true });
  };
  const closeModal = () => {
    setIsShowModal(false);
    // this.setState({ isShowModal: false });
  };
  const createUser = () => {
    //   const newUser = {
    //     ...data,
    //     id: Date.now(),
    //     role: 'customer',
    //   };
  };
  const handleSearch = () => {
    setSearchText({ searchText });
    // this.state( searchText );
  };
  return (
    <div>
      <FormToDo close={closeModal} createUser={createUser} />
    </div>
  );
};

{
  /* <Header open={openModal} />
        <Search handleSearch={handleSearch} />
        <ContentInfo searchText={searchText} /> */
}
