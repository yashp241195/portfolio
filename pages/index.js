import React from 'react'
import Layout from '../hoc/Layout'

import Overview from '../components/Overview/Overview'
import Context from '../hoc/Context'


export default function Index() {
  
  return (
    <div> 
      <Context>
        <Layout>
          <Overview></Overview>
        </Layout>
      </Context>
    </div>
  )
}

