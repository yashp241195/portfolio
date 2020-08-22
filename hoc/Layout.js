import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Layout = (props) => <Navbar>{props.children}</Navbar>;

export default Layout;