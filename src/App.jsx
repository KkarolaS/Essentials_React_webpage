import CoreConcepts from "./compontents/CoreConcepts";
import Examples from "./compontents/Examples";
import Header from "./compontents/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
