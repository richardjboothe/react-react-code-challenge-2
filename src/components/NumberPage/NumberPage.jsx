import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  number: PropTypes.number,
};

function NumberPage({ number }) {
  return (
    <React.Fragment>
      <div className="number__wrapper">
	      <div className="number__result-title">
		      <h1>The Number is:</h1>
	      </div>
        <div className="number__result">
	        <p>{number}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

NumberPage.propTypes = propTypes;
export default NumberPage;