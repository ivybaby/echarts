$(function(){
	var theme  =  {
		
	};
	//echarts.registerTheme('macarons',theme);relation
	
        var myChart1 = echarts.init(document.getElementById('dash_pie_1'),'macarons');
        var myChart2 = echarts.init(document.getElementById('dash_pie_2'),'macarons');
        var myChart3 = echarts.init(document.getElementById('chart-revenue'),'macarons'); 
       // var myChart4 = echarts.init(document.getElementById('chart-relation'));
        
        var legendData= [];
       	// var myChart3 = echarts.init(document.getElementById('main3'),'macarons');
        
        //饼图
        
        var serieData = [{value:335, name:'高中'},{value:310, name:'专科'},{value:1248, name:'本科'},{value:350, name:'硕士'},{value:248, name:'博士'},{value:248, name:'其他'}];
      
		 for(var i= 0;i<serieData.length;i++){
				legendData.push(serieData[i].name)
			}
		 
        var optionPie = {
        	baseOption:{
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		      legend: {
        	  orient: 'vertical',
              x: 'left',
              data:legendData,
              align:'left',
              left:0
            },
		    series : [
		        {
		            name: '',
		            type: 'pie',
		            radius : ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
          		  },
		            center: ['50%','50%'],
		            data:serieData,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		    
		},
		 media: [
            {
                option: {
                    series: [
                        {
                            radius : ['50%', '70%'],
                            center: ['70%', '50%']
                        }
                    ]
                }
            },
            {
                query: {
                    maxWidth: 250
                },
                option: {
                	 legend: {
                        left: 0,
                        top: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius : ['35%', '55%'],
                            center: ['70%', '65%']
                        }
                    ]
                }
            },
            {
                query: {
                     maxAspectRatio: 1
                },
                option: {
                	 legend: {
                        left:0,
                        top: 0,
                        orient: 'horizontal'
                    },
                    series: [
                        {
                            radius : ['35%', '55%'],
                            center: ['50%', '65%']
                        }
                    ]
                }
            }
        ]
        	};
		
		optionPie.baseOption.series[0].name="党员学历比例";
		myChart1.setOption(optionPie);
		var seriesData2 = [{value:335, name:'25岁以下'},{value:310, name:'25-40岁'},{value:234, name:'40-50岁'},{value:135, name:'50-60岁'},{value:1548, name:'60岁以上'}];;
        optionPie.baseOption.series[0].name="党员年龄比例";
        optionPie.baseOption.series[0].data= seriesData2;
		var legendData1 =[];
		 for(var i= 0;i<seriesData2.length;i++){
				legendData1.push(seriesData2[i].name)
			}  
	 	optionPie.baseOption.legend.data = legendData1;
       
       	myChart2.setOption(optionPie);
       	
       	
       	var optionLine = {
		    title : {
		        //text: name,
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
        		data:legendData
        	},
		    grid:{
		       // width:'80%'
		       containLabel:true,
		       left:"5%",
		       top:"5%",
		       bottom:"5%",
		       right:'5%'
		    },
		    toolbox: {
		        show : true
		       /* feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }*/
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            nameTextStyle:{
						color:"#ffffff"
					},
					axisLine:{
						lineStyle:{
							color:"#ffffff"
						}
					},
					axisLabel:{
						textStyle:{
							color:"#ffffff"
						}
					},
		            data : []
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
					name:'人',
					nameTextStyle:{
						color:"#ffffff"
					},
					axisLabel:{
						textStyle:{
							color:"#ffffff"
						}
					},
					axisLine:{
						lineStyle:{
							color:"#ffffff"
						}
					}
		        }
		    ],
		    series : [{
		    	data:[],
		    	type:'line',
		    	lineStyle:{
		    		normal:{
		    			color:"#ffffff"
		    		},
		    		emphasis:{
		    			color:"#ffffff"
		    		}
		    	},
		    	itemStyle:{
		    		normal:{
		    			color:"#ffffff"
		    		},
		    		emphasis:{
		    			color:"#ffffff"
		    		}
		    	},
		    	smooth:false
		    }]
       		
       	}
       	
       	optionLine.xAxis[0].data =  ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"];
       	optionLine.series[0].data = [483,490,470,500,520, 600, 650, 630, 580, 550];
       	optionLine.series[0].name='发展党员人数';
       	optionLine.series[0].lineStyle.emphasis.color ="#ffffff";
       	
       	myChart3.setOption(optionLine);
       	

        // 使用刚指定的配置项和数据显示图表。
        
        $(window).resize(function(){
        	myChart1.resize();
            myChart2.resize();
            myChart3.resize();
            //myChart4.resize();
        })



})
