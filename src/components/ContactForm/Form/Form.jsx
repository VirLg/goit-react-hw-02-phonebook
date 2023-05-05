import React from "react";

class Form extends React.Component{

    state = {
        id:'',
        contacts: [],
        name: '',
        number: '',
        }

    handleInputChange=evt=>{
        const {target:{name,value}}=evt
        this.setState({
            
            [name]:value,
        })   
    }

    handleFormSubmit=evt=>{
        evt.preventDefault()
      
        this.props.collectorSubmit(this.state)
        this.reset()
    }

    reset=()=>{
        this.setState({
            id:'',
            contacts: [],
            name: '',
            number: '',
            })
    }

    handleCheckBoxState(){
console.log(this.props.handleCheckBoxState);
        }   

    render(){
        return(

         

<form onSubmit={this.handleFormSubmit}>
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

<input type="submit"  disabled={this.handleCheckBoxState}/>

    </form>


        )
    }
}

export default Form