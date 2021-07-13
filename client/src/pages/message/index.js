import React from 'react'
import LeftSide from '../../components/message/LeftSide'

const Message = () => {
    return (
      <div className="message d-flex">
        <div className="col-md-4 px-0" style={{borderRight: '1px solid #ddd'}}>
          <LeftSide />
        </div>

        <div className="col-md-8 px-0">
          <div className="d-flex justify-content-center align-items-center flex-column h-100">
            <i className="fa fa-bolt color-c1" style={{fontSize: '5rem'}} />  
            <h4>Messenger</h4>
          </div>
        </div>
      </div>
    );
}

export default Message
