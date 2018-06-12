import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{overflow: 'scroll', border:'solid 0px navy', height: '500px'}}>
      { props.children }
    </div>
  )
}

export default Scroll;
