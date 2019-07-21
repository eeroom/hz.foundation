export const userCenterTree = {
    "租户管理": { id:1, path: "/admin/tan" },
    "节点类别": { id:2, path: "/admin/node" },
    "组织架构": { id:3,path: "/admin/organization" },
    "角色管理": { id:4,path: "/admin/role" },
    "人员管理": { id:5,path: "/admin/employee" },
};

export const jcTree = {
    "准备": {
        id: 3,
        path: "/bdata",
        children: {
            "制度学习": {id: 21, path: "/learn/index" },
            "大类设置": { id: 31, path: "/firstcategory/setting" },
            "检查库": { id: 32, path: "/secondecategory/setting" },
        }

    },
    "检查": {
        id: 4,
        path: "/inspection",
        children: {
            "创建检查表": { id: 41, path: "/inspection/create" },
            "本次检查": { id: 42, path: "/inspection/work" },
            "本次对接": { id: 51, path: "/dj/index", },
        }
    },
    "复查": {
        id: 7,
        path: "/fc",
        children: {
            "创建复查表": { id: 71, path: "/fc/create" },
            "本次复查": { id: 72, path: "/fc/work" },
            "复查对接": { id: 51, path: "/dj/index", },
        }
    },
    "整改": {
        id: 6,
        path: "/zg",
        children: {
            "整改": { id: 61, path: "/zg/index" },
        }
    },
   
    
};

export const jcAdminTree={
    "后台管理": {
        id: 1, path: "/setting",
        children: {
            "权限管理": { id: 11, path: "/setting/permission" },
            "大类列表": { id: 12, path: "/firstcategory/index" }
        }
    },
};
export const jcReportTree={
    "查询": {
        id: 9,
        path: "/cx",
        children: {
            "综合查询": { id: 91, path: "/cx/gszh" },
            "明细查询": { id: 92, path: "/cx/gsxx" }
        }

    },
    "分析": {
        id: 8,
        path: "/fx",
        children: {
            "单位综合分析": { id: 81, path: "/fx/gszh" },
            "单位详细分析": { id: 82, path: "/fx/gsxx" },
            "部门详细分析": { id: 83, path: "/fx/bmxx" },
            "人员综合分析": { id: 84, path: '/fx/ryzh' },
            "人员详细分析": { id: 85, path: '/fx/ryxx' }
        }

    }
}

export const convertToArray = (objTree, parentId, targetArray) => {
    targetArray = targetArray || [];
    for (const key in objTree) {
        if (!objTree.hasOwnProperty(key))
            continue;
        const element = objTree[key];
        let tmp = { ...element, name: key, parentId,children:[] };
        targetArray.push(tmp);
        if (!element.children)
            continue;
        convertToArray(element.children, tmp.id, targetArray);
    }
    return targetArray;
}