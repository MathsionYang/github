
const router = [{
    path: '/ElementTable',
    name: 'ElementTable',
    component:()=>import('@/view/practice/table/ElementTable')
  },{
    path: '/word',
    name: 'word',
    component:()=>import('@/view/practice/table/word')
  },
  {
    path: '/timemap',
    name: 'timemap',
    component:()=>import('@/view/practice/chart/timemap')
  },
  {
    path: '/drillmap',
    name: 'drillmap',
    component:()=>import('@/view/practice/chart/drillmap')
  },
  {
    path: '/dynamicchart',
    name: 'dynamicchart',
    component:()=>import('@/view/practice/chart/dynamicchart')
  }]

  
export default router;  