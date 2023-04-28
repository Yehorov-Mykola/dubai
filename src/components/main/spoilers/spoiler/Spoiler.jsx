import "./spoiler.scss";

function Spoiler({ item }) {
  return (
    <div className="spoiler">
      <input
        type="checkbox" 
        class="spoiler__checkbox"
        id={item.id}
      />
      <label class="spoiler__heading" for={item.id}>
        {item.title}
      </label>
      <div class="spoiler__content">
      {item.text}
      </div>
    </div>
  );
}
export default Spoiler;
