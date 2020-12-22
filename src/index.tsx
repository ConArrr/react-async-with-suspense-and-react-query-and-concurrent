import React from 'react'
import { unstable_createRoot as createRoot } from 'react-dom'
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import App from './App'
import reportWebVitals from './reportWebVitals'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const queryConfig: ReactQueryConfig = {
  shared: {
    suspense: true,
  },
  queries: {
    retry: 0,
    staleTime: 60 * 1000,
  },
}

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <ReactQueryConfigProvider config={queryConfig}>
    <App />
    {process.env.NODE_ENV === 'development' && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
  </ReactQueryConfigProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
