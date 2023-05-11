import './App.css';
import React from "react";
import { nanoid } from 'nanoid';

import {Section} from './components/Section/Section';
import {Contact} from './components/Contats/Contact';

import {Filter} from './components/FilterContact/FilterContact'

import Form from './components/Form/Form';

class App extends React.Component{

    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
      }



formSubmitHendler=(data)=>{
    const{name,number}=data
   this.setState((prevState)=>(
    {
    contacts:[...prevState.contacts, {
        id: nanoid(), 
        name: name, 
        number: number,
    }]
    })) 

    // this.filterContacts(data)

}      

handleSearchInput=evt=>{
        
        this.setState({
        filter:evt.target.value,
        })
     
            }


reset=()=>{
    this.setState({
        contacts: [],
        name: '',
        number: '',
        })
    }

  

  

render(){
const {filter}=this.state;

const visibleContacts=this.state.contacts.filter(el=>el.name.includes(this.state.filter))
        return(

         <>
          
    <Section>
    <Form onSubmit={this.formSubmitHendler}
    />
    </Section>



<Section>
    <Contact  contacts={visibleContacts}/>
</Section>

<Section>
 <Filter value={filter} onChange={this.handleSearchInput}/>        
    </Section>   
         </>
        )
    }
}



export default App;











