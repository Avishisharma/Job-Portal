import { Input } from "postcss";
import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="delhi"
          title="Delhi"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="gurugram"
          title="Gurugram"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="solan"
          title="Solan"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="pune"
          title="Pune"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
