import React from "react"
import Form from './Form/Form'
import CheckBox from './CheckBox/CheckBox'

export const FormList=function(){
} 


class ContactForm extends React.Component{


formSubmitCollector=(data)=>{
// console.log(data);
}

handleCheckBoxState=(dataCheckBox)=>{
console.log(dataCheckBox);
}

render(){
return(
<>
    <Form collectorSubmit={this.formSubmitCollector}/>
    <CheckBox conditionCheckBox={this.handleCheckBoxState}/>
</>





)
}

} 

export default ContactForm