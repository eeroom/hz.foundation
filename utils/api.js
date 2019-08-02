const foundation = {

    PublicDepartmentForGod:{
      Create:'PublicDepartmentForGod/Create',//创建指定部门
      Delete:'PublicDepartmentForGod/Delete',  //删除指定部门
      GetEntities:'PublicDepartmentForGod/GetEntities',//获取指定条件的部门
    },
 
    PublicDepartment:{
      Create:'PublicDepartment/Create',//创建指定部门
      Delete:'PublicDepartment/Delete',  //删除指定部门
      Update:'PublicDepartment/Update', //更新指定条件的部门
      GetEntities:'PublicDepartment/GetEntities',//获取指定条件的部门
      Copy:'PublicDepartment/Copy', //创建指定的部门
      GetEntitiesByTemplate:'PublicDepartment/GetEntitiesByTemplate',//获取模板提供的部门
    },
 
    //角色管理(平台)
    PublicRoleForGod:{
      Create:'PublicRoleForGod/Create',//创建指定角色
      Delete:'PublicRoleForGod/Delete',  //删除指定角色
      GetEntities:'PublicRoleForGod/GetEntities',//获取指定条件的角色
    },
    
    //角色管理(信息管理员)
    PublicRole:{
      Create:'PublicRole/Create',//创建指定角色
      Delete:'PublicRole/Delete',  //删除指定角色
      Update:'PublicRole/Update', //更新指定条件的角色
      GetEntities:'PublicRole/GetEntities',//获取指定条件的角色
      GetEntitiesTree:'PublicRole/GetEntitiesTree',//获取指定条件的角色
      GetPageEntities:'PublicRole/GetPageEntities', //获取指定条件的角色-分页
      GetRank:'PublicRole/GetRank',//获取角色的Rank
      GetEntitiesByTemplate:'PublicRole/GetEntitiesByTemplate',//获取模板提供的角色
      Copy:'PublicRole/Copy',//继承模板提供的角色
    },
 
    PublicOrganizationForGod:{
      Create:'PublicOrganizationForGod/Create',//创建指定名称的机构
      Delete:'PublicOrganizationForGod/Delete',  //删除指定的机构
      Update:'PublicOrganizationForGod/Update', //修改指定的机构
      GetEntities:'PublicOrganizationForGod/GetEntities',//获取指定条件的机构
      SetMenuRange:'PublicOrganizationForGod/SetMenuRange', //设定机构可以使用的功能
      GetMenuRange:'PublicOrganizationForGod/GetMenuRange',//获取机构可以使用的功能
      GetPageEntities:'PublicOrganizationForGod/GetPageEntities',//获取机构可以使用的功能
      SetOwnerDepartment:'PublicOrganizationForGod/SetOwnerDepartment',//创建指定名称的机构
    },
    PublicOrganization:{
      GetEntities:'PublicOrganization/GetEntities',//获取指定条件的机构
      GetEntitiesTree:'PublicOrganization/GetEntitiesTree',//获取指定条件的机构
      GetPageEntities:'PublicOrganization/GetPageEntities',  //获取指定条件的机构-分页
      Create:'PublicOrganization/Create', //创建指定的机构
      Update:'PublicOrganization/Update',//修改指定的机构
      Delete:'PublicOrganization/Delete', //删除指定的机构
      GetMenuRange:'PublicOrganization/GetMenuRange',//获取机构可以使用的功能
    },
    //机构类型管理(平台)
    PublicOrganizationCategory:{
      Create:'PublicOrganizationCategory/Create',//创建指定机构类别
      Delete:'PublicOrganizationCategory/Delete',  //删除指定机构类别
      Update:'PublicOrganizationCategory/Update', //更新指定条件的机构类别
      GetEntities:'PublicOrganizationCategory/GetEntities',//获取指定条件的机构类别
    },
    
    PublicPermissionGroupForGod:{
      Create:'PublicPermissionGroupForGod/Create',//创建指定名称的权限分组
      Delete:'PublicPermissionGroupForGod/Delete',  //删除指定的权限分组
      Update:'PublicPermissionGroupForGod/Update', //修改指定的权限分组
      GetEntities:'PublicPermissionGroupForGod/GetEntities',//获取指定条件的权限分组
      GetMenu:'PublicPermissionGroupForGod/GetMenu',//获取指定权限分组的菜单
      SetMenu:'PublicPermissionGroupForGod/SetMenu',//设置指定权限分组的菜单
    },
    PublicPermissionGroup:{
      Create:'PublicPermissionGroup/Create',//创建指定名称的权限分组
      Delete:'PublicPermissionGroup/Delete',  //删除指定的权限分组
      Update:'PublicPermissionGroup/Update', //修改指定的权限分组
      GetPageEntities:'PublicPermissionGroup/GetPageEntities',//获取指定条件的权限分组-分页
      GetMenu:'PublicPermissionGroup/GetMenu',//获取指定权限分组的菜单
      SetMenu:'PublicPermissionGroup/SetMenu',//设置指定权限分组的菜单
      GetEntitiesWithDefault:'PublicPermissionGroup/GetEntitiesWithDefault',//获取默认的权限分组
    },
    PublicUser:{
      GetUserId:'PublicUser/GetUserId',//获取用户信息
      Create:'PublicUser/Create',  //创建指定的用户
      Delete:'PublicUser/Delete', //删除指定的用户
      Update:'PublicUser/Update',//修改指定的用户
      GetPageEntities:'PublicUser/GetPageEntities',//获取指定条件的用户-分页
      GetEntities:'PublicUser/GetEntities',//获取指定条件的用户
      ReSigned:'PublicUser/ReSigned',//辞退指定的用户
      Import:'PublicUser/Import',//导入用户
      ImportByAdmin:'PublicUser/ImportByAdmin',//导入用户
      ResetPassword:'PublicUser/ResetPassword',//重置密码
    },
    //层级管理
    PublicLevelerDefinition: {
      Create: 'PublicLevelerDefinition/Create', //添加指定机构类别的层级
      GetEntities: 'PublicLevelerDefinition/GetEntities', //获取指定条件的层级，已经层级关系排序，
      Update: 'PublicLevelerDefinition/Update',//修改层级
      Delete: 'PublicLevelerDefinition/Delete',//删除层级
      GetBelongToMe: 'PublicLevelerDefinition/GetBelongToMe',//获取当前信息员能管理的层级,已经层级关系排序
    },
  
    ///系统的数据
    PublicApp:{
      GetEntities:'PublicApp/GetEntities',//获取指定条件的系统
      GetMenu:'PublicApp/GetMenu',//获取指定条件的系统下的所有菜单--树结构
      GetBelongToMe:'PublicApp/GetBelongToMe',//获取当前机构能够使用的系统
      GetMenuByOrganizationRange:'PublicApp/GetMenuByOrganizationRange',//获取指定条件的系统下的所有菜单--树结构,机构Range范围内
    },
    PerformanceReview:{
      ToOtherUsersInStation:'PerformanceReview/ToOtherUsersInStation',//油站员工对其他人的评分情况
      StationLeaderToStaff:'PerformanceReview/StationLeaderToStaff',//油站经理查看
      UpLoadByStationLeader:'PerformanceReview/UpLoadByStationLeader',//油站经理上报
      AreaLeaderToStation:'PerformanceReview/AreaLeaderToStation',//片区经理查看油站详情
      UpLoadByAreaLeader:'PerformanceReview/UpLoadByAreaLeader',//片区经理上报
      Create:'PerformanceReview/Create',//新增考核
      Update:'PerformanceReview/Update/',//PerformanceReview/Update/{id}片区经理上报
      QueryPerformanceReview:"PerformanceReview/QueryPerformanceReview",//查询
    },
    PublicConfig:{
      GetPublicConfigs:'PublicConfig/GetPublicConfigs',//获取指定类型的配置信息
      AddOrUpdate:'PublicConfig/AddOrUpdate',//新增或修改
    },
    InspectStandardItem:{
      GetItemtException:'InspectStandardItem/GetItemtException',//获取指定机构、二级分类的无此项配置数据
      SaveItemtException:'InspectStandardItem/SaveItemtException',//保存指定机构、二级分类的无此项配置数据
      GetItemtExceptionByTableId:'InspectStandardItem/GetItemtExceptionByTableId',//获取指定机构、二级分类的无此项配置数据
    },
    Account:{
        Login: 'Account/Login',
    },
    UserInfo:{
        GetUserId:'UserInfo/GetUserId',
    }
  }

export {
    foundation
}
  