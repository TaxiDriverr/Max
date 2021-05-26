
<template>
  <div class="main_box">
    <div class="main_header">
      <span>我的测验</span>
    </div>
    <div class="main_btn">
      <el-button type="primary" class="btn">全部</el-button>
      <el-button class="btn">去测验</el-button>
      <el-button class="btn">查看结果</el-button>
      <el-button class="btn">已截止</el-button>

    </div>

    <div class="table" >
      <el-table
        :data="tableData"
        style="width: 100%;padding-left:35px;text-align:center ">
        <el-table-column

          prop="index"
          label="序号"
          width="180"
          class="com" style="padding-left:100px">
        </el-table-column>
        <el-table-column

          prop="name"
          label="测验名称"
          width="130">
        </el-table-column>
        <el-table-column
          prop="stime"
          label="发布时间"
          width="130">
        </el-table-column>
        <el-table-column
          prop="etime"
          label="截止时间"
          width="130">
        </el-table-column>
        <el-table-column
          prop="grade"
          label="得分/总分"
          width="130">
        </el-table-column>
        <el-table-column
          prop="num"
          label="测验次数"
          width="130">
        </el-table-column>
        <el-table-column
          prop="btn"
          label="操作"
          width="130px">
          <template slot-scope="scope">
            <el-button plain @click="toTest(scope.row.index)">去测验</el-button>
            　　　　　　
            　　　　</template>



        </el-table-column>



      </el-table>
      <div class="block">
        <span class="demonstration">---</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>

    </div>

    <!-- </div> -->



  </div>

</template>

<script>
export default {
  data() {
    return {

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      tableData: [
        {
          index:'1',
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          btn:<el-button type="primary" class="test1" v-f>应用入口</el-button>
        },
        {
          index:'2',
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          // btn: <el-button class="btn">去测验</el-button>,
        },
        {
          index:'3',
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          // btn: <el-button class="btn">去测验</el-button>,
        },
        {
          index:'4',
          stime: "2016-05-02",
          etime: "2016-05-02",
          name: "交互课件ceshi",
          grade: "90",
          num: "0/1",
          // btn: <el-button class="btn" >去测验</el-button>,
        },
      ],
    };
  },
  methods:{
    toTest(Index){
      this.$router.push('/stest'+Index)

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style Lang="less" scoped>
.table{

  height: 800px;
  background: #ffffff;
}

.table /deep/.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper {
  /* width: 100%; */
  padding-left: 80px;

}
.el-table__footer-wrapper, .el-table__header-wrapper {
  overflow: hidden;
  padding-left: 90px;

}
.el-table__body-wrapper, .el-table__footer-wrapper, .el-table__header-wrapper {
  width: 100%;
  margin-left: 10px;
  /* background-color: brown; */
  padding-left: 90px;
}
.main_box{
  background-color: rgb(233, 233, 233);


}
.main_header{
  background-color: #fff;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  color: rgb(107, 107, 107);
  text-align: left;
  width: 100%;
  /* height: 800px; */

}
.main_header>span{
  margin-left: 10px;
}
.main_btn{
  height: 70px;
  /* background-color: rgb(192, 122, 122); */
  line-height: 70px;
  text-align: left;
}
.main_btn >>>.el-button{
  font-size:12px;
  width: 80px;
  height: 30px;
  line-height: 10px;
  /* vertical-align:middle; */



}
.el-button+.el-button {
  margin-left: 0px;
  padding-left: 14px;
  padding-bottom: 10px;

}

.table >>>.el-table-column{
  text-align: center;
  /* background-color: rgb(34, 23, 23); */
}
/* .table >>> .el-table__row{
  padding-left: 20px;
  background-color: rgb(110, 80, 80);
  margin-top: 40px;
  width: 160px;
  /* display: inline-block; */
/* } */

/* .main_btn >>> .el-button span{
  margin-right: 19px;
   line-height: 10px;
   text-align: center;

} */



/* .el-table_1_column_1{
  height: 30px;
  background-color: rgb(78, 65, 65);
}
.box-card{
 height: 900px;
  width: 100%;
  background-color: rgb(233, 233, 233);
   margin: 10px;
}
.header{
  text-align: left;
  height: 10px;
  color: rgb(107, 107, 107);
}
.btn_box{
  text-align: left;
  margin-top: 10px;
  height: 140px;
} */
.table{
  margin-left:20px;

}
</style>
