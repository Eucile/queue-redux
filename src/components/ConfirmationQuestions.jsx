import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestion(props) {
  return(
    <div>
      <p>Have u powdered ur grundle?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestion;
