import React from "react";

export const InputDropDown=function({inputValue,inputValueChange}){
    return(
        <input
    type="text"
    name="name"
    value={inputValue}
    onChange={inputValueChange}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    /> 
    )
}