import PillButton from "./components/pill_button";
import "./Pill.css";
import { useState } from "react";
import Categories from "./components/categories";

function App({ PillsTextList }) {
  const [selectedPills, setSelectedPills] = useState(["Top Hashtags"]);

  const SelectOrUnselectPills = (item) => {
    const selectedItems = [...selectedPills];

    if (isSelected(item)) {
      if (selectedPills.length == 1) return;
      const filter = selectedItems.filter((value) => value !== item);
      setSelectedPills(filter);
      return;
    }

    selectedItems.push(item);

    setSelectedPills(selectedItems);
  };

  const isSelected = (item) => selectedPills.includes(item);

  console.log(selectedPills);

  return (
    <div className="pill_container">
      <div className="pill_buttons">
        {PillsTextList.map((text, index) => (
          <PillButton
            key={index}
            isActive={isSelected(text)}
            onSelect={() => {
              SelectOrUnselectPills(text);
            }}
          >
            {text}
          </PillButton>
        ))}
      </div>

      <div className="dynamic_contents">
        {selectedPills.length === 0 ? "No data yet" : ""}
        {selectedPills.map((item) => (
          <Categories category={item} />
        ))}
      </div>
    </div>
  );
}

// Remove select all
// User cannot deselect all at least one selection should be selected

export default App;
