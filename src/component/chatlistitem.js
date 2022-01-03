import React from 'react';
import './chatlistitem.css'

class chatlistitem {
    render() { 
        return (
           <div className='chatlistitem'>
            <img className='chatlistitem-avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt=""></img>
            <div className='chatlistitem-lines'>
                <div className='chatlistitem-line'>
                    <div className="chatlistitem-name">
                        Henrique
                    </div>
                    <div className='chatlistitem-date'>
                        19:00
                    </div>
                </div>
                <div className='chatlistitem-line'>
                    <div className='chatlistitem-lastMsg'>
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default chatlistitem;

