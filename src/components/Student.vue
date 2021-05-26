<template>
  <el-container class="main_container">
    <!-- 头部布局 -->
    <el-header>
      <!--logo和项目名称-->
      <div class="left_box">
        <img src="../assets/img/logo.png">
        <span>学习交互管理系统</span>
      </div>
      <!--用户登录展示的头像-->
      <div class="right_box">
        <el-dropdown @command="handleCommand">
          <img src="../assets/img/Boy-06.png">
          <!--下拉菜单-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-house" command="returnHome">回到首页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" command="returnLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <!--侧边栏-->
      <el-aside :width="isCollapse?'64px':'200px'">
        <!--展开/收起-->
        <div class="toggle_box" @click="toggleCollapse">|||</div>
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(52,73,94)"
          text-color="#fff"
          active-text-color="#ffd04b;"
          :collapse="isCollapse"
          :default-active="activePath"
          :collapse-transition="false"
          :unique-opened="true"
          :router="true">
          <MenuTree :menuList="this.MenuList"></MenuTree>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuTree from '../components/Menu/A_MenuTree'

export default {

  name: 'Main',
  data () {
    return {
      isCollapse: false,
      activePath: '',
      MenuList: [
        {
          'id': 1,
          'parentId': 0,
          'menuName': '学习中心',
          'url': '',
          'icon': 'el-icon-setting',
          'orderNum': 1,
          'open': 1,
          'disabled': false,
          'perms': null,
          'type': 0,
          'children': [
            {
              'id': 225,
              'parentId': 1,
              'menuName': '开始学习',
              'url': null,
              'icon': 'el-icon-user',
              'orderNum': 2,
              'open': 0,
              'disabled': false,
              'perms': 'class_creat',
              'type': 0,
              'children': []
            },
            {
              'id': 226,
              'parentId': 1,
              'menuName': '章节测试',
              'url': '/student/s_test',
              'icon': 'el-icon-user',
              'orderNum': 2,
              'open': 0,
              'disabled': false,
              'perms': 'class_creat',
              'type': 0,
              'children': []
            },
          ]
        },
        {
          'id': 2,
          'parentId': 0,
          'menuName': '我的成绩',
          'url': null,
          'icon': 'el-icon-s-goods',
          'orderNum': 2,
          'open': 0,
          'disabled': false,
          'perms': null,
          'type': 0,
          'children': [
            {
              'id': 229,
              'parentId': 312,
              'menuName': '成绩分析',
              'url': '/student/s_grade',
              'icon': 'el-icon-date',
              'orderNum': 1,
              'open': 1,
              'disabled': false,
              'perms': 'el-icon-date',
              'type': 0,
              'children': []
            },
          ]
        },
        {
          'id': 3,
          'parentId': 0,
          'menuName': '个人中心',
          'url': '/student/s_index',
          'icon': 'el-icon-s-goods',
          'orderNum': 3,
          'open': 0,
          'disabled': false,
          'perms': null,
          'type': 0,
          'children': []
        },
      ]
    }
  },
  components: {
    MenuTree
  },
  methods: {
    gtStudy () {
      this.$router.push('/student/s_study')
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCommand (command) {
      if (command == 'returnHome') {
        this.$router.push('/student/s_study')
      } else if (command == 'returnLogin') {
        this.$confirm('是否退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '注销成功'
          })
          this.$router.push('/login')
        })
      }
    },
  }
}
</script>

<style Lang="less" scoped>

/*设置整个容器的高度*/
.main_container {
  height: 800px;
}

/*头部布局*/
.el-header {
  background-color: rgb(52, 73, 94);
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: #FFFFFF;
  align-items: center;
  font-size: 20px;
}

/*左边logo和标题*/

.left_box {
  display: flex;
  align-items: center;
}

/*logo*/

img {
  width: 50px;
  height: 40px;
  margin: 0px 0px 10px 15px;
}

/*标题*/

span {
  margin-left: 15px;
}

/* } */

/*右边的登录头像*/

/* .right_box {
  .el-dropdown > img { */
/* width: 60px;
height: 60px; */
/* border-radius: 50%; */
/* background-color: #FFFFFF; */
/* margin: 0px 15px 0px 0px; */
/* background-size: contain; */
/* }
} */
.el-dropdown > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #FFFFFF;
  margin: 0px 15px 0px 0px;
  background-size: contain;

}

/* } */

.el-aside {
  background-color: rgb(52, 73, 94);
  color: #74a3a1;;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: rgb(52, 73, 94);
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/*侧边栏*/
.el-aside {
  background-color: rgb(52, 73, 94);
}

.el-menu {
  border-right: none;
}

/*展开/收起*/

.toggle_box {
  background-color: rgb(94, 191, 29);
  font-size: 15px;
  font-weight: bold;
  line-height: 24px;
  color: #353434;
  letter-spacing: 0.2em;
  text-align: center;
  cursor: pointer;

}

/* } */

/*内容主体*/
.el-main {
  background-color: #cad6e2;
}

/*下拉菜单的样式*/
.el-dropdown-link {
  cursor: pointer;
  color: #6994c0;
}

</style>
