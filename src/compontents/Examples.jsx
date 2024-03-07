import TabButton from "./TabButton";
import { EXAMPLES } from "../data-with-examples";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [tabContent, setTabContent] = useState();

  const handleClick = (selectedBtn) => {
    setTabContent(selectedBtn);
  };

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              handleTabBtn={() => handleClick("components")}
              isSelected={tabContent === "components"}
            >
              Components
            </TabButton>
            <TabButton
              handleTabBtn={() => handleClick("jsx")}
              isSelected={tabContent === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              handleTabBtn={() => handleClick("props")}
              isSelected={tabContent === "props"}
            >
              Props
            </TabButton>
            <TabButton
              handleTabBtn={() => handleClick("state")}
              isSelected={tabContent === "state"}
            >
              State
            </TabButton>
          </>
        }
      >
        {!tabContent ? (
          <p>Please select topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
};

export default Examples;
