import { Select } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";

// Component to select the designated concrete type
const ConcreteSelector: React.FC = () => {
  // State to store the selected concrete type
  const [concreteType, setConcreteType] = useState("");
  // State to store the list of concrete types
  const [concreteTypeList, setConcreteTypeList] = useState<any[]>([]);

  // Use effect to get the list of concrete types from the API
  useEffect(() => {
    axios
      .get(
        `https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretepurpose`
      )
      .then((res) => {
        setConcreteTypeList(res.data);
      });
  }, []);

  // Function to handle the change in the selected concrete type
  const handleChange = (event: any, data: any) => {
    let typeOfConcrete = event.target.value as string;
    setConcreteType(typeOfConcrete);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, maxWidth: 240 }}>
        <FormControl fullWidth>
          {/* Label for the select input */}
          <InputLabel id="demo-simple-select-label">
            Designated Concrete Type
          </InputLabel>
          {/* Select input to choose the designated concrete type */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={concreteType}
            label="Select a designated concerete type"
            onChange={(e, d) => handleChange(e, d)}
          >
            {/* Looping through the concrete type list to render the options */}
            {concreteTypeList.map((res, index) => {
              return (
                <MenuItem key={index} value={res.DesignatedConcrete}>
                  {res.DesignatedConcrete}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      {/* Rendering the BarChart component if a concrete type is selected */}
      {concreteType !== "" ? <BarChart concreteType={concreteType} /> : null}
    </div>
  );
};

export default ConcreteSelector;
