import React from "react";
import PropTypes from 'prop-types';

import {ControlApp} from './controls/Controls'
import {InputDropDown} from './DropDown/DropDown'

class PhoneBook extends React.Component{
    static defaultProps = {
    name:'asdasda',
    }
    
    static propTyps = {
    contacts:PropTypes.arrayOf(PropTypes.number).isRequired,
    name:PropTypes.string.isRequired,
    }
    
    state = {
            contacts: [],
            name: '',
          }
    
    hadleClick=()=>{
        this.setState((prevState)=>{
    
            return{
               id: prevState+1
            }
        })}
    
     
    
    handleValueInpu=evt=>{
    console.log(evt.target.value);
    this.setState({
        name:evt.target.value
    })

   
    }
    
        render(){
    return(
        <>
        <InputDropDown
        inputValue={this.state.name}
        inputValueChange={this.handleValueInpu}
        />

        <ControlApp onClick={this.hadleClick}
        />
        </>
    
    
    )
        }
        
    }


export default PhoneBook;





    

