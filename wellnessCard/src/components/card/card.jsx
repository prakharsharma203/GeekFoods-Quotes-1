import "./card.css"

export const Card = ({ detail}) => {
    return (
      <div className="card">
        <p>{detail.content}</p>
        <span>{detail.author}</span>
      </div>
    );
  };