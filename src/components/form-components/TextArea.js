const TextArea = ({ id, name, required, value, onChange }) => {
  return (
    <>
      <label>
        {name}
        {required && <span className="required"> *</span>}
      </label>
      <textarea
        id={id}
        onChange={onChange}
        required={required}
        className="u-full-width"
        placeholder="Type here..."
        defaultValue={value}
      ></textarea>
    </>
  );
};

export default TextArea;
