import "./button.scss";

function Button({children, submit, mailForm, onClick}) {
    return (
      <button className= {`button ${mailForm ? 'button--mail-form' : ''}`} type={submit ? 'submit' : 'button'} onClick={onClick}>
        {children}
      </button>
    );
  }
  export default Button;
  