import "./Container.css";

function Container({ leftContent, rightContent }) {
  return (
    <div className="container" style={{ height: "100%" }}>
      <div className="left">{leftContent}</div>
      <div className="right" style={{ display: "flex", height: "100%" }}>
        {rightContent}
      </div>
    </div>
  );
}

export default Container;
