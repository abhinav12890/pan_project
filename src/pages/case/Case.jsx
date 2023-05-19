import { cases } from "../../formSource";
import "./case.scss";

const Case = () => {
  const openPdf = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="case">
      <div className="title">
        <h4>Case Studies</h4>
      </div>
      <div
        className="cases"
      >
        {cases.map(({ id, title, imageUrl, description, link }) => (
          <div className="container" key={id}>
            <div className="head">{title}</div>
            <img src={imageUrl} alt="container" className="image" loading="lazy" />
            <div className="description">{description}</div>
            <span className="explore-button" onClick={() => openPdf(link)}>
              Explore
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case;
