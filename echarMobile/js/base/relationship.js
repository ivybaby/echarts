$(function(){
	var theme  =  {
		
	};
	//echarts.registerTheme('macarons',theme);relation

        var myChart4 = echarts.init(document.getElementById('chart-relation'));
        

       	
       	//myChart3.setOption(optionLine);
       	
       	var baseData = {
       		"name":"中共四川省科学技术厅直属机关委员会",
       		"children":[{"name":"科技厅机关","children":["机关第一党支部","机关第二党支部","机关第三党支部","机关第四党支部","机关第五党支部","机关第六党支部","机关第七党支部","机关第八党支部","机关第九党支部","机关第十党支部","机关第十一党支部","机关第十二党支部","机关第十三党支部","服务中心党支部","机关退休职工党支部","机关离休干部党支部"]},
       					{"name":"省自然资源科学研究院党委 ","children": ["一党支部","二党支部","三党支部","四党支部","生物站党支部","离休党支部","退休党支部"]},
       					{"name":"省科学技术信息研究所党委","children":["第一党支部","第二党支部","第三党支部","第四党支部","第五党支部","第六党支部","第七党支部"]},
       					{"name":"省原子能研究院党委","children":["第一党支部","第二党支部","第三党支部","第四党支部"]},
       					{"name":"省计算机研究院党委","children":["第一党支部","第二党支部","第三党支部","第四党支部"]},
       					{"name":"省科学器材公司党委","children":["第一党支部","第二党支部","离退休党支部"]},
       					{"name":"中国地质科学院矿产综合利用研究所党委","children":["所直党支部","矿冶党支部","分析党支部","后勤党支部","资环党支部"]},
       					{"name":"省科技促进发展研究中心党支部","children":[]},
       					{"name":"省科技交流中心党支部","children":[]},
       					{"name":"省农村科技发展中心党支部","children":[]},
       					{"name":"省科学技术研究成果档案馆党支部","children":[]}]       		
       	}
       	
      var posotion = [[0,0],[400,-100],[-700,200],[-400,-400],[-600,0],[-400,400],[0,200],[400,300],[0,-500],[-200,-200],[200,-200],[0,400]];
       	
       var nodess =[]
       var count = 0;
       var firstSize = 100;
       var secondSize = 43.256;
       var thirdSize = 20;
       	var nodeSig = {
       	  	"id":count,
       	  	"name":baseData.name,
       	  	"symbolSize": firstSize,
       	  	"x":posotion[0][0],
       	  	"y":posotion[0][1],
       	  	"attributes":{
       	  		"modularity_class": 0
       	  	}
       	  }
       	nodess.push(nodeSig);
       	if(baseData.children !==""){
       for(var i in baseData.children){
       	   count ++;
       	   nodeSig = {
       	  	"id":count,
       	  	"name":baseData.children[i].name,
       	  	"symbolSize": secondSize,
       	  	"x":posotion[parseInt(i)+1][0],
       	  	"y":posotion[parseInt(i)+1][1],
       	  	"attributes":{
       	  		"modularity_class": parseInt(i)+1
       	  	}
       	  }
       	   nodess.push(nodeSig);
       	   if(baseData.children[i].children !==""){
       	   	for(var j in baseData.children[i].children){
       	   		var x = posotion[parseInt(i)+1][0],y=  posotion[parseInt(i)+1][1];
       	   		function GetRandomNum(Min,Max)
					{   
					var Range = Max - Min
					var Rand = Math.random(); 
					return(Min + Math.round(Rand * Range));   
					}
			switch(parseInt(i)+1){
				case 1: px = x  + (GetRandomNum(50,200));
						py = y + (GetRandomNum(-400,300))
						break;
				case 2: px = x  + (GetRandomNum(-200,-50));
						py = y + (GetRandomNum(0,200))
						break;
				case 3: px = x  + (GetRandomNum(-200,0));
						py = y + (GetRandomNum(-200,200))
						break;
				case 4: px = x  + (GetRandomNum(-200,0));
						py = y + (GetRandomNum(-200,200))
						break;
				case 5: px = x  + (GetRandomNum(-200,0));
						py = y + (GetRandomNum(-200,200))
						break;
				case 6: px = x  + (GetRandomNum(-200,200));
						py = y + (GetRandomNum(0,200))
						break;	
				case 7: px = x  + (GetRandomNum(-200,200));
						py = y + (GetRandomNum(0,200))
						break;
				
				default:break;
			}
       	   		
       	   //	var px = x  + (GetRandomNum(-100,100)),py = y + (GetRandomNum(-100,100)) ;
       	   	
       	   	count ++;
       	   	nodeSig = {
       	  	"id":count,
       	  	"name":baseData.children[i].children[j],
       	  	"symbolSize": thirdSize -2,
       	  	"x":px,
       	  	"y":py,
       	  	"attributes":{
       	  		"modularity_class": parseInt(i)+1
       	  	}
       	  }
       	   	nodess.push(nodeSig);       	   	
       	   }
       	   }
       }
       }
       	
       	var linkS =[];
       	var id= 0;
       	var plusNum = 0;
       	var baseNum = 1;
       	var linkP =  {
            "id": 0,
            "name": null,
            "source": 0,
            "target": 1,
            "lineStyle": {
                "normal": {}
            }
        }
       	//linkS.push(linkP);
       	for(var i=0;i<baseData.children.length;i++){
       		 //plusNum +=baseData.children[i].children.length
       		 linkP =  {
            "id": id,
            "name": null,
            "source": 0,
            "target": baseNum,
            "lineStyle": {
                "normal": {}
            }
        }       		 
       	  linkS.push(linkP); 
       	  for(var j=0;j<baseData.children[i].children.length;j++){    
       	  id++
       	 linkP =  {
            "id": id,
            "name": null,
            "source": baseNum,
            "target": baseNum + j+1,
            "lineStyle": {
                "normal": {}
            }
        }
       	 linkS.push(linkP); 
       	}
       	  baseNum += baseData.children[i].children.length +1;
       	  id++;
       	}
       	
       	
       	var graph = {"nodes":nodess,"links":linkS}
       	
		//console.log(JSON.stringify(nodess))
		//console.log(JSON.stringify(linkS))
		//console.log(JSON.stringify(graph))
		
		//var graph = {"nodes":[{"id":0,"name":"中共四川省科学技术厅直属机关委员会","symbolSize":100,"x":0,"y":0,"attributes":{"modularity_class":0}},{"id":1,"name":"科技厅机关","symbolSize":43.256,"x":400,"y":-100,"attributes":{"modularity_class":1}},{"id":2,"name":"机关第一党支部","symbolSize":18,"x":571,"y":-230,"attributes":{"modularity_class":1}},{"id":3,"name":"机关第二党支部","symbolSize":18,"x":579,"y":-484,"attributes":{"modularity_class":1}},{"id":4,"name":"机关第三党支部","symbolSize":18,"x":502,"y":-60,"attributes":{"modularity_class":1}},{"id":5,"name":"机关第四党支部","symbolSize":18,"x":588,"y":-461,"attributes":{"modularity_class":1}},{"id":6,"name":"机关第五党支部","symbolSize":18,"x":540,"y":-389,"attributes":{"modularity_class":1}},{"id":7,"name":"机关第六党支部","symbolSize":18,"x":502,"y":-156,"attributes":{"modularity_class":1}},{"id":8,"name":"机关第七党支部","symbolSize":18,"x":540,"y":-295,"attributes":{"modularity_class":1}},{"id":9,"name":"机关第八党支部","symbolSize":18,"x":538,"y":-192,"attributes":{"modularity_class":1}},{"id":10,"name":"机关第九党支部","symbolSize":18,"x":538,"y":-439,"attributes":{"modularity_class":1}},{"id":11,"name":"机关第十党支部","symbolSize":18,"x":575,"y":-429,"attributes":{"modularity_class":1}},{"id":12,"name":"机关第十一党支部","symbolSize":18,"x":458,"y":-68,"attributes":{"modularity_class":1}},{"id":13,"name":"机关第十二党支部","symbolSize":18,"x":572,"y":86,"attributes":{"modularity_class":1}},{"id":14,"name":"机关第十三党支部","symbolSize":18,"x":453,"y":92,"attributes":{"modularity_class":1}},{"id":15,"name":"服务中心党支部","symbolSize":18,"x":461,"y":-150,"attributes":{"modularity_class":1}},{"id":16,"name":"机关退休职工党支部","symbolSize":18,"x":563,"y":-165,"attributes":{"modularity_class":1}},{"id":17,"name":"机关离休干部党支部","symbolSize":18,"x":507,"y":-333,"attributes":{"modularity_class":1}},{"id":18,"name":"省自然资源科学研究院党委 ","symbolSize":43.256,"x":-700,"y":200,"attributes":{"modularity_class":2}},{"id":19,"name":"一党支部","symbolSize":18,"x":-863,"y":359,"attributes":{"modularity_class":2}},{"id":20,"name":"二党支部","symbolSize":18,"x":-815,"y":284,"attributes":{"modularity_class":2}},{"id":21,"name":"三党支部","symbolSize":18,"x":-890,"y":342,"attributes":{"modularity_class":2}},{"id":22,"name":"四党支部","symbolSize":18,"x":-801,"y":269,"attributes":{"modularity_class":2}},{"id":23,"name":"生物站党支部","symbolSize":18,"x":-856,"y":232,"attributes":{"modularity_class":2}},{"id":24,"name":"离休党支部","symbolSize":18,"x":-761,"y":386,"attributes":{"modularity_class":2}},{"id":25,"name":"退休党支部","symbolSize":18,"x":-794,"y":376,"attributes":{"modularity_class":2}},{"id":26,"name":"省科学技术信息研究所党委","symbolSize":43.256,"x":-400,"y":-400,"attributes":{"modularity_class":3}},{"id":27,"name":"第一党支部","symbolSize":18,"x":-598,"y":-442,"attributes":{"modularity_class":3}},{"id":28,"name":"第二党支部","symbolSize":18,"x":-534,"y":-258,"attributes":{"modularity_class":3}},{"id":29,"name":"第三党支部","symbolSize":18,"x":-403,"y":-505,"attributes":{"modularity_class":3}},{"id":30,"name":"第四党支部","symbolSize":18,"x":-434,"y":-485,"attributes":{"modularity_class":3}},{"id":31,"name":"第五党支部","symbolSize":18,"x":-587,"y":-393,"attributes":{"modularity_class":3}},{"id":32,"name":"第六党支部","symbolSize":18,"x":-534,"y":-475,"attributes":{"modularity_class":3}},{"id":33,"name":"第七党支部","symbolSize":18,"x":-447,"y":-536,"attributes":{"modularity_class":3}},{"id":34,"name":"省原子能研究院党委","symbolSize":43.256,"x":-600,"y":0,"attributes":{"modularity_class":4}},{"id":35,"name":"第一党支部","symbolSize":18,"x":-716,"y":-64,"attributes":{"modularity_class":4}},{"id":36,"name":"第二党支部","symbolSize":18,"x":-740,"y":-74,"attributes":{"modularity_class":4}},{"id":37,"name":"第三党支部","symbolSize":18,"x":-794,"y":-79,"attributes":{"modularity_class":4}},{"id":38,"name":"第四党支部","symbolSize":18,"x":-660,"y":157,"attributes":{"modularity_class":4}},{"id":39,"name":"省计算机研究院党委","symbolSize":43.256,"x":-400,"y":400,"attributes":{"modularity_class":5}},{"id":40,"name":"第一党支部","symbolSize":18,"x":-513,"y":487,"attributes":{"modularity_class":5}},{"id":41,"name":"第二党支部","symbolSize":18,"x":-424,"y":286,"attributes":{"modularity_class":5}},{"id":42,"name":"第三党支部","symbolSize":18,"x":-551,"y":281,"attributes":{"modularity_class":5}},{"id":43,"name":"第四党支部","symbolSize":18,"x":-507,"y":403,"attributes":{"modularity_class":5}},{"id":44,"name":"省科学器材公司党委","symbolSize":43.256,"x":0,"y":200,"attributes":{"modularity_class":6}},{"id":45,"name":"第一党支部","symbolSize":18,"x":-27,"y":340,"attributes":{"modularity_class":6}},{"id":46,"name":"第二党支部","symbolSize":18,"x":152,"y":261,"attributes":{"modularity_class":6}},{"id":47,"name":"离退休党支部","symbolSize":18,"x":-187,"y":372,"attributes":{"modularity_class":6}},{"id":48,"name":"中国地质科学院矿产综合利用研究所党委","symbolSize":43.256,"x":400,"y":300,"attributes":{"modularity_class":7}},{"id":49,"name":"所直党支部","symbolSize":18,"x":493,"y":445,"attributes":{"modularity_class":7}},{"id":50,"name":"矿冶党支部","symbolSize":18,"x":361,"y":490,"attributes":{"modularity_class":7}},{"id":51,"name":"分析党支部","symbolSize":18,"x":492,"y":337,"attributes":{"modularity_class":7}},{"id":52,"name":"后勤党支部","symbolSize":18,"x":432,"y":327,"attributes":{"modularity_class":7}},{"id":53,"name":"资环党支部","symbolSize":18,"x":543,"y":305,"attributes":{"modularity_class":7}},{"id":54,"name":"省科技促进发展研究中心党支部","symbolSize":43.256,"x":0,"y":-500,"attributes":{"modularity_class":8}},{"id":55,"name":"省科技交流中心党支部","symbolSize":43.256,"x":-200,"y":-200,"attributes":{"modularity_class":9}},{"id":56,"name":"省农村科技发展中心党支部","symbolSize":43.256,"x":200,"y":-200,"attributes":{"modularity_class":10}},{"id":57,"name":"省科学技术研究成果档案馆党支部","symbolSize":43.256,"x":0,"y":400,"attributes":{"modularity_class":11}}],"links":[{"id":0,"name":null,"source":0,"target":1,"lineStyle":{"normal":{}}},{"id":1,"name":null,"source":1,"target":2,"lineStyle":{"normal":{}}},{"id":2,"name":null,"source":1,"target":3,"lineStyle":{"normal":{}}},{"id":3,"name":null,"source":1,"target":4,"lineStyle":{"normal":{}}},{"id":4,"name":null,"source":1,"target":5,"lineStyle":{"normal":{}}},{"id":5,"name":null,"source":1,"target":6,"lineStyle":{"normal":{}}},{"id":6,"name":null,"source":1,"target":7,"lineStyle":{"normal":{}}},{"id":7,"name":null,"source":1,"target":8,"lineStyle":{"normal":{}}},{"id":8,"name":null,"source":1,"target":9,"lineStyle":{"normal":{}}},{"id":9,"name":null,"source":1,"target":10,"lineStyle":{"normal":{}}},{"id":10,"name":null,"source":1,"target":11,"lineStyle":{"normal":{}}},{"id":11,"name":null,"source":1,"target":12,"lineStyle":{"normal":{}}},{"id":12,"name":null,"source":1,"target":13,"lineStyle":{"normal":{}}},{"id":13,"name":null,"source":1,"target":14,"lineStyle":{"normal":{}}},{"id":14,"name":null,"source":1,"target":15,"lineStyle":{"normal":{}}},{"id":15,"name":null,"source":1,"target":16,"lineStyle":{"normal":{}}},{"id":16,"name":null,"source":1,"target":17,"lineStyle":{"normal":{}}},{"id":17,"name":null,"source":0,"target":18,"lineStyle":{"normal":{}}},{"id":18,"name":null,"source":18,"target":19,"lineStyle":{"normal":{}}},{"id":19,"name":null,"source":18,"target":20,"lineStyle":{"normal":{}}},{"id":20,"name":null,"source":18,"target":21,"lineStyle":{"normal":{}}},{"id":21,"name":null,"source":18,"target":22,"lineStyle":{"normal":{}}},{"id":22,"name":null,"source":18,"target":23,"lineStyle":{"normal":{}}},{"id":23,"name":null,"source":18,"target":24,"lineStyle":{"normal":{}}},{"id":24,"name":null,"source":18,"target":25,"lineStyle":{"normal":{}}},{"id":25,"name":null,"source":0,"target":26,"lineStyle":{"normal":{}}},{"id":26,"name":null,"source":26,"target":27,"lineStyle":{"normal":{}}},{"id":27,"name":null,"source":26,"target":28,"lineStyle":{"normal":{}}},{"id":28,"name":null,"source":26,"target":29,"lineStyle":{"normal":{}}},{"id":29,"name":null,"source":26,"target":30,"lineStyle":{"normal":{}}},{"id":30,"name":null,"source":26,"target":31,"lineStyle":{"normal":{}}},{"id":31,"name":null,"source":26,"target":32,"lineStyle":{"normal":{}}},{"id":32,"name":null,"source":26,"target":33,"lineStyle":{"normal":{}}},{"id":33,"name":null,"source":0,"target":34,"lineStyle":{"normal":{}}},{"id":34,"name":null,"source":34,"target":35,"lineStyle":{"normal":{}}},{"id":35,"name":null,"source":34,"target":36,"lineStyle":{"normal":{}}},{"id":36,"name":null,"source":34,"target":37,"lineStyle":{"normal":{}}},{"id":37,"name":null,"source":34,"target":38,"lineStyle":{"normal":{}}},{"id":38,"name":null,"source":0,"target":39,"lineStyle":{"normal":{}}},{"id":39,"name":null,"source":39,"target":40,"lineStyle":{"normal":{}}},{"id":40,"name":null,"source":39,"target":41,"lineStyle":{"normal":{}}},{"id":41,"name":null,"source":39,"target":42,"lineStyle":{"normal":{}}},{"id":42,"name":null,"source":39,"target":43,"lineStyle":{"normal":{}}},{"id":43,"name":null,"source":0,"target":44,"lineStyle":{"normal":{}}},{"id":44,"name":null,"source":44,"target":45,"lineStyle":{"normal":{}}},{"id":45,"name":null,"source":44,"target":46,"lineStyle":{"normal":{}}},{"id":46,"name":null,"source":44,"target":47,"lineStyle":{"normal":{}}},{"id":47,"name":null,"source":0,"target":48,"lineStyle":{"normal":{}}},{"id":48,"name":null,"source":48,"target":49,"lineStyle":{"normal":{}}},{"id":49,"name":null,"source":48,"target":50,"lineStyle":{"normal":{}}},{"id":50,"name":null,"source":48,"target":51,"lineStyle":{"normal":{}}},{"id":51,"name":null,"source":48,"target":52,"lineStyle":{"normal":{}}},{"id":52,"name":null,"source":48,"target":53,"lineStyle":{"normal":{}}},{"id":53,"name":null,"source":0,"target":54,"lineStyle":{"normal":{}}},{"id":54,"name":null,"source":0,"target":55,"lineStyle":{"normal":{}}},{"id":55,"name":null,"source":0,"target":56,"lineStyle":{"normal":{}}},{"id":56,"name":null,"source":0,"target":57,"lineStyle":{"normal":{}}}]};
   // var graph = {"nodes":[{"id":0,"name":"中共四川省科学技术厅直属机关委员会","symbolSize":100,"x":0,"y":0,"attributes":{"modularity_class":0}},{"id":1,"name":"科技厅机关","symbolSize":43.256,"x":400,"y":-100,"attributes":{"modularity_class":1}},{"id":2,"name":"机关第一党支部","symbolSize":18,"x":528,"y":-409,"attributes":{"modularity_class":1}},{"id":3,"name":"机关第二党支部","symbolSize":18,"x":524,"y":-354,"attributes":{"modularity_class":1}},{"id":4,"name":"机关第三党支部","symbolSize":18,"x":557,"y":46,"attributes":{"modularity_class":1}},{"id":5,"name":"机关第四党支部","symbolSize":18,"x":538,"y":-32,"attributes":{"modularity_class":1}},{"id":6,"name":"机关第五党支部","symbolSize":18,"x":500,"y":-421,"attributes":{"modularity_class":1}},{"id":7,"name":"机关第六党支部","symbolSize":18,"x":494,"y":-213,"attributes":{"modularity_class":1}},{"id":8,"name":"机关第七党支部","symbolSize":18,"x":471,"y":37,"attributes":{"modularity_class":1}},{"id":9,"name":"机关第八党支部","symbolSize":18,"x":535,"y":-75,"attributes":{"modularity_class":1}},{"id":10,"name":"机关第九党支部","symbolSize":18,"x":505,"y":-390,"attributes":{"modularity_class":1}},{"id":11,"name":"机关第十党支部","symbolSize":18,"x":566,"y":-38,"attributes":{"modularity_class":1}},{"id":12,"name":"机关第十一党支部","symbolSize":18,"x":565,"y":-184,"attributes":{"modularity_class":1}},{"id":13,"name":"机关第十二党支部","symbolSize":18,"x":557,"y":-199,"attributes":{"modularity_class":1}},{"id":14,"name":"机关第十三党支部","symbolSize":18,"x":529,"y":85,"attributes":{"modularity_class":1}},{"id":15,"name":"服务中心党支部","symbolSize":18,"x":526,"y":-279,"attributes":{"modularity_class":1}},{"id":16,"name":"机关退休职工党支部","symbolSize":18,"x":502,"y":-101,"attributes":{"modularity_class":1}},{"id":17,"name":"机关离休干部党支部","symbolSize":18,"x":551,"y":-344,"attributes":{"modularity_class":1}},{"id":18,"name":"省自然资源科学研究院党委 ","symbolSize":43.256,"x":-700,"y":200,"attributes":{"modularity_class":2}},{"id":19,"name":"一党支部","symbolSize":18,"x":-830,"y":240,"attributes":{"modularity_class":2}},{"id":20,"name":"二党支部","symbolSize":18,"x":-786,"y":221,"attributes":{"modularity_class":2}},{"id":21,"name":"三党支部","symbolSize":18,"x":-801,"y":267,"attributes":{"modularity_class":2}},{"id":22,"name":"四党支部","symbolSize":18,"x":-770,"y":350,"attributes":{"modularity_class":2}},{"id":23,"name":"生物站党支部","symbolSize":18,"x":-826,"y":394,"attributes":{"modularity_class":2}},{"id":24,"name":"离休党支部","symbolSize":18,"x":-855,"y":364,"attributes":{"modularity_class":2}},{"id":25,"name":"退休党支部","symbolSize":18,"x":-753,"y":221,"attributes":{"modularity_class":2}},{"id":26,"name":"省科学技术信息研究所党委","symbolSize":43.256,"x":-400,"y":-400,"attributes":{"modularity_class":3}},{"id":27,"name":"第一党支部","symbolSize":18,"x":-598,"y":-407,"attributes":{"modularity_class":3}},{"id":28,"name":"第二党支部","symbolSize":18,"x":-475,"y":-409,"attributes":{"modularity_class":3}},{"id":29,"name":"第三党支部","symbolSize":18,"x":-487,"y":-333,"attributes":{"modularity_class":3}},{"id":30,"name":"第四党支部","symbolSize":18,"x":-449,"y":-212,"attributes":{"modularity_class":3}},{"id":31,"name":"第五党支部","symbolSize":18,"x":-565,"y":-306,"attributes":{"modularity_class":3}},{"id":32,"name":"第六党支部","symbolSize":18,"x":-534,"y":-484,"attributes":{"modularity_class":3}},{"id":33,"name":"第七党支部","symbolSize":18,"x":-415,"y":-219,"attributes":{"modularity_class":3}},{"id":34,"name":"省原子能研究院党委","symbolSize":43.256,"x":-600,"y":0,"attributes":{"modularity_class":4}},{"id":35,"name":"第一党支部","symbolSize":18,"x":-648,"y":121,"attributes":{"modularity_class":4}},{"id":36,"name":"第二党支部","symbolSize":18,"x":-739,"y":175,"attributes":{"modularity_class":4}},{"id":37,"name":"第三党支部","symbolSize":18,"x":-659,"y":181,"attributes":{"modularity_class":4}},{"id":38,"name":"第四党支部","symbolSize":18,"x":-668,"y":-135,"attributes":{"modularity_class":4}},{"id":39,"name":"省计算机研究院党委","symbolSize":43.256,"x":-400,"y":400,"attributes":{"modularity_class":5}},{"id":40,"name":"第一党支部","symbolSize":18,"x":-417,"y":452,"attributes":{"modularity_class":5}},{"id":41,"name":"第二党支部","symbolSize":18,"x":-477,"y":468,"attributes":{"modularity_class":5}},{"id":42,"name":"第三党支部","symbolSize":18,"x":-558,"y":212,"attributes":{"modularity_class":5}},{"id":43,"name":"第四党支部","symbolSize":18,"x":-450,"y":479,"attributes":{"modularity_class":5}},{"id":44,"name":"省科学器材公司党委","symbolSize":43.256,"x":0,"y":200,"attributes":{"modularity_class":6}},{"id":45,"name":"第一党支部","symbolSize":18,"x":150,"y":329,"attributes":{"modularity_class":6}},{"id":46,"name":"第二党支部","symbolSize":18,"x":-160,"y":226,"attributes":{"modularity_class":6}},{"id":47,"name":"离退休党支部","symbolSize":18,"x":154,"y":336,"attributes":{"modularity_class":6}},{"id":48,"name":"中国地质科学院矿产综合利用研究所党委","symbolSize":43.256,"x":400,"y":300,"attributes":{"modularity_class":7}},{"id":49,"name":"所直党支部","symbolSize":18,"x":579,"y":477,"attributes":{"modularity_class":7}},{"id":50,"name":"矿冶党支部","symbolSize":18,"x":570,"y":429,"attributes":{"modularity_class":7}},{"id":51,"name":"分析党支部","symbolSize":18,"x":366,"y":402,"attributes":{"modularity_class":7}},{"id":52,"name":"后勤党支部","symbolSize":18,"x":230,"y":408,"attributes":{"modularity_class":7}},{"id":53,"name":"资环党支部","symbolSize":18,"x":354,"y":449,"attributes":{"modularity_class":7}},{"id":54,"name":"省科技促进发展研究中心党支部","symbolSize":43.256,"x":0,"y":-500,"attributes":{"modularity_class":8}},{"id":55,"name":"省科技交流中心党支部","symbolSize":43.256,"x":-200,"y":-200,"attributes":{"modularity_class":9}},{"id":56,"name":"省农村科技发展中心党支部","symbolSize":43.256,"x":200,"y":-200,"attributes":{"modularity_class":10}},{"id":57,"name":"省科学技术研究成果档案馆党支部","symbolSize":43.256,"x":0,"y":400,"attributes":{"modularity_class":11}}],"links":[{"id":0,"name":null,"source":0,"target":1,"lineStyle":{"normal":{}}},{"id":1,"name":null,"source":1,"target":2,"lineStyle":{"normal":{}}},{"id":2,"name":null,"source":1,"target":3,"lineStyle":{"normal":{}}},{"id":3,"name":null,"source":1,"target":4,"lineStyle":{"normal":{}}},{"id":4,"name":null,"source":1,"target":5,"lineStyle":{"normal":{}}},{"id":5,"name":null,"source":1,"target":6,"lineStyle":{"normal":{}}},{"id":6,"name":null,"source":1,"target":7,"lineStyle":{"normal":{}}},{"id":7,"name":null,"source":1,"target":8,"lineStyle":{"normal":{}}},{"id":8,"name":null,"source":1,"target":9,"lineStyle":{"normal":{}}},{"id":9,"name":null,"source":1,"target":10,"lineStyle":{"normal":{}}},{"id":10,"name":null,"source":1,"target":11,"lineStyle":{"normal":{}}},{"id":11,"name":null,"source":1,"target":12,"lineStyle":{"normal":{}}},{"id":12,"name":null,"source":1,"target":13,"lineStyle":{"normal":{}}},{"id":13,"name":null,"source":1,"target":14,"lineStyle":{"normal":{}}},{"id":14,"name":null,"source":1,"target":15,"lineStyle":{"normal":{}}},{"id":15,"name":null,"source":1,"target":16,"lineStyle":{"normal":{}}},{"id":16,"name":null,"source":1,"target":17,"lineStyle":{"normal":{}}},{"id":17,"name":null,"source":0,"target":18,"lineStyle":{"normal":{}}},{"id":18,"name":null,"source":18,"target":19,"lineStyle":{"normal":{}}},{"id":19,"name":null,"source":18,"target":20,"lineStyle":{"normal":{}}},{"id":20,"name":null,"source":18,"target":21,"lineStyle":{"normal":{}}},{"id":21,"name":null,"source":18,"target":22,"lineStyle":{"normal":{}}},{"id":22,"name":null,"source":18,"target":23,"lineStyle":{"normal":{}}},{"id":23,"name":null,"source":18,"target":24,"lineStyle":{"normal":{}}},{"id":24,"name":null,"source":18,"target":25,"lineStyle":{"normal":{}}},{"id":25,"name":null,"source":0,"target":26,"lineStyle":{"normal":{}}},{"id":26,"name":null,"source":26,"target":27,"lineStyle":{"normal":{}}},{"id":27,"name":null,"source":26,"target":28,"lineStyle":{"normal":{}}},{"id":28,"name":null,"source":26,"target":29,"lineStyle":{"normal":{}}},{"id":29,"name":null,"source":26,"target":30,"lineStyle":{"normal":{}}},{"id":30,"name":null,"source":26,"target":31,"lineStyle":{"normal":{}}},{"id":31,"name":null,"source":26,"target":32,"lineStyle":{"normal":{}}},{"id":32,"name":null,"source":26,"target":33,"lineStyle":{"normal":{}}},{"id":33,"name":null,"source":0,"target":34,"lineStyle":{"normal":{}}},{"id":34,"name":null,"source":34,"target":35,"lineStyle":{"normal":{}}},{"id":35,"name":null,"source":34,"target":36,"lineStyle":{"normal":{}}},{"id":36,"name":null,"source":34,"target":37,"lineStyle":{"normal":{}}},{"id":37,"name":null,"source":34,"target":38,"lineStyle":{"normal":{}}},{"id":38,"name":null,"source":0,"target":39,"lineStyle":{"normal":{}}},{"id":39,"name":null,"source":39,"target":40,"lineStyle":{"normal":{}}},{"id":40,"name":null,"source":39,"target":41,"lineStyle":{"normal":{}}},{"id":41,"name":null,"source":39,"target":42,"lineStyle":{"normal":{}}},{"id":42,"name":null,"source":39,"target":43,"lineStyle":{"normal":{}}},{"id":43,"name":null,"source":0,"target":44,"lineStyle":{"normal":{}}},{"id":44,"name":null,"source":44,"target":45,"lineStyle":{"normal":{}}},{"id":45,"name":null,"source":44,"target":46,"lineStyle":{"normal":{}}},{"id":46,"name":null,"source":44,"target":47,"lineStyle":{"normal":{}}},{"id":47,"name":null,"source":0,"target":48,"lineStyle":{"normal":{}}},{"id":48,"name":null,"source":48,"target":49,"lineStyle":{"normal":{}}},{"id":49,"name":null,"source":48,"target":50,"lineStyle":{"normal":{}}},{"id":50,"name":null,"source":48,"target":51,"lineStyle":{"normal":{}}},{"id":51,"name":null,"source":48,"target":52,"lineStyle":{"normal":{}}},{"id":52,"name":null,"source":48,"target":53,"lineStyle":{"normal":{}}},{"id":53,"name":null,"source":0,"target":54,"lineStyle":{"normal":{}}},{"id":54,"name":null,"source":0,"target":55,"lineStyle":{"normal":{}}},{"id":55,"name":null,"source":0,"target":56,"lineStyle":{"normal":{}}},{"id":56,"name":null,"source":0,"target":57,"lineStyle":{"normal":{}}}]}
   //var graph = {"nodes":[{"id":0,"name":"中共四川省科学技术厅直属机关委员会","symbolSize":100,"x":0,"y":0,"attributes":{"modularity_class":0}},{"id":1,"name":"科技厅机关","symbolSize":43.256,"x":400,"y":-100,"attributes":{"modularity_class":1}},{"id":2,"name":"机关第一党支部","symbolSize":18,"x":580,"y":-238,"attributes":{"modularity_class":1}},{"id":3,"name":"机关第二党支部","symbolSize":18,"x":501,"y":-193,"attributes":{"modularity_class":1}},{"id":4,"name":"机关第三党支部","symbolSize":18,"x":555,"y":18,"attributes":{"modularity_class":1}},{"id":5,"name":"机关第四党支部","symbolSize":18,"x":465,"y":-467,"attributes":{"modularity_class":1}},{"id":6,"name":"机关第五党支部","symbolSize":18,"x":581,"y":-108,"attributes":{"modularity_class":1}},{"id":7,"name":"机关第六党支部","symbolSize":18,"x":537,"y":14,"attributes":{"modularity_class":1}},{"id":8,"name":"机关第七党支部","symbolSize":18,"x":468,"y":-208,"attributes":{"modularity_class":1}},{"id":9,"name":"机关第八党支部","symbolSize":18,"x":575,"y":70,"attributes":{"modularity_class":1}},{"id":10,"name":"机关第九党支部","symbolSize":18,"x":550,"y":-293,"attributes":{"modularity_class":1}},{"id":11,"name":"机关第十党支部","symbolSize":18,"x":537,"y":-293,"attributes":{"modularity_class":1}},{"id":12,"name":"机关第十一党支部","symbolSize":18,"x":489,"y":-404,"attributes":{"modularity_class":1}},{"id":13,"name":"机关第十二党支部","symbolSize":18,"x":519,"y":-443,"attributes":{"modularity_class":1}},{"id":14,"name":"机关第十三党支部","symbolSize":18,"x":483,"y":-19,"attributes":{"modularity_class":1}},{"id":15,"name":"服务中心党支部","symbolSize":18,"x":506,"y":-388,"attributes":{"modularity_class":1}},{"id":16,"name":"机关退休职工党支部","symbolSize":18,"x":524,"y":-464,"attributes":{"modularity_class":1}},{"id":17,"name":"机关离休干部党支部","symbolSize":18,"x":498,"y":-9,"attributes":{"modularity_class":1}},{"id":18,"name":"省自然资源科学研究院党委 ","symbolSize":43.256,"x":-700,"y":200,"attributes":{"modularity_class":2}},{"id":19,"name":"一党支部","symbolSize":18,"x":-805,"y":375,"attributes":{"modularity_class":2}},{"id":20,"name":"二党支部","symbolSize":18,"x":-854,"y":368,"attributes":{"modularity_class":2}},{"id":21,"name":"三党支部","symbolSize":18,"x":-806,"y":377,"attributes":{"modularity_class":2}},{"id":22,"name":"四党支部","symbolSize":18,"x":-795,"y":206,"attributes":{"modularity_class":2}},{"id":23,"name":"生物站党支部","symbolSize":18,"x":-858,"y":342,"attributes":{"modularity_class":2}},{"id":24,"name":"离休党支部","symbolSize":18,"x":-816,"y":300,"attributes":{"modularity_class":2}},{"id":25,"name":"退休党支部","symbolSize":18,"x":-785,"y":336,"attributes":{"modularity_class":2}},{"id":26,"name":"省科学技术信息研究所党委","symbolSize":43.256,"x":-400,"y":-400,"attributes":{"modularity_class":3}},{"id":27,"name":"第一党支部","symbolSize":18,"x":-596,"y":-216,"attributes":{"modularity_class":3}},{"id":28,"name":"第二党支部","symbolSize":18,"x":-445,"y":-503,"attributes":{"modularity_class":3}},{"id":29,"name":"第三党支部","symbolSize":18,"x":-555,"y":-271,"attributes":{"modularity_class":3}},{"id":30,"name":"第四党支部","symbolSize":18,"x":-524,"y":-416,"attributes":{"modularity_class":3}},{"id":31,"name":"第五党支部","symbolSize":18,"x":-469,"y":-510,"attributes":{"modularity_class":3}},{"id":32,"name":"第六党支部","symbolSize":18,"x":-485,"y":-382,"attributes":{"modularity_class":3}},{"id":33,"name":"第七党支部","symbolSize":18,"x":-571,"y":-423,"attributes":{"modularity_class":3}},{"id":34,"name":"省原子能研究院党委","symbolSize":43.256,"x":-600,"y":0,"attributes":{"modularity_class":4}},{"id":35,"name":"第一党支部","symbolSize":18,"x":-649,"y":187,"attributes":{"modularity_class":4}},{"id":36,"name":"第二党支部","symbolSize":18,"x":-617,"y":43,"attributes":{"modularity_class":4}},{"id":37,"name":"第三党支部","symbolSize":18,"x":-781,"y":-178,"attributes":{"modularity_class":4}},{"id":38,"name":"第四党支部","symbolSize":18,"x":-654,"y":138,"attributes":{"modularity_class":4}},{"id":39,"name":"省计算机研究院党委","symbolSize":43.256,"x":-400,"y":400,"attributes":{"modularity_class":5}},{"id":40,"name":"第一党支部","symbolSize":18,"x":-414,"y":323,"attributes":{"modularity_class":5}},{"id":41,"name":"第二党支部","symbolSize":18,"x":-418,"y":527,"attributes":{"modularity_class":5}},{"id":42,"name":"第三党支部","symbolSize":18,"x":-476,"y":484,"attributes":{"modularity_class":5}},{"id":43,"name":"第四党支部","symbolSize":18,"x":-420,"y":557,"attributes":{"modularity_class":5}},{"id":44,"name":"省科学器材公司党委","symbolSize":43.256,"x":0,"y":200,"attributes":{"modularity_class":6}},{"id":45,"name":"第一党支部","symbolSize":18,"x":-119,"y":233,"attributes":{"modularity_class":6}},{"id":46,"name":"第二党支部","symbolSize":18,"x":-54,"y":255,"attributes":{"modularity_class":6}},{"id":47,"name":"离退休党支部","symbolSize":18,"x":193,"y":373,"attributes":{"modularity_class":6}},{"id":48,"name":"中国地质科学院矿产综合利用研究所党委","symbolSize":43.256,"x":400,"y":300,"attributes":{"modularity_class":7}},{"id":49,"name":"所直党支部","symbolSize":18,"x":503,"y":458,"attributes":{"modularity_class":7}},{"id":50,"name":"矿冶党支部","symbolSize":18,"x":553,"y":461,"attributes":{"modularity_class":7}},{"id":51,"name":"分析党支部","symbolSize":18,"x":227,"y":462,"attributes":{"modularity_class":7}},{"id":52,"name":"后勤党支部","symbolSize":18,"x":340,"y":410,"attributes":{"modularity_class":7}},{"id":53,"name":"资环党支部","symbolSize":18,"x":546,"y":444,"attributes":{"modularity_class":7}},{"id":54,"name":"省科技促进发展研究中心党支部","symbolSize":43.256,"x":0,"y":-500,"attributes":{"modularity_class":8}},{"id":55,"name":"省科技交流中心党支部","symbolSize":43.256,"x":-200,"y":-200,"attributes":{"modularity_class":9}},{"id":56,"name":"省农村科技发展中心党支部","symbolSize":43.256,"x":200,"y":-200,"attributes":{"modularity_class":10}},{"id":57,"name":"省科学技术研究成果档案馆党支部","symbolSize":43.256,"x":0,"y":400,"attributes":{"modularity_class":11}}],"links":[{"id":0,"name":null,"source":0,"target":1,"lineStyle":{"normal":{}}},{"id":1,"name":null,"source":1,"target":2,"lineStyle":{"normal":{}}},{"id":2,"name":null,"source":1,"target":3,"lineStyle":{"normal":{}}},{"id":3,"name":null,"source":1,"target":4,"lineStyle":{"normal":{}}},{"id":4,"name":null,"source":1,"target":5,"lineStyle":{"normal":{}}},{"id":5,"name":null,"source":1,"target":6,"lineStyle":{"normal":{}}},{"id":6,"name":null,"source":1,"target":7,"lineStyle":{"normal":{}}},{"id":7,"name":null,"source":1,"target":8,"lineStyle":{"normal":{}}},{"id":8,"name":null,"source":1,"target":9,"lineStyle":{"normal":{}}},{"id":9,"name":null,"source":1,"target":10,"lineStyle":{"normal":{}}},{"id":10,"name":null,"source":1,"target":11,"lineStyle":{"normal":{}}},{"id":11,"name":null,"source":1,"target":12,"lineStyle":{"normal":{}}},{"id":12,"name":null,"source":1,"target":13,"lineStyle":{"normal":{}}},{"id":13,"name":null,"source":1,"target":14,"lineStyle":{"normal":{}}},{"id":14,"name":null,"source":1,"target":15,"lineStyle":{"normal":{}}},{"id":15,"name":null,"source":1,"target":16,"lineStyle":{"normal":{}}},{"id":16,"name":null,"source":1,"target":17,"lineStyle":{"normal":{}}},{"id":17,"name":null,"source":0,"target":18,"lineStyle":{"normal":{}}},{"id":18,"name":null,"source":18,"target":19,"lineStyle":{"normal":{}}},{"id":19,"name":null,"source":18,"target":20,"lineStyle":{"normal":{}}},{"id":20,"name":null,"source":18,"target":21,"lineStyle":{"normal":{}}},{"id":21,"name":null,"source":18,"target":22,"lineStyle":{"normal":{}}},{"id":22,"name":null,"source":18,"target":23,"lineStyle":{"normal":{}}},{"id":23,"name":null,"source":18,"target":24,"lineStyle":{"normal":{}}},{"id":24,"name":null,"source":18,"target":25,"lineStyle":{"normal":{}}},{"id":25,"name":null,"source":0,"target":26,"lineStyle":{"normal":{}}},{"id":26,"name":null,"source":26,"target":27,"lineStyle":{"normal":{}}},{"id":27,"name":null,"source":26,"target":28,"lineStyle":{"normal":{}}},{"id":28,"name":null,"source":26,"target":29,"lineStyle":{"normal":{}}},{"id":29,"name":null,"source":26,"target":30,"lineStyle":{"normal":{}}},{"id":30,"name":null,"source":26,"target":31,"lineStyle":{"normal":{}}},{"id":31,"name":null,"source":26,"target":32,"lineStyle":{"normal":{}}},{"id":32,"name":null,"source":26,"target":33,"lineStyle":{"normal":{}}},{"id":33,"name":null,"source":0,"target":34,"lineStyle":{"normal":{}}},{"id":34,"name":null,"source":34,"target":35,"lineStyle":{"normal":{}}},{"id":35,"name":null,"source":34,"target":36,"lineStyle":{"normal":{}}},{"id":36,"name":null,"source":34,"target":37,"lineStyle":{"normal":{}}},{"id":37,"name":null,"source":34,"target":38,"lineStyle":{"normal":{}}},{"id":38,"name":null,"source":0,"target":39,"lineStyle":{"normal":{}}},{"id":39,"name":null,"source":39,"target":40,"lineStyle":{"normal":{}}},{"id":40,"name":null,"source":39,"target":41,"lineStyle":{"normal":{}}},{"id":41,"name":null,"source":39,"target":42,"lineStyle":{"normal":{}}},{"id":42,"name":null,"source":39,"target":43,"lineStyle":{"normal":{}}},{"id":43,"name":null,"source":0,"target":44,"lineStyle":{"normal":{}}},{"id":44,"name":null,"source":44,"target":45,"lineStyle":{"normal":{}}},{"id":45,"name":null,"source":44,"target":46,"lineStyle":{"normal":{}}},{"id":46,"name":null,"source":44,"target":47,"lineStyle":{"normal":{}}},{"id":47,"name":null,"source":0,"target":48,"lineStyle":{"normal":{}}},{"id":48,"name":null,"source":48,"target":49,"lineStyle":{"normal":{}}},{"id":49,"name":null,"source":48,"target":50,"lineStyle":{"normal":{}}},{"id":50,"name":null,"source":48,"target":51,"lineStyle":{"normal":{}}},{"id":51,"name":null,"source":48,"target":52,"lineStyle":{"normal":{}}},{"id":52,"name":null,"source":48,"target":53,"lineStyle":{"normal":{}}},{"id":53,"name":null,"source":0,"target":54,"lineStyle":{"normal":{}}},{"id":54,"name":null,"source":0,"target":55,"lineStyle":{"normal":{}}},{"id":55,"name":null,"source":0,"target":56,"lineStyle":{"normal":{}}},{"id":56,"name":null,"source":0,"target":57,"lineStyle":{"normal":{}}}]}
  var graph = {"nodes":[{"id":0,"name":"中共四川省科学技术厅直属机关委员会","symbolSize":80,"x":100,"y":350,"attributes":{"modularity_class":0}},{"id":1,"name":"科技厅机关","symbolSize":43.256,"x":400,"y":0,"attributes":{"modularity_class":1}},{"id":2,"name":"机关第一党支部","symbolSize":18,"x":450,"y":-372,"attributes":{"modularity_class":1}},{"id":3,"name":"机关第二党支部","symbolSize":18,"x":548,"y":-154,"attributes":{"modularity_class":1}},{"id":4,"name":"机关第三党支部","symbolSize":18,"x":78,"y":-351,"attributes":{"modularity_class":1}},{"id":5,"name":"机关第四党支部","symbolSize":18,"x":549,"y":-210,"attributes":{"modularity_class":1}},{"id":6,"name":"机关第五党支部","symbolSize":18,"x":569,"y":-56,"attributes":{"modularity_class":1}},{"id":7,"name":"机关第六党支部","symbolSize":18,"x":528,"y":-280,"attributes":{"modularity_class":1}},{"id":8,"name":"机关第七党支部","symbolSize":18,"x":38,"y":0,"attributes":{"modularity_class":1}},{"id":9,"name":"机关第八党支部","symbolSize":18,"x":300,"y":280,"attributes":{"modularity_class":1}},{"id":10,"name":"机关第九党支部","symbolSize":18,"x":580,"y":100,"attributes":{"modularity_class":1}},{"id":11,"name":"机关第十党支部","symbolSize":18,"x":50,"y":-100,"attributes":{"modularity_class":1}},{"id":12,"name":"机关第十一党支部","symbolSize":18,"x":560,"y":50,"attributes":{"modularity_class":1}},{"id":13,"name":"机关第十二党支部","symbolSize":18,"x":0,"y":-200,"attributes":{"modularity_class":1}},{"id":14,"name":"机关第十三党支部","symbolSize":18,"x":490,"y":220,"attributes":{"modularity_class":1}},{"id":15,"name":"服务中心党支部","symbolSize":18,"x":190,"y":230,"attributes":{"modularity_class":1}},{"id":16,"name":"机关退休职工党支部","symbolSize":18,"x":503,"y":156,"attributes":{"modularity_class":1}},{"id":17,"name":"机关离休干部党支部","symbolSize":18,"x":165,"y":-300,"attributes":{"modularity_class":1}},{"id":18,"name":"省自然资源科学研究院党委 ","symbolSize":43.256,"x":-700,"y":500,"attributes":{"modularity_class":2}},{"id":19,"name":"一党支部","symbolSize":18,"x":-857,"y":594,"attributes":{"modularity_class":2}},{"id":20,"name":"二党支部","symbolSize":18,"x":-630,"y":668,"attributes":{"modularity_class":2}},{"id":21,"name":"三党支部","symbolSize":18,"x":-850,"y":891,"attributes":{"modularity_class":2}},{"id":22,"name":"四党支部","symbolSize":18,"x":-902,"y":422,"attributes":{"modularity_class":2}},{"id":23,"name":"生物站党支部","symbolSize":18,"x":-502,"y":619,"attributes":{"modularity_class":2}},{"id":24,"name":"离休党支部","symbolSize":18,"x":-609,"y":288,"attributes":{"modularity_class":2}},{"id":25,"name":"退休党支部","symbolSize":18,"x":-775,"y":346,"attributes":{"modularity_class":2}},{"id":26,"name":"省科学技术信息研究所党委","symbolSize":43.256,"x":-450,"y":-250,"attributes":{"modularity_class":3}},{"id":27,"name":"第一党支部","symbolSize":18,"x":-240,"y":-296,"attributes":{"modularity_class":3}},{"id":28,"name":"第二党支部","symbolSize":18,"x":-693,"y":-318,"attributes":{"modularity_class":3}},{"id":29,"name":"第三党支部","symbolSize":18,"x":-300,"y":-360,"attributes":{"modularity_class":3}},{"id":30,"name":"第四党支部","symbolSize":18,"x":-836,"y":-250,"attributes":{"modularity_class":3}},{"id":31,"name":"第五党支部","symbolSize":18,"x":-550,"y":-108,"attributes":{"modularity_class":3}},{"id":32,"name":"第六党支部","symbolSize":18,"x":-318,"y":-130,"attributes":{"modularity_class":3}},{"id":33,"name":"第七党支部","symbolSize":18,"x":-580,"y":-402,"attributes":{"modularity_class":3}},{"id":34,"name":"省原子能研究院党委","symbolSize":43.256,"x":-600,"y":120,"attributes":{"modularity_class":4}},{"id":35,"name":"第一党支部","symbolSize":18,"x":-800,"y":-69,"attributes":{"modularity_class":4}},{"id":36,"name":"第二党支部","symbolSize":18,"x":-739,"y":243,"attributes":{"modularity_class":4}},{"id":37,"name":"第三党支部","symbolSize":18,"x":-893,"y":34,"attributes":{"modularity_class":4}},{"id":38,"name":"第四党支部","symbolSize":18,"x":-539,"y":0,"attributes":{"modularity_class":4}},{"id":39,"name":"省计算机研究院党委","symbolSize":43.256,"x":-400,"y":900,"attributes":{"modularity_class":5}},{"id":40,"name":"第一党支部","symbolSize":18,"x":-527,"y":1046,"attributes":{"modularity_class":5}},{"id":41,"name":"第二党支部","symbolSize":18,"x":-269,"y":1067,"attributes":{"modularity_class":5}},{"id":42,"name":"第三党支部","symbolSize":18,"x":-513,"y":1298,"attributes":{"modularity_class":5}},{"id":43,"name":"第四党支部","symbolSize":18,"x":-594,"y":1217,"attributes":{"modularity_class":5}},{"id":44,"name":"省科学器材公司党委","symbolSize":43.256,"x":350,"y":650,"attributes":{"modularity_class":6}},{"id":45,"name":"第一党支部","symbolSize":18,"x":480,"y":850,"attributes":{"modularity_class":6}},{"id":46,"name":"第二党支部","symbolSize":18,"x":230,"y":789,"attributes":{"modularity_class":6}},{"id":47,"name":"离退休党支部","symbolSize":18,"x":585,"y":745,"attributes":{"modularity_class":6}},{"id":48,"name":"中国地质科学院矿产综合利用研究所党委","symbolSize":43.256,"x":150,"y":950,"attributes":{"modularity_class":7}},{"id":49,"name":"所直党支部","symbolSize":18,"x":572,"y":1136,"attributes":{"modularity_class":7}},{"id":50,"name":"矿冶党支部","symbolSize":18,"x":307,"y":1242,"attributes":{"modularity_class":7}},{"id":51,"name":"分析党支部","symbolSize":18,"x":557,"y":1050,"attributes":{"modularity_class":7}},{"id":52,"name":"后勤党支部","symbolSize":18,"x":80,"y":1250,"attributes":{"modularity_class":7}},{"id":53,"name":"资环党支部","symbolSize":18,"x":59,"y":1100,"attributes":{"modularity_class":7}},{"id":54,"name":"省科技促进发展研究中心党支部","symbolSize":43.256,"x":220,"y":455,"attributes":{"modularity_class":8}},{"id":55,"name":"省科技交流中心党支部","symbolSize":43.256,"x":-300,"y":750,"attributes":{"modularity_class":9}},{"id":56,"name":"省农村科技发展中心党支部","symbolSize":43.256,"x":-150,"y":90,"attributes":{"modularity_class":10}},{"id":57,"name":"省科学技术研究成果档案馆党支部","symbolSize":43.256,"x":100,"y":550,"attributes":{"modularity_class":11}}],"links":[{"id":0,"name":null,"source":0,"target":1,"lineStyle":{"normal":{}}},{"id":1,"name":null,"source":1,"target":2,"lineStyle":{"normal":{}}},{"id":2,"name":null,"source":1,"target":3,"lineStyle":{"normal":{}}},{"id":3,"name":null,"source":1,"target":4,"lineStyle":{"normal":{}}},{"id":4,"name":null,"source":1,"target":5,"lineStyle":{"normal":{}}},{"id":5,"name":null,"source":1,"target":6,"lineStyle":{"normal":{}}},{"id":6,"name":null,"source":1,"target":7,"lineStyle":{"normal":{}}},{"id":7,"name":null,"source":1,"target":8,"lineStyle":{"normal":{}}},{"id":8,"name":null,"source":1,"target":9,"lineStyle":{"normal":{}}},{"id":9,"name":null,"source":1,"target":10,"lineStyle":{"normal":{}}},{"id":10,"name":null,"source":1,"target":11,"lineStyle":{"normal":{}}},{"id":11,"name":null,"source":1,"target":12,"lineStyle":{"normal":{}}},{"id":12,"name":null,"source":1,"target":13,"lineStyle":{"normal":{}}},{"id":13,"name":null,"source":1,"target":14,"lineStyle":{"normal":{}}},{"id":14,"name":null,"source":1,"target":15,"lineStyle":{"normal":{}}},{"id":15,"name":null,"source":1,"target":16,"lineStyle":{"normal":{}}},{"id":16,"name":null,"source":1,"target":17,"lineStyle":{"normal":{}}},{"id":17,"name":null,"source":0,"target":18,"lineStyle":{"normal":{}}},{"id":18,"name":null,"source":18,"target":19,"lineStyle":{"normal":{}}},{"id":19,"name":null,"source":18,"target":20,"lineStyle":{"normal":{}}},{"id":20,"name":null,"source":18,"target":21,"lineStyle":{"normal":{}}},{"id":21,"name":null,"source":18,"target":22,"lineStyle":{"normal":{}}},{"id":22,"name":null,"source":18,"target":23,"lineStyle":{"normal":{}}},{"id":23,"name":null,"source":18,"target":24,"lineStyle":{"normal":{}}},{"id":24,"name":null,"source":18,"target":25,"lineStyle":{"normal":{}}},{"id":25,"name":null,"source":0,"target":26,"lineStyle":{"normal":{}}},{"id":26,"name":null,"source":26,"target":27,"lineStyle":{"normal":{}}},{"id":27,"name":null,"source":26,"target":28,"lineStyle":{"normal":{}}},{"id":28,"name":null,"source":26,"target":29,"lineStyle":{"normal":{}}},{"id":29,"name":null,"source":26,"target":30,"lineStyle":{"normal":{}}},{"id":30,"name":null,"source":26,"target":31,"lineStyle":{"normal":{}}},{"id":31,"name":null,"source":26,"target":32,"lineStyle":{"normal":{}}},{"id":32,"name":null,"source":26,"target":33,"lineStyle":{"normal":{}}},{"id":33,"name":null,"source":0,"target":34,"lineStyle":{"normal":{}}},{"id":34,"name":null,"source":34,"target":35,"lineStyle":{"normal":{}}},{"id":35,"name":null,"source":34,"target":36,"lineStyle":{"normal":{}}},{"id":36,"name":null,"source":34,"target":37,"lineStyle":{"normal":{}}},{"id":37,"name":null,"source":34,"target":38,"lineStyle":{"normal":{}}},{"id":38,"name":null,"source":0,"target":39,"lineStyle":{"normal":{}}},{"id":39,"name":null,"source":39,"target":40,"lineStyle":{"normal":{}}},{"id":40,"name":null,"source":39,"target":41,"lineStyle":{"normal":{}}},{"id":41,"name":null,"source":39,"target":42,"lineStyle":{"normal":{}}},{"id":42,"name":null,"source":39,"target":43,"lineStyle":{"normal":{}}},{"id":43,"name":null,"source":0,"target":44,"lineStyle":{"normal":{}}},{"id":44,"name":null,"source":44,"target":45,"lineStyle":{"normal":{}}},{"id":45,"name":null,"source":44,"target":46,"lineStyle":{"normal":{}}},{"id":46,"name":null,"source":44,"target":47,"lineStyle":{"normal":{}}},{"id":47,"name":null,"source":0,"target":48,"lineStyle":{"normal":{}}},{"id":48,"name":null,"source":48,"target":49,"lineStyle":{"normal":{}}},{"id":49,"name":null,"source":48,"target":50,"lineStyle":{"normal":{}}},{"id":50,"name":null,"source":48,"target":51,"lineStyle":{"normal":{}}},{"id":51,"name":null,"source":48,"target":52,"lineStyle":{"normal":{}}},{"id":52,"name":null,"source":48,"target":53,"lineStyle":{"normal":{}}},{"id":53,"name":null,"source":0,"target":54,"lineStyle":{"normal":{}}},{"id":54,"name":null,"source":0,"target":55,"lineStyle":{"normal":{}}},{"id":55,"name":null,"source":0,"target":56,"lineStyle":{"normal":{}}},{"id":56,"name":null,"source":0,"target":57,"lineStyle":{"normal":{}}}]}
  // alert(count);
       	var categories = [{name:"中共四川省科学技术厅直属机关委员会"}];
    	for (var i = 0; i < baseData.children.length; i++) {
        categories.push ({
            name: baseData.children[i].name
        })
   	}
    	
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.value = Math.round(Math.random() * node.symbolSize) +100 ;
        node.symbolSize /= 2;
        node.label = {
            normal: {
                show: true,
                position:'right'
            }
        };
        node.category = node.attributes.modularity_class;
    });	
    
        var optionG = {
        title: {
        },
        tooltip: {},
       /* legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],*/
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: '组织机构',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                left:20,
                right:20,
                top:"5%",
                width:'80%',
                categories: categories,
                roam: false,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.3
                    }
                },
                 color:['#c23531', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#B7BF6C','#6C9BBF']
            }
        ],
       
        
       
    };

    myChart4.setOption(optionG);
    
    
        // 使用刚指定的配置项和数据显示图表。
        
        $(window).resize(function(){
           // myChart4.setOption(optionG);
            myChart4.resize();
            /*window.location.reload();*/
        })



})
