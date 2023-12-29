import React from 'react';

const Container = (props) => {
  return (
    <section className={props}>
        <div className='container-xxl'>
            {props.children}
        </div>
    </section>
  );
};

export default Container;