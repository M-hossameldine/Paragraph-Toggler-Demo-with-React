import React from 'react';

const DemoOutput = (props) => {
  console.log('Demo entered');
  return (
    <>
      <p className='paragraph'>{props.show && 'This is new paragraph'}</p>
    </>
  );
};

export default React.memo(DemoOutput);
