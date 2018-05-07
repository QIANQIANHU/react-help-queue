import React from 'react';
import PropTypes from 'prop-types';
import picture from '../assets/images/street.jpeg';

function Ticket(props){
  return(
    <div>
      <style global jsx>{`
        div {
          background-color: #ADCFD8;
          margin: 10px;
          padding: 10px;
          border: 10px;
        }
      `}</style>
      <style jsx>{`
        .imgFrame {
          margin: 10px;
          width: 300px;
          height: auto;
          border:  10px;
        }`}</style>
      <h3>{props.location}</h3>
      <h3>{props.names}</h3>
      <p className="red-text"><em>{props.issue}</em></p>
      <img className="imgFrame" src={picture}/>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,

};

export default Ticket;
