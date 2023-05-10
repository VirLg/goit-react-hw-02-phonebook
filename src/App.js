import './App.css';
import React from "react";

import {Section} from './components/Section/Section';
import {Contact} from './components/Contats/Contact';
import { nanoid } from 'nanoid';


class App extends React.Component{

    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
      }

    handleInputChangeName=evt=>{
        console.log(evt.target.name);
        const {target:{name,value}}=evt
        this.setState({
            [name]:value,
        })   
        
    }
   
   

    handleFormSubmitAddContact=evt=>{
        evt.preventDefault()

        this.setState((prevState)=>({
            contacts:[...prevState.contacts, {
                id: nanoid(), 
                name: evt.target.elements.name.value, 
                number: '459-12-56'
            }]

        }))

        // console.log(evt.target.elements.contacts.name.value);
    //    this.dataSubmit(this.state)
        
    // this.reset()
    }


 

    reset=()=>{
        this.setState({
       
            contacts: [],
            name: '',
            number: '',
            })
    }

  

  

    render(){
        return(

         <>
    <Section>
         <form onSubmit={this.handleFormSubmitAddContact}>
        <label>
            Ім'я<input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChangeName}
            />
        </label>

  <input type="submit"/>
             
    </form>
         </Section>


    <Section>
        

        <Contact
        contacts={this.state.contacts}


        />
      

    </Section>

         </>
        )
    }
}



export default App;











