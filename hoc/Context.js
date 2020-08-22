import React from 'react'
import SharedWrapper from '../components/Shared/SharedWrapper'

const Context = (props) => <SharedWrapper>{props.children}</SharedWrapper>;

export default Context;