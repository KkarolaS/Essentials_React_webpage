const CoreConcept = ({ path, title, description }) => {
  return (
    <li>
      <img src={path} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
