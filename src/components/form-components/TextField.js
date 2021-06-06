const TextField = ({ id, type, name, value, required, onChange }) => {
  return (
    <>
      <label>
        {name}
        {required && <span className="required"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        onChange={onChange}
        className="u-full-width"
        type={type}
        placeholder={name}
        defaultValue={value}
      />
    </>
  );
};

export default TextField;
