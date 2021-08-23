import PropTypes from "prop-types"

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input value={value} onChange={onChange} name="filter" type="text"></input>
  </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter
