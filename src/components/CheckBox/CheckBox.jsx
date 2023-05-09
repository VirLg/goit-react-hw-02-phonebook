import React from "react"

class CheckBox extends React.Component{
    state={
        policySave:false,
    }
changeCheckBox=evt=>{
    // console.log(evt.target.checked);
    this.setState({policySave:evt.target.checkbox})
}



    render(){
    return(
<label>
    <input type="checkbox" name="policySave" checked={this.state.policySave} onChange={this.changeCheckBox}/> Згоден зберегти контакт 
</label>


    )
}
}

export default CheckBox