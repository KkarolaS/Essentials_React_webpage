import { CORE_CONCEPTS } from "../data-with-examples";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept
            key={1 + item.title}
            path={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
