

export const Contact=function({contacts}){

return(<ul>{contacts.map(({id,name})=>
    
    <li key={id}>
        <span >{name}</span>
         
    </li>
    )
    }
 
</ul>)
} 







