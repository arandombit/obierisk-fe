import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import 'App.scss'

import { getCarriers } from 'actions/carriers'

import Dropdown from 'atoms/Dropdown'

const states = ['IL', 'IN', 'MI']
const policies = ['both', 'auto', 'fire']

const App = ({ carriers, ...props }) => {
  const [state, setState] = useState('')
  const [policy, setPolicy] = useState('')
  useEffect(() => {
    if (state && policy) { props.getCarriers({ state, policy }) }
  }, [state, policy])
  return (
    <div className='center full column'>
      <h1>Insurance Picker</h1>
      <div className='container'>
        <div className='center'>
          <Dropdown
            label='Coverage'
            placeholder='Select Coverage'
            options={policies}
            onChange={e => setPolicy(e.target.value)}
            value={policy}
          />
          <Dropdown
            label='State'
            placeholder='Select State'
            options={states}
            onChange={e => setState(e.target.value)}
            value={state}
          />
        </div>
        { carriers.state.map(c => <div key={c} className='carrier center'>{ c }</div>) }
        { carriers.status === 'success' && !carriers.state.length && 'No Results'}
      </div>
    </div>
  )
}

export default connect(({ carriers }) => ({ carriers }), {
  getCarriers
})(App)
