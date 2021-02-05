import "./Button.css";
const Button = ({ imp, text, link }) => {
  return (
    // eslint-disable-next-line eqeqeq
    <div className={`button ${imp == "secondary" ? "button__white" : ""}`}>
      <a href={link}>{text}</a>
    </div>
  );
};
export default Button;
