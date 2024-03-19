import React, { useState } from "react";
import "./Accordion.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="accordionSection">
      <div className="accordionTitle" onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? <RemoveIcon /> : <AddIcon />}</div>
      </div>
      {isActiveSection && (
        <div className="accordionContent">{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <div className="title">Our policies</div>
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
