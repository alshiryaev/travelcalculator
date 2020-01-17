 import React, { Fragment } from 'react';
 import {Button} from './Button';

 const Sandbox = () => <Fragment>
   <Button onClick={() => {console.log('!!!')}}>Button text :)</Button>
   <Button disabled onClick={() => {console.log('!!!')}}>Button text :)</Button>
 </Fragment>

 export default Sandbox;