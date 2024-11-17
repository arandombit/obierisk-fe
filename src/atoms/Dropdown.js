const Dropdown = ({ label, onChange, value, placeholder, options }) => (
  <div className='dropdown column'>
    <label>{ label }</label>
    <select onChange={onChange} value={value}>
      <option value=''>{ placeholder }</option>
      { options.map(option => <option key={option}>{ option }</option>) }
    </select>
  </div>
)

export default Dropdown
