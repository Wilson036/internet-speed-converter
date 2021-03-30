import React from 'react';

function CardFooter({ inputValue }) {
  let styleObj = {};
  let title = '';
  if (!inputValue) {
    styleObj = {
      backgroundColor: '#d3d8e2',
    };
    title = '---';
  } else if (inputValue < 15) {
    styleObj = {
      backgroundColor: '#ee362d',
    };
    title = 'SLOW';
  } else if (inputValue < 40) {
    styleObj = {
      backgroundColor: '#1b82f1',
    };
    title = 'GOOD';
  } else {
    styleObj = {
      backgroundColor: '#13d569',
    };
    title = 'FAST';
  }
  return (
    <div className="card-footer" style={styleObj}>
      {title}
    </div>
  );
}

export default CardFooter;
