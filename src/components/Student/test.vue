<template>
<el-card class="box-card">
  <div class="header">
    我的测验
  </div>
  <div class="btn_box">
  
  
  <el-button type="primary" class="btn">全部</el-button>
  <el-button class="btn">去测验</el-button>
  <el-button class="btn">重新答题</el-button>
  <el-button class="btn">查看结果</el-button>
  <el-button class="btn">已截止</el-button>
  
  

  </div>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="测验名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stime"
        label="发布时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="etime"
        label="截止时间">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="得分/总分"
        width="180">
      </el-table-column>
      <el-table-column
        prop="num"
        label="测验次数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="btn"
        label="操作"
        width="180">
      </el-table-column>
    </el-table>
 </div>
  
  </div>
</el-card>
 
  
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          btn: <el-button class="btn">去测验</el-button>,
        },
        {
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          btn: <el-button class="btn">去测验</el-button>,
        },
        {
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          btn: <el-button class="btn">去测验</el-button>,
        },
        {
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          btn: <el-button class="btn" >去测验</el-button>,
        },
      ],
    };
  },
};
</script>


<style>
.header {
  text-align: left;
  color: rgb(105, 102, 102);
}
.btn {
  /* font-size: 12px;
  height: 20px;
  line-height: 15px;
  text-align: center;
  margin-bottom: 15px; */
  /* width: 66px; */
    height: 38px;
    vertical-align:middle;
    text-align: center;
}

.btn_box {
  margin: 20px 0;
  width: 500px;
  padding-left: 10px;
}
.box-card{
  background-color: rgb(233, 233, 233);
  margin: 10px;
  height: 800px;
}
</style>
  
