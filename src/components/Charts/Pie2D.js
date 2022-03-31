import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie2D = ({ children: data }) => {
  const chartConfigs = {
    type: 'pie2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Used Languages',
        use3DLighting: '0',
        showPercentValues: '1',
        decimals: '1',
        useDataPlotColorForLabels: '1',
        theme: 'fusion',
        pieRadius: '28%',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie2D;
