import React from 'react';
function MyComponent(props){
    console.log(props);
    const sum= props.num1+props.num2;
    const sub= props.num1-props.num2;
    const mult= props.num1*props.num2;
    const div= props.num1/props.num2;
return <div>
      The sum is {sum}<br/>
      The difference is {sub}<br/>
      The product is {mult}<br/>
      The quotient is {div}<br/>
    </div>}
export default MyComponent;