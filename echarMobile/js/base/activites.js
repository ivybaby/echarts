$(function(){
 var myChart = echarts.init(document.getElementById('activities'));
//myChart.showLoading();
var diskData = [
	{
        "value": 12,
        "name": "省科学技术研究成果档案馆党支部",
        "path": "省科学技术研究成果档案馆党支部"
    },
    {
        "value": 36,
        "name": "省科学器材公司党委",
        "path": "省科学器材公司党委",
        "children": [
            {
                "value": 12,
                "name": "第一党支部",
                "path": "省科学器材公司党委/第一党支部"
            },
            {
                "value": 12,
                "name": "第二党支部",
                "path": "省科学器材公司党委/第二党支部"
            },              
            {
                "value": 12,
                "name": "离退休党支部",
                "path": "省科学器材公司党委/离退休党支部"
            }
        ]
    },
         {
        "value": 48,
        "name": "省计算机研究院党委",
        "path": "省计算机研究院党委",
        "children": [
            {
                "value": 12,
                "name": "第一党支部",
                "path": "省计算机研究院党委/第一党支部"
            },
            {
                "value": 12,
                "name": "第二党支部",
                "path": "省计算机研究院党委/第二党支部"
            },              
            {
                "value": 12,
                "name": "第三党支部",
                "path": "省计算机研究院党委/第三党支部"
            },
             {
                "value": 12,
                "name": "第四党支部",
                "path": "省计算机研究院党委/第四党支部"
            }
        ]
    },
         {
        "value": 48,
        "name": "省原子能研究院党委",
        "path": "省原子能研究院党委",
        "children": [
            {
                "value": 12,
                "name": "第一党支部",
                "path": "省原子能研究院党委/第一党支部"
            },
            {
                "value": 12,
                "name": "第二党支部",
                "path": "省原子能研究院党委/第二党支部"
            },              
            {
                "value": 12,
                "name": "第三党支部",
                "path": "省原子能研究院党委/第三党支部"
            },
             {
                "value": 12,
                "name": "第四党支部",
                "path": "省原子能研究院党委/第四党支部"
            }
        ]
    },
         {
        "value": 84,
        "name": "省科学技术信息研究所党委",
        "path": "省科学技术信息研究所党委",
        "children": [
            {
                "value": 12,
                "name": "第一党支部",
                "path": "省科学技术信息研究所党委/第一党支部"
            },
            {
                "value": 12,
                "name": "第二党支部",
                "path": "省科学技术信息研究所党委/第二党支部"
            },              
            {
                "value": 12,
                "name": "第三党支部",
                "path": "省科学技术信息研究所党委/第三党支部"
            },
             {
                "value": 12,
                "name": "第四党支部",
                "path": "省科学技术信息研究所党委/第四党支部"
            },
             {
                "value": 12,
                "name": "第五党支部",
                "path": "省科学技术信息研究所党委/第五党支部"
            },
             {
                "value": 12,
                "name": "第六党支部",
                "path": "省科学技术信息研究所党委/第六党支部"
            },
             {
                "value": 12,
                "name": "第七党支部",
                "path": "省科学技术信息研究所党委/第七党支部"
            }
        ]
    },
    {
        "value": 84,
        "name": "省自然资源科学研究院党委",
        "path": "省自然资源科学研究院党委",
        "children": [
            {
                "value": 12,
                "name": "一党支部",
                "path": "省自然资源科学研究院党委/一党支部"
            },
            {
                "value": 12,
                "name": "二党支部",
                "path": "省自然资源科学研究院党委/二党支部"
            },              
            {
                "value": 12,
                "name": "三党支部",
                "path": "省自然资源科学研究院党委/三党支部"
            },
             {
                "value": 12,
                "name": "四党支部",
                "path": "省自然资源科学研究院党委/四党支部"
            },
             {
                "value": 12,
                "name": "生物站党支部",
                "path": "省自然资源科学研究院党委/生物站党支部"
            },
             {
                "value": 12,
                "name": "离休党支部",
                "path": "省自然资源科学研究院党委/离休党支部"
            },
             {
                "value": 12,
                "name": "退休党支部",
                "path": "省自然资源科学研究院党委/退休党支部"
            }
        ]
    },{
        "value": 192,
        "name": "科技厅机关",
        "path": "科技厅机关",
        "children": [
            {
                "value": 12,
                "name": "机关第一党支部",
                "path": "科技厅机关/机关第一党支部"
            },
            {
                "value": 12,
                "name": "机关第二党支部",
                "path": "科技厅机关/机关第二党支部"
            },              
            {
                "value": 12,
                "name": "机关第一党支部",
                "path": "科技厅机关/机关第三党支部"
            },
             {
                "value": 12,
                "name": "机关第四党支部",
                "path": "科技厅机关/机关第四党支部"
            },
             {
                "value": 12,
                "name": "机关第五党支部",
                "path": "科技厅机关/机关第五党支部"
            },
             {
                "value": 12,
                "name": "机关第六党支部",
                "path": "科技厅机关/机关第六党支部"
            },
             {
                "value": 12,
                "name": "机关第七党支部",
                "path": "科技厅机关/机关第七党支部"
            },
             {
                "value": 12,
                "name": "机关第八党支部",
                "path": "科技厅机关/机关第八党支部"
            },
             {
                "value": 12,
                "name": "机关第九党支部",
                "path": "科技厅机关/机关第九党支部"
            },
             {
                "value": 12,
                "name": "机关第十党支部",
                "path": "科技厅机关/机关第十党支部"
            },
             {
                "value": 12,
                "name": "机关第十一党支部",
                "path": "科技厅机关/机关第十一党支部"
            },
             {
                "value": 12,
                "name": "机关第十二党支部",
                "path": "科技厅机关/机关第十二党支部"
            },
             {
                "value": 12,
                "name": "机关第十三党支部",
                "path": "科技厅机关/机关第十三党支部"
            },
             {
                "value": 12,
                "name": "服务中心党支部",
                "path": "科技厅机关/服务中心党支部"
            },
             {
                "value": 12,
                "name": "机关退休职工党支部",
                "path": "科技厅机关/机关退休职工党支部"
            },
             {
                "value": 12,
                "name": "机关离休干部党支部",
                "path": "科技厅机关/机关离休干部党支部"
            }
        ]
    },
         {
        "value": 60,
        "name": "中国地质科学院矿产综合利用研究所党委",
        "path": "中国地质科学院矿产综合利用研究所党委",
        "children": [
            {
                "value": 12,
                "name": "所直党支部",
                "path": "中国地质科学院矿产综合利用研究所党委/所直党支部"
            },
            {
                "value": 12,
                "name": "矿冶党支部",
                "path": "中国地质科学院矿产综合利用研究所党委/矿冶党支部"
            },              
            {
                "value": 12,
                "name": "分析党支部",
                "path": "中国地质科学院矿产综合利用研究所党委/分析党支部"
            },
             {
                "value": 12,
                "name": "后勤党支部",
                "path": "中国地质科学院矿产综合利用研究所党委/后勤党支部"
            },
             {
                "value": 12,
                "name": "资环党支部",
                "path": "中国地质科学院矿产综合利用研究所党委/资环党支部"
            }
        ]
    },
    {
        "value": 12,
        "name": "省科技促进发展研究中心党支部",
        "path": "省科技促进发展研究中心党支部"
    },
    {
        "value": 12,
        "name": "省科技交流中心党支部",
        "path": "省科技交流中心党支部"
    },
    {
        "value": 12,
        "name": "省农村科技发展中心党支部",
        "path": "省农村科技发展中心党支部"
    }
]


    //myChart.hideLoading();

    function colorMappingChange(value) {
        var levelOption = getLevelOption(value);
        chart.setOption({
            series: [{
                levels: levelOption
            }]
        });
    }

    var formatUtil = echarts.format;

    function getLevelOption() {
        return [
            {
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        gapWidth: 5
                    }
                }
            },
            {
                itemStyle: {
                    normal: {
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            }
        ];
    }

    myChart.setOption(option = {

        title: {
           // text: 'Disk Usage',
           // left: 'center'
        },

        tooltip: {
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' + formatUtil.encodeHTML(info.name) + '</div>',
                    '组织生活次数: ' + formatUtil.addCommas(value)+'次' ,
                ].join('');
            }
        },

        series: [
            {
                name:'中共四川省科学技术厅直属机关委员会',
                type:'treemap',
                visibleMin: 300,
                leafDepth:1,
                label: {
                    show: true,
                    formatter: '{b}'
                },
                roam:false,
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                levels: getLevelOption(),
                data: diskData
            }
        ]
    });
    
     $(window).resize(function(){
            myChart.resize();
        })
})
