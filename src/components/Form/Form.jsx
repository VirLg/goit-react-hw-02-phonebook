import React from "react"

export const FormList=function(){
} 




class Form extends React.Component{

state = {
    id:'',
    contacts: [],
    name: '',
    number: '',
    }

handleInputChange=evt=>{
    this.setState({
        [evt.target.name]:evt.target.value
    })
   
}

render(){
return(
<div>
    <form action="">
        <label>
            Ім'я<input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            />
        </label>

        <label>
            Номер<input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
            />  
        </label>

<input type="submit"  />

    </form>
</div>





)
}

} 

export default Form