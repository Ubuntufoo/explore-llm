export default function Input() {
  return (
    <div className="input-group input-group-lg w-50 text mx-auto mb-3">
      <input type="text" className="form-control" placeholder="Brainstorm an idea" aria-label="Brainstorm an idea" aria-describedby="button-addon2"/>
        <button className="btn btn-dark" type="button" id="button-addon2">Go</button>
    </div>
  );
}