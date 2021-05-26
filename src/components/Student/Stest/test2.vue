<template>
  <div class="box">
    <div class="Echarts">
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  methods:{
    setInterval(){
      // 基于准备好的dom，初始化echarts实例
      option.series[0].pointer.show = false;
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
      option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
      myChart.setOption(option, true);

      var myChart = this.$echarts.init(document.getElementById('main'),'dark');

      // 指定图表的配置项和数据
      var option  = {
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#464646'
            }
          },
          axisLine: {

            lineStyle: {
              width: 40
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [{
            value: 20,
            name: 'Perfect',
            title: {
              offsetCenter: ['0%', '-30%']
            },
            detail: {
              offsetCenter: ['0%', '-20%']
            }
          },
            {
              value: 40,
              name: 'Good',
              title: {
                offsetCenter: ['0%', '0%']
              },
              detail: {
                offsetCenter: ['0%', '10%']
              }
            },
            {
              value: 60,
              name: 'Commonly',
              title: {
                offsetCenter: ['0%', '30%']
              },
              detail: {
                offsetCenter: ['0%', '40%']
              }
            }
          ],
          title: {
            fontSize: 14
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'auto',
            borderColor: 'auto',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.setInterval();
  }
}
</script>

<style>

</style>
