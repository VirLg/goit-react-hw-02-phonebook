import React from "react";
import PropTypes from 'prop-types';

import {ControlApp} from './controls/Controls'
import {InputDropDown} from './DropDown/DropDown'

class PhoneBook extends React.Component{
static defaultProps = {

}

static propTyps = {
contacts:PropTypes.arrayOf(PropTypes.number).isRequired,
name:PropTypes.string.isRequired,
}

state = {
        contacts: [],
        name: ''
      }

hadleClick=()=>{
    this.setState((prevState)=>{

        return{
           id: prevState+1
        }
    })}

inputValue=(evt)=>{
this.setState({
    name:evt,
})
}   

    



    render(){
return(
    <>
    <InputDropDown inputValue={this.inputValue}/>
    <ControlApp onClick={this.hadleClick}/>
    </>

//     <div>
//     <input
// type="text"
// name="name"
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
// />
// <button type="button" onClick={this.hadleClick}>Add Contact</button>
// </div>
)
    }
}

export default PhoneBook;





    

