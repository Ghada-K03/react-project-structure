function Button({ text, onClick, variant, disabled }) {
  return (
    <button onClick={onClick} className={`btn ${variant}`} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
