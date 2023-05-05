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

handleNameChange=evt=>{
    this.setState({name:evt.target.value})

}

render(){
return(
<div>
    <form action="">
        <label >
            Ім'я<input type="text" name="Name" value={this.state.name}/>
        </label>

        <label >
            Номер<input type="text" name="NumberPhone" />
        </label>

<input type="submit"  />

    </form>
</div>





)
}

} 

export default Form