











const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[

                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"口罩类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKouzhao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYimiao"
                    }

                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"地点管理",
                        "menuJump":"列表",
                        "tableName":"didian"
                    }
                ],
                "menu":"地点管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户轨迹管理",
                        "menuJump":"列表",
                        "tableName":"guiji"
                    }
                ],
                "menu":"用户轨迹管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"核算检测管理",
                        "menuJump":"列表",
                        "tableName":"hesuan"
                    }
                ],
                "menu":"核算检测管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"口罩管理",
                        "menuJump":"列表",
                        "tableName":"kouzhao"
                    }
                ],
                "menu":"口罩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"口罩预订管理",
                        "menuJump":"列表",
                        "tableName":"kouzhaoyuyue"
                    }
                ],
                "menu":"口罩预订管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医护人员管理",
                        "menuJump":"列表",
                        "tableName":"yihu"
                    }
                ],
                "menu":"医护人员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗管理",
                        "menuJump":"列表",
                        "tableName":"yimiao"
                    }
                ],
                "menu":"疫苗管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗预约管理",
                        "menuJump":"列表",
                        "tableName":"yimiaoyuyue"
                    }
                ],
                "menu":"疫苗预约管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"地点管理",
                        "menuJump":"列表",
                        "tableName":"didian"
                    }
                ],
                "menu":"地点管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"用户轨迹管理",
                        "menuJump":"列表",
                        "tableName":"guiji"
                    }
                ],
                "menu":"用户轨迹管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"核算检测管理",
                        "menuJump":"列表",
                        "tableName":"hesuan"
                    }
                ],
                "menu":"核算检测管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"口罩管理",
                        "menuJump":"列表",
                        "tableName":"kouzhao"
                    }
                ],
                "menu":"口罩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"口罩预订管理",
                        "menuJump":"列表",
                        "tableName":"kouzhaoyuyue"
                    }
                ],
                "menu":"口罩预订管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗管理",
                        "menuJump":"列表",
                        "tableName":"yimiao"
                    }
                ],
                "menu":"疫苗管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"疫苗预约管理",
                        "menuJump":"列表",
                        "tableName":"yimiaoyuyue"
                    }
                ],
                "menu":"疫苗预约管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"医护人员",
        "tableName":"yihu"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户轨迹管理",
                        "menuJump":"列表",
                        "tableName":"guiji"
                    }
                ],
                "menu":"用户轨迹管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"核算检测管理",
                        "menuJump":"列表",
                        "tableName":"hesuan"
                    }
                ],
                "menu":"核算检测管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"口罩管理",
                        "menuJump":"列表",
                        "tableName":"kouzhao"
                    }
                ],
                "menu":"口罩管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"口罩预订管理",
                        "menuJump":"列表",
                        "tableName":"kouzhaoyuyue"
                    }
                ],
                "menu":"口罩预订管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"疫苗管理",
                        "menuJump":"列表",
                        "tableName":"yimiao"
                    }
                ],
                "menu":"疫苗管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"疫苗预约管理",
                        "menuJump":"列表",
                        "tableName":"yimiaoyuyue"
                    }
                ],
                "menu":"疫苗预约管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;