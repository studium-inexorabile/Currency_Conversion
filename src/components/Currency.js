import React from 'react'

const Currency = (props) => (
    <option value={props.code}>{props.currency}</option>
)

export default Currency