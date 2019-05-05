import React, { Fragment } from 'react';
import Search from '../search';
import Jumbotron from '../../Jumbotron/jumbotron';

const homeRoute = () => {
    return (
      <Fragment>
            <Jumbotron/>
            <Search/>
      </Fragment>
    )
}

export default homeRoute