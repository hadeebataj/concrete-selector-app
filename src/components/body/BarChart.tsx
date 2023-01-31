import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

/*
  React component that displays a bar chart with the minimum cement content data for a specific designated concrete type. 
  It makes an API call to `https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretedetails`
  and passes the designated concrete type as a query parameter.
  The chart is generated using the `react-chartjs-2` library.
*/

// An interface to define the props being passed to the component
interface ConcreteParams {
  concreteType: Object;
}

const BarChart: React.FC<ConcreteParams> = ({ concreteType }) => {
  const ref = useRef();
  const [cementContent, setCementContent] = useState<any>({});
  const labels = Array.from(cementContent).map(
    (data: { label: string }) => data.label
  );

  // A useEffect hook to call the API and fetch the minimum cement content data for the designated concrete type
  useEffect(() => {
    axios
      .get(
        `https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretedetails?designatedConcrete=${concreteType}`
      )
      .then((res) => {
        setCementContent(res.data.cementContents); // Set the cement content data in the state
        console.log(res.data.cementContents);
      });
  }, [concreteType]);

  // The chart data and options
  const chartData = {
    labels,
    datasets: [
      {
        label: "Min. cement content (kg/m³)", // Label for the data
        data: Array.from(cementContent).map(
          (data: { value: number }) => data.value // Extract the value from the cementContent object
        ),
        backgroundColor: "#3f51b5",
      },
    ],
  };

  const options = {
    indexAxis: "x" as const, // Specifies the x-axis as the index axis
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true, // Makes the chart responsive
    plugins: {
      legend: {
        position: "bottom" as const, // Position the legend at the bottom
      },
      title: {
        display: true, // Display the chart title
        text: `Designated Concrete Composition for ${concreteType}`, // The chart title, including the designated concrete type as a variable
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "700px", margin: "20px 0px" }}>
      {/* Render the Bar component, from chartjs librray by providing data retrieved from API and options to style the chart */}
      <Bar ref={ref} data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
