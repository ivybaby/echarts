
$(function(){
	
	function randomData(type) {
    return Math.round(Math.random()*type);
	}
	
	$(".viewDetail").click(function(){
		var changeName = $(this).parent().parent("tr").find('td').eq(2).text() +"-" +$(this).parent().parent("tr").find('td').eq(1).text();
	
		$('#myModal').modal();
		
		$("#myModalLabel").html("").html(changeName+"  发布新闻情况");
		var width = $(window).width();
		$("#layerMain").width(width*(0.7));
		var detailBlock = echarts.init(document.getElementById('layerMain'));
		
		var myChartLineDetail = {
		    tooltip : {
		        trigger: 'axis' 
		    },
		    grid: {
		    	top:'10%',
		        left: '3%',
		        right: '2%',
		        bottom: '20%',
		        containLabel: true
		    },
		    dataZoom : {
		        y:245,
		        show : true,
		        realtime: true,
		        start : 0,
		        end : 100
		    },
		    xAxis : [
		        {
		            type : 'category',
		            //boundaryGap : false,
		            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {
			       		formatter: '{value}次  ',
			    	}
		        }
		    ],
		    series : [
		        {
		            name:'党建新闻发布数',
		            type:'line',
		            data:[30+randomData(30), 30+randomData(30), 30+randomData(30), 30+randomData(30), 30+randomData(30), 30+randomData(30), 30+randomData(30),30+randomData(30),30+randomData(30),30+randomData(30),30+randomData(30),30+randomData(30)]
		        }
		    ]
	}
	
	detailBlock.setOption(myChartLineDetail);
	/*$(".modal-body >div").css("width","100%");*/
	$(window).resize(function(){
			var width = $(window).width();
		    $("#layerMain").width(width*(0.7));
        	detailBlock.resize();
        })
	})
	var newPublishNum = echarts.init(document.getElementById('newPublishNum'));
	
	var myChartLine = {
		    tooltip : {
		        trigger: 'axis' 
		    },
		    grid: {
		    	top:'10%',
		        left: '3%',
		        right: '4%',
		        bottom: '20%',
		        containLabel: true
		    },
		    dataZoom : {
		        y:215,
		        show : true,
		        realtime: true,
		        start : 0,
		        end : 100
		    },
		    xAxis : [
		        {
		            type : 'category',
		            //boundaryGap : false,
		            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {
			       		formatter: '{value}次  ',
			    	}
		        }
		    ],
		    series : [
		        {
		            name:'党建新闻发布数',
		            type:'line',
		            data:[100+randomData(30), 100+randomData(30), 100+randomData(30), 100+randomData(30), 100+randomData(30), 100+randomData(30), 100+randomData(30),100+randomData(30),100+randomData(30),100+randomData(30),100+randomData(30),100+randomData(30)]
		        }
		    ]
	}
	
	newPublishNum.setOption(myChartLine);
	
	
	
	$(window).resize(function(){
        	newPublishNum.resize();
        })
})
