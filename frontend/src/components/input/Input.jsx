export default function Input() {
  return (
    <div className="input-group input-group-lg w-50 text mx-auto my-5">
      <input type="text" className="form-control text-center border border-5 border-black " placeholder="Brainstorm an idea" aria-label="Brainstorm an idea" aria-describedby="button-addon2" />
      <button className="btn btn-dark" type="button" id="button-addon2">Go</button>
      <input type="text" className="form-control text-center border border-5 border-black fst-italic fs-6" placeholder="Optional: Preferences" aria-label="Server"></input>

    </div>
  );
}