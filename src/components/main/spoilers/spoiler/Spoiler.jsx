import "./spoiler.scss";

function Spoiler({ item }) {
  return (
    <div className="spoiler">
      <input
        type="checkbox" 
        className="spoiler__checkbox"
        id={item.id}
      />
      <label className="spoiler__heading" htmlFor={item.id}>
        {item.title}
      </label>
      <div className="spoiler__content">
      {item.text}
      </div>
    </div>
  );
}
export default Spoiler;
