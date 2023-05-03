import "./footerSpoiler.scss";

function FooterSpoiler({ item }) {
  return (
    <div className="footer-spoiler">
      <input
        type="checkbox" 
        className="footer-spoiler__checkbox"
        id={item.id}
      />
      <label className="footer-spoiler__heading" htmlFor={item.id}>
        {item.title}
      </label>
      <div className="footer-spoiler__content">
      {item.text}
      </div>
    </div>
  );
}
export default FooterSpoiler;
