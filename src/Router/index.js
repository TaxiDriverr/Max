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

const AdminClass = () => import('../components/Administrator/class')
const AdminTeacher = () => import('../components/Administrator/teacher')

const StuGrade = () => import('../components/Student/grade')
const StuTest = () => import('../components/Student/test')
const StuIndex = () => import('../components/Student/my_index')
const StuStudy = () => import('../components/Student/study')

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
    children:[
      {
        path: 's_grade',
        component:StuGrade
      },
      {
        path: 's_test',
        component:StuTest
      },
      {
        path: 's_index',
        component:StuIndex
      },
      {
        path: 's_study',
        component:StuStudy
      }
    ]
  },
  {
    path: '/teacher',
    component: Teacher,
    children:[
      {
        path: '',
        component: TeacherContent
      },
      {
        path: 't_content',
        component: TeacherContent
      },
      {
        path: 't_test',
        component: TeacherTest
      },
      {
        path: 't_class',
        component: TeacherClass
      },
      {
        path: 't_student',
        component: TeacherStudent
      },
    ]
  },
  {
    path: '/administrator',
    component: Administrator,
    children:[
      {

      path: 'a_class',
      component: AdminClass,
      },
      {
        path: 'a_teacher',
        component:AdminTeacher,
      }

      
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
