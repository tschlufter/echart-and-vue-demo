<template>
  <chart :options="chartOptionsBar"></chart>

</template>

<script>
export default {
  name: 'simpleChart',
  data: () => ({
    chartOptionsBar: {
      color: ["#003366", "#006699", "#4cabce", "#820c15", "#e5323e"],
      title: {
        text: "Food Orders",
        left: "center",
      },
      xAxis: {
        data: ['Pizza', 'Döner', 'Sushi', 'Burgers']
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        position: "bottom",
        top: "30px"
      },
      tooltip: {
        show: true
      },
      series: [
        {
          name: "monday",
          type: 'bar',
          data: [63, 75, 24, 92]
        },
        {
          name: "tuesday",
          type: 'bar',
          data: [13, 45, 69, 20]
        },
        {
          name: "wednesday",
          type: 'bar',
          data: [31, 34, 9, 40]
        },
        {
          name: "thursday",
          type: 'bar',
          data: [25, 28, 40, 20]
        },
        {
          name: "friday",
          type: 'bar',
          data: [5, 10, 8, 18],
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          }
        }
      ]
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
