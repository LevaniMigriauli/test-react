import "./Button.css";

const Button = () => {
  return (
    <div className="btn">
      <input className="btn-input" hidden type="file" id="file" />
      <label className="btn-label" htmlfor="file">
        UPLOAD
      </label>
    </div>
  );
};

export default Button;
