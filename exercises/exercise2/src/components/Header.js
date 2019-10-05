import React from 'react'; 

export default function Header({temp=70, children}) { 
    let [r,g,b] = temp > 90 ? [237, 109, 95] : 
                temp > 80 ? [237, 166, 95] : 
                temp > 70 ? [213, 237, 95] : 
                temp > 60 ? [95, 237, 204] : [95, 237, 223]
         
    return (
        <div style={
            {
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-evenly',
            padding: '1%',
            backgroundColor: `rgba(${r}, ${g}, ${b}, 1.0)`,
            }
        }>   
            {children}
        </div>
    )
}