import React, { useState } from "react";
import "./PageDropDown.css";

const PageDropDown = () => {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selected, setSelected] = useState([]);
  const allSelected = selected.length === pages.length;

  const toggleAll = () => {
    setSelected(allSelected ? [] : [...pages]);
  };

  const togglePage = page => {
    setSelected(prev =>
      prev.includes(page) ? prev.filter(p => p !== page) : [...prev, page]
    );
  };

  const handleDone = () => {
    if (selected.length === 0) {
      alert("No pages selected!");
    } else {
      alert(`Selected pages: ${selected.join(", ")}`);
    }
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-card">
        <label className="checkbox-row">
          <span>All pages</span>
          <input type="checkbox" checked={allSelected} onChange={toggleAll} />
        </label>

        <hr />

        {pages.map(page => (
          <label key={page} className="checkbox-row">
            <span>{page}</span>
            <input
              type="checkbox"
              checked={selected.includes(page)}
              onChange={() => togglePage(page)}
            />
          </label>
        ))}

        <hr />

        <button className="done-btn" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default PageDropDown;
