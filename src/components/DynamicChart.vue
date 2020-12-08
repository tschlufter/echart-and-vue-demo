<template>
  <chart :options="chartOptions"></chart>
</template>

<script>


let dates = [];
const now = new Date();
const value = Math.random() * 1000;

export default {
  name: 'dynamicChart',
  data: () => {
    return {
      chartOptions: {
        title: {
          text: 'Randomly generated values'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            const date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: 'some data',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: dates
          }
        ]
      }
    };
  },
  mounted: function ()  {
    dates = this.initialData();
  },
  methods: {
    getData() {
      return dates;
    },
    initialData() {
      const data = [];
      const oneDay = 24 * 3600 * 1000;

      for (let i = 0; i < 100; i++) {
        data.push(this.randomData(oneDay * i))
        now.setDate(now.getDate() + 1)
      }
      this.updateData(oneDay, value)
      this.chartOptions.series = [
        {
          name: 'some data',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }
      ]

      return data
    },
    randomData() {
      const newValue = value + Math.random() * 200 - 100;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(newValue)
        ]
      };
    },
    updateData() {
      setInterval((oneDay) => {
            for (let i = 0; i < 2; i++) {
              dates.shift();
              dates.push(this.randomData( oneDay, value));
              now.setDate(now.getDate() + 1)
            }
          }, 1000
      )
    }
  }
}
</script>

<style>
</style>
