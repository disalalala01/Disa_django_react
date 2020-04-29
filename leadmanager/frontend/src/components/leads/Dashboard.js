import React,{ Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function Dashboard() { // eslint-disable-line react/prefer-stateless-function
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  )
}
