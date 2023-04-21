import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/ZhiZaoShuangTan',
    alwaysShow: true,
    component: Layout,
    redirect: '/ZhiZaoShuangTan/ShuangTanPeiZhi',
    name: 'ZhiZaoShuangTan',
    meta: {
      title: '智造双碳',
      icon: 'nested'
    },
    children: [
      {
        path: 'ShuangTanPeiZhi',
        alwaysShow: true,
        component: () => import('@/views/智造双碳/双碳配置/固定碳排放'), // Parent router-view
        name: 'ShuangTanPeiZhi',
        meta: { title: '双碳配置' },
        children: [
          {
            path: 'GuDingTanPaiFang',
            component: () => import('@/views/智造双碳/双碳配置/固定碳排放'),
            name: 'GuDingTanPaiFang',
            meta: { title: '固定碳排放' }
          }
        ]
      },
      {
        path: 'ShuangTanGuanLi',
        alwaysShow: true,
        component: () => import('@/views/智造双碳/双碳管理/能耗数据采集'), // Parent router-view
        name: 'ShuangTanGuanLi',
        meta: { title: '双碳管理' },
        children: [
          {
            path: 'NengHaoShuJuCaiJi',
            component: () => import('@/views/智造双碳/双碳管理/能耗数据采集'),
            name: 'NengHaoShuJuCaiJi',
            meta: { title: '能耗数据采集' }
          }
        ]
      },
      {
        path: 'NengXiaoYuJing',
        component: () => import('@/views/智造双碳/能效预警demo'),
        name: 'GuDingTanPaiFang',
        meta: { title: '能效预警' }
      }
    ]
  },

  {
    path: '/ZhiXingZhiZaoMES',
    component: Layout,
    redirect: '/ZhiXingZhiZaoMES/SheBeiXinXi',
    name: 'ZhiXingZhiZaoMES',
    meta: { title: '制造执行 MES', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'XiangMuWeiHu',
        name: 'XiangMuWeiHu',
        component: () => import('@/views/制造执行MES/项目维护'),
        meta: { title: '项目维护', icon: 'tree' }
      },
      {
        path: 'GongChangJianMo',
        name: 'GongChangJianMo',
        component: () => import('@/views/制造执行MES/工厂建模'),
        meta: { title: '工厂建模', icon: 'tree' }
      },
      {
        path: 'GongYiJianMo',
        name: 'GongYiJianMo',
        component: () => import('@/views/制造执行MES/工艺建模'),
        meta: { title: '工艺建模', icon: 'tree' }
      },
      {
        path: 'SheBeiXinXi',
        name: 'SheBeiXinXi',
        component: () => import('@/views/制造执行MES/设备信息'),
        meta: { title: '设备信息', icon: 'tree' }
      },
      {
        path: 'ChanPinJianMo',
        name: 'ChanPinJianMo',
        component: () => import('@/views/制造执行MES/产品建模'),
        meta: { title: '产品建模', icon: 'tree' }
      },
      {
        path: 'BOMGuanLi',
        name: 'BOMGuanLi',
        component: () => import('@/views/制造执行MES/BOM管理'),
        meta: { title: 'BOM 管理', icon: 'tree' }
      },
      {
        path: 'JiHuaPaiChan',
        name: 'JiHuaPaiChan',
        component: () => import('@/views/制造执行MES/计划排产'),
        meta: { title: '计划排产', icon: 'tree' }
      },
      {
        path: 'ZuoYeZhuangPei',
        name: 'ZuoYeZhuangPei',
        component: () => import('@/views/制造执行MES/作业装配'),
        meta: { title: '作业装配', icon: 'tree' }
      }
    ]
  },

  {
    path: '/CaiGouGuanLiXiTong',
    component: Layout,
    redirect: '/CaiGouGuanLiXiTong/PingTaiDongTai',
    name: 'CaiGouGuanLiXiTong',
    meta: { title: '采购管理系统', icon: 'user' },
    children: [
      {
        path: 'PingTaiDongTai',
        name: 'PingTaiDongTai',
        component: () => import('@/views/采购管理系统/平台动态'),
        meta: { title: '平台动态', icon: 'tree' }
      },
      {
        path: 'XinXiGongGao',
        name: 'XinXiGongGao',
        component: () => import('@/views/采购管理系统/信息公告'),
        meta: { title: '信息公告', icon: 'tree' }
      }
    ]
  },

  {
    path: '/table',
    alwaysShow: true,
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        path: 'complex-table',
        component: () => import('@/views/table/complex-table'),
        name: 'ComplexTable',
        meta: { title: 'Complex Table' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/Justtyn',
        meta: { title: 'Justyn Github', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
