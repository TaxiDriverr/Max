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
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  // 指定图表的配置项和数据
		  var option = {
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
		  myChart.setOption(option);
		  }
  },
  mounted() {
  	this.myEcharts();
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
