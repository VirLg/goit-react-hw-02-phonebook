

export const Contact=function({contacts}){
console.log(contacts);


return(<ul>{contacts.map(({id,name,number})=>
    
    <li key={id}>
        <span >{name}</span> 
        <span>{number}</span>
    </li>
    )
    }
 
</ul>)
} 







