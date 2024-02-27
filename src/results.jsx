import './results.css';

const results = ({ results }) => {
    return results.map(amiibo => (
    <span className="result" key={amiibo.head + amiibo.tail}>
      <h4>{amiibo.name}</h4>
      <img
        width="100"
        alt={amiibo.character}
        src={amiibo.image}
      />
    </span>
  ))
}

export default results;