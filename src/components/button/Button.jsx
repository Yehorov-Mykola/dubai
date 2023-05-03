import "./button.scss";

function Button({children, submit, mailForm, header, onClick}) {
    return (
      <button className= {`button ${mailForm ? 'button--mail-form' : ''} ${header ? 'button--header' : ''}`} type={submit ? 'submit' : 'button'} onClick={onClick}>
        {children}
      </button>
    );
  }
  export default Button;
  