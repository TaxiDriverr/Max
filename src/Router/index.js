import VueRouter from 'vue-router'
import Vue from 'vue'
// import { component } from 'vue/types/umd'
// import { component } from 'vue/types/umd'

const Login = () => import('../components/Login')
const Student = () => import('../components/Student')
const Teacher = () => import('../components/Teacher')
const Administrator = () => import('../components/Administrator')

const TeacherContent = () => import('../components/Teacher/content')
const TeacherTest = () => import('../components/Teacher/test')
const TeacherClass = () => import('../components/Teacher/class')
const TeacherStudent = () => import('../components/Teacher/student')
const TeacherIndex = () => import('../components/Teacher/my_index')


const AdminClass = () => import('../components/Administrator/class')
const AdminTeacher = () => import('../components/Administrator/teacher')
// const AdminIndex = () => import('../components/Administrator/a_index')

const StuGrade = () => import('../components/Student/grade')
const StuTest = () => import('../components/Student/test')
const StuIndex = () => import('../components/Student/my_index')
const StuStudy = () => import('../components/Student/study')

const Stest1 = () => import('../components/Student/Stest/test1')
const Stest2 = () => import('../components/Student/Stest/test2')


Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/student',
    component: Student,
    children: [
      {
        path: 's_grade',
        component: StuGrade
      },
      {
        path: 's_test',
        component: StuTest
      },
      {
        path: 's_index',
        component: StuIndex
      },
      {
        path: 's_study',
        component: StuStudy
      },
// {
//   path: '',
//   component:Stest1

// },
// {
//   path: 'stest1',
//   component:Stest1

// }
    ]
  },

  {
    path: '/teacher',
    component: Teacher,
    children: [
      {
        path: '',
        component: TeacherContent
      },
      //教学管理 >> 教学内容
      {
        path: 't_content',
        component: TeacherContent
      },
      //教学管理 >> 测试管理
      {
        path: 't_test',
        component: TeacherTest
      },
      //班级数据 >> 学生信息
      {
        path: 't_class',
        component: TeacherClass
      },
      //班级数据 >> 学生成绩分析
      {
        path: 't_student',
        component: TeacherStudent
      },
      //个人中心
      {
        path: 't_my',
        component: TeacherIndex
      },
    ]
  },
  {
    path: '/administrator',
    component: Administrator,
    children: [
      {
        path: '',
        component: AdminClass,
      },
      {
        path: 'a_class',
        component: AdminClass,
      },
      {
        path: 'a_teacher',
        component: AdminTeacher,
      },
      // {
      //   path: 'a_index',
      //   component: AdminIndex,
      // }

    ]
  },
  {
    path: '/stest1',
    component: Stest1

  },
  {
    path: '/stest2',
    component: Stest2

  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router


