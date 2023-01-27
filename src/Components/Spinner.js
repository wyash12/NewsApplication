import React, { Component } from 'react'
import loading from '../giphy.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Page is loading" />
      </div>
    )
  }
}

export default Spinner