import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ children: data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Languages',
        use3DLighting: '0',
        decimals: '1',
        useDataPlotColorForLabels: '1',
        theme: 'fusion',
        doughnutRadius: '70%',
        pieRadius: '28%',
        showPercentValues: '0',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
