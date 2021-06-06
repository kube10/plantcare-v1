const SelectField = ({ id, name, required, options, value, onChange }) => {
  const optionsItems = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    );
  });
  return (
    <>
      <label>
        {name}
        {required && <span className="required"> *</span>}
      </label>
      <select
        id={id}
        className="u-full-width"
        required={required}
        onChange={onChange}
        defaultValue={value}
      >
        {optionsItems}
      </select>
    </>
  );
};

export default SelectField;
