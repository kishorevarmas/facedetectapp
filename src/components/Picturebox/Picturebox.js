import React from 'react';



const Picturebox = () => {
    return (
        <div className= 'f3'>
            <p>
                {'THis Magic Brain will auto detect the faces from picture.'}
            </p>

            <div className = 'center'>
                <input className = 'f4 pa2 w-70 center' type = 'tex'/>
                <button className = 'w-30 grow f4 link ph3 pv2 dib whit bg-light' />
            </div>
        </div>
        
    );
}

export default Picturebox;