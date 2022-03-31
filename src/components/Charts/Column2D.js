import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column2D = ({ children: data }) => {
  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular',
        xAxisName: 'Repos',
        xAxisNameFontSize: '1rem',
        yAxisName: 'Stars',
        yAxisNameFontSize: '1rem',
        theme: 'fusion',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column2D;
