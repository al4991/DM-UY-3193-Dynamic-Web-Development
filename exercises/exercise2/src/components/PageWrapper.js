import React from 'react'; 

export default function PageWrapper({temp=70, children}) { 
    let [r,g,b] = temp > 90 ? [237, 109, 95] : 
                temp > 80 ? [237, 166, 95] : 
                temp > 70 ? [213, 237, 95] : 
                temp > 60 ? [95, 237, 204] : [95, 237, 223]
            
    return (
    <div style={
        {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.3)`,
        height: '100%', 
        width: '100%',
        minHeight: '100vh', 
        minWidth: '100vw',
        paddingTop: '3%', 
        textAlign: 'center', 
        }
    }> 
        {children}
    </div>
    );

}