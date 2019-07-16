const lstmenu=[];
let menuL0={name:"平台设置",path:"/foundation/index",parent:null,remark:""};
lstmenu.push(menuL0)
lstmenu.push({name:"机构类别",path:"/god/category",parent:menuL0,remark:""})
lstmenu.push({name:"层级管理",path:"/god/leveler",parent:menuL0,remark:""})
let menuL1={name:"权限管理",path:"",parent:menuL0,remark:""}
lstmenu.push(menuL1)
lstmenu.push({name:"权限模板",path:"/permisiion/organization",parent:menuL1,remark:""})
lstmenu.push({name:"下级权限",path:"/permisiion/yu",parent:menuL1,remark:""})

lstmenu.push({name:"大类下发",path:"/god/leveler22222",parent:menuL0,remark:""})
// menuL0={name:"系统设置",path:"/god/setting",parent:null,remark:""};
// lstmenu.push(menuL0)
menuL0={name:"督察",path:"/dc/index",parent:null,remark:""};
lstmenu.push(menuL0)
menuL1={name:"基础数据",path:"",parent:menuL0,remark:""}
lstmenu.push(menuL1)
lstmenu.push({name:"检查库",path:"/dcdata/hive",parent:menuL1,remark:""})
lstmenu.push({name:"大类配置",path:"/dcdata/setting",parent:menuL1,remark:""})
menuL1={name:"准备",path:"",parent:menuL0,remark:""}
lstmenu.push(menuL1)
lstmenu.push({name:"创建检查表",path:"/ready/maketable",parent:menuL1,remark:""})
lstmenu.push({name:"分配检查人",path:"/ready/setduty",parent:menuL1,remark:""})
menuL1={name:"对接",path:"",parent:menuL0,remark:""}
lstmenu.push(menuL1)
lstmenu.push({name:"本次对接",path:"/duijie/maketable",parent:menuL1,remark:""})
lstmenu.push({name:"复查对接",path:"/duijie/setduty",parent:menuL1,remark:""})

menuL0={name:"督办",path:"/db/index",parent:null,remark:""};
lstmenu.push(menuL0)


lstmenu.forEach(x=>x.children=[]);
lstmenu.forEach((el,index)=>el.id=""+index)
lstmenu.forEach(x=>x.parent&&x.parent.children.push(x));
lstmenu.forEach(x=>x.children=x.children.length===0?null:x.children)

export const lstmenuTree=lstmenu.filter(x=>x.parent==null);