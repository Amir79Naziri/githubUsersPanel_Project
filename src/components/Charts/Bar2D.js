import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar2D = ({ children: data }) => {
  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked',
        xAxisName: 'Repos',
        xAxisNameFontSize: '1rem',
        yAxisName: 'Forks',
        yAxisNameFontSize: '1rem',
        theme: 'fusion',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Bar2D;
