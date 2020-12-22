import React, { FC } from 'react'
import Members from 'containers/pages/Members'
import './App.css'

const App: FC = () => (
  <div className="container">
    <Members enablePrefetch={false} />
  </div>
)

export default App
