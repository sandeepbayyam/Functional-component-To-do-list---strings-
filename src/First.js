import React from 'react';
function First (){
  var [x,setX] = React.useState(100);
  var [y,setY] = React.useState(200);
  const incx = ()=>{
    setX(x+1);
  }
  const incy = ()=>{
    setY(y+1);
  }
  return(
    <div className="betterview">
      <h2>First functional component( 2nd Child)</h2>
      <h3>X:{x}</h3>
      <h3>Y:{y}</h3>
      <button onClick={incx}>INC-X</button> &nbsp;&nbsp;&nbsp;
      <button onClick={incy}>INC-Y</button>
    </div>
  )
}
export default First;