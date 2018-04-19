import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return(
    <div>
      <style global jsx>{`
        div {
          background-color: #ADCFD8;
        }
      `}</style>
      <h3>{props.location}</h3>
      <h3>{props.names}</h3>
      <p className="red-text"><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string

};

export default Ticket;
