import React, { useState } from "react";
import SelectIcon from "./select_icon";

function PillButton({ onSelect, isActive, children }) {
  //   const [isSelected, setisSelected] = useState(false);

  return (
    <button
      className={isActive ? "pill_button_selected" : "pill_button"}
      onClick={() => {
        // setisSelected(!isSelected);
        onSelect();
      }}
    >
      <div className="pill_button_content">
        {isActive ? <SelectIcon /> : ""}
        {children}
      </div>
    </button>
  );
}

export default PillButton;
