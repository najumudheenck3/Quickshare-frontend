import React, { useState } from "react";
import Chart from "react-apexcharts";

const UserDetailsChart = ({userGraphCategories,userGraphData}) => {
    console.log(userGraphCategories,'userGraphCategoriesuserGraphCategories');
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: userGraphCategories?userGraphCategories:"",
      },
    },
    series: [
      {
        name: "series-1",
        data: userGraphData?userGraphData:"",
      },
    ],
  });
  return (
    <div className="flex flex-col w-full  content-center justify-center p-5 gap-y-5">
      <h1 className="text-center text-2xl font-bold">User Details </h1>
      <div className="mx-auto max-md:hidden">
      <Chart 
        options={state.options}
        series={state.series}
        type="bar"
        width="600"
      />
      </div>
      <div className="mx-auto md:hidden">
      <Chart 
        options={state.options}
        series={state.series}
        type="bar"
        width="300"
      />
      </div>
    </div>
  );
};

export default UserDetailsChart;
