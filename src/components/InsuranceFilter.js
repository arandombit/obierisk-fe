import Dropdown from 'atoms/Dropdown'

const InsuranceFilter = props => (
  <div className='center'>
    <Dropdown
      label='Coverage'
      placeholder='Select Coverage'
      options={props.policies}
      onChange={e => props.setPolicy(e.target.value)}
      value={props.policy}
    />
    <Dropdown
      label='State'
      placeholder='Select State'
      options={props.states}
      onChange={e => props.setState(e.target.value)}
      value={props.state}
    />
  </div>
)

export default InsuranceFilter
