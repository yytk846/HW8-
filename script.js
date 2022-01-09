Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: '2014-2019台灣、日本、越南入境旅客人數比較圖'
  },
  subtitle: {
    text: '資料來源:UNWTO'
  },
  xAxis: {
    categories: ['2014', '2015', '2016', '2017', '2018', '2019']
  },
  yAxis: {
    title: {
      text: '入境人數(百萬)'
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: [{
    name: '台灣',
    marker: {
      symbol: 'square'
    },
    data: [9.9,10.4,10.7,10.7,11.1,11.9]
  }, 
    { name: '日本',
    marker: {
      symbol: 'diamond'
    },
    data: [13.4, 19.7, 24, 28.7,31.2,31.9]},
{ name: '越南',
    marker: {
      symbol: 'diamond'
    },
    data: [8, 7.9,	10,	12.9,	15.5,	18
]}
          
      
          
          ]
     
     
});