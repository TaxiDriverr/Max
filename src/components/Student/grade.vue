<template>
  <div class="box">
    <div class="Echarts">
      <!-- 控件1 -->
      <div id="main1" style="width: 600px;height:400px;"></div>
      <!-- 控件2 -->
      <div id="main2" style="width: 800px;height:600px;"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Echarts',
  methods:{
    myEcharts1(){
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = this.$echarts.init(document.getElementById('main1'));

      // 指定图表的配置项和数据
      var option1 = {
        title: {
          text: '我的成绩'
        },
        tooltip: {},
        legend: {
          data:['成绩']
        },
        xAxis: {
          data: ["第一次","第二次","第三次","第四次","第五次","第六次"]
        },
        yAxis: {},
        series: [{
          name: '成绩',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option1);
    },
    myEcharts2(){
      var myChart2 = this.$echarts.init(document.getElementById('main2'));
      var option2 = {
        series: [{
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 10,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -60,
            formatter: function (value) {
              if (value === 0.875) {
                return '优';
              }
              else if (value === 0.625) {
                return '中';
              }
              else if (value === 0.375) {
                return '良';
              }
              else if (value === 0.125) {
                return '差';
              }
            }
          },
          title: {
            offsetCenter: [0, '-20%'],
            fontSize: 30
          },
          detail: {
            fontSize: 50,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + '分';
            },
            color: 'auto'
          },
          data: [{
            value: 0.70,
            name: '成绩评定'
          }]
        }],
      }
      myChart2.setOption(option2);
    }
  },
  mounted() {
    this.myEcharts1();
    this.myEcharts2();
  }
}
</script>

<style>
.box{
  height: 900px;
  width: 100%;
  background-color: rgb(233, 233, 233);
  margin: 10px;
}

.Echarts{
  padding-top: 100px;

  margin-left: 200px;
}
.main{
  margin-top: 100px;
}

</style>
