import "./button.scss";

function Button({children, submit, mailForm}) {
    return (
      <button className= {`button ${mailForm ? 'button--mail-form' : ''}`} type={submit ? 'submit' : 'button'}>
        {children}
      </button>
    );
  }
  export default Button;
  