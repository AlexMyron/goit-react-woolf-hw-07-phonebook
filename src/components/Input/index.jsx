import css from './Input.module.css';

const Input = ({
  id,
  label,
  handleClick,
  disabled,
  isShowButton,
  ...props
}) => {
  return (
    <div className={css.control}>
      <label htmlFor={id}>{label}</label>
      <div className={css['input-wrapper']}>
        <input id={id} {...props} disabled={disabled} />
        {isShowButton && (
          <button
            className={css.button}
            onClick={handleClick}
            disabled={disabled}
          >
            x
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
