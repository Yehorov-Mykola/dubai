import "./button.scss";

function Button({children, submit, mailForm, header, width, onClick}) {
    return (
      <button  style={{width: width}} className= {`button ${mailForm ? 'button--mail-form' : ''} ${header ? 'button--header' : ''}`} type={submit ? 'submit' : 'button'} onClick={onClick}>
        {children}
      </button>
    );
  }
  export default Button;
  