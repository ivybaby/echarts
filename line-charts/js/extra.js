var c={
	   getReadyOn:function(){
	   	   
	  
                /*表格全选-begin*/
               
                $("table.table thead th>input[type='checkbox']").click(function(e){
                	     	    var otr=$(this).closest("thead").siblings("tbody").children("tr");
                	     	    if($(this).prop("checked"))
                	     	    {
                	     	    	 otr.find("td>input[type='checkbox']").each(function(){
                	     	    	 	   $(this).prop("checked",true).change();
                	     	    	 });
                	     	    	 
                	     	    }
                	     	    else
                	     	    {
                	     	       otr.find("td>input[type='checkbox']").each(function(){
                	     	    	 	    $(this).prop("checked",false).change();
                	     	    	 });
                	     	    }
                	     	    e.stopPropagation();
                });
                	     
                $("table.table tbody td>input[type='checkbox']").on("change",function(){
                	     	    var otr= $(this).closest("tr");
                	     	    if($(this).prop("checked"))
                	     	    {
                	     	    	
                	     	    	 	   $(this).prop("checked",true).closest("tr").css({"background":"#fff0e6"});
                	     	    	
                	     	    }
                	     	    else
                	     	    {
                	     	    	 	   $(this).find("input[type='checkbox']").prop("checked",false);
                	     	    	 	   if(otr.hasClass("even"))
                	     	    	 	   {
                	     	    	 	   	  otr.css({"background":"#f6f6f6"});
                	     	    	 	   }
                	     	    	 	   else
                	     	    	 	   {
                	     	    	 	   	  otr.css({"background":"#ffffff"});
                	     	    	 	   }
                	     	  
                	     	    }
                });
                /*表格全选-end*/	     
                	    
                	
                	
                /*！导出--begin*/
                $("aside ul>li").children("input").each(function(){
                	      	  $(this).attr("role","0");
                	      	  if($(this).prop("checked"))
                	      	  {
                	      	  	 $(this).attr("role","1");
                	      	  	 $(this).closest("li").addClass("li-check");
                	      	  }
                });
                $(".sub-setting aside ul>li").each(function(){
                	 $(this).append("<em><span>行高<input type='number' value='30' /></span><span>列宽<input type='number' value='30' /></span><a href='#' class='li-change' flag='true'>+</a><a href='#' class='li-change'>-</a></em>");
                	 $(this).children("em").hide();
                });
                	      $(".sub-setting aside ul>li").on("click",function (e){
                	      	   $(this).closest("ul").children("li").find("em").hide();
                	      	   $(this).children("em").show();
                	           e.stopPropagation();
                	      });
                	      
                function getSpan(vele,num)
                {
                	      	var vimg=vele.closest("ul").children("li").eq(num).children("a");
                	      	if(vele.closest("aside").hasClass("yetdata")){
                	      		
                	      	    	  	 vimg.attr("data-role","1").append("<span class='li-check'>删除</span>");   
                	      	 }
                	      	else
                	      	    {
                	      	    	  	 vimg.attr("data-role","1").append("<span class='li-check'>添加</span>");
                	      	    	  	  
                	      	    }
               }
                
               
               /*每一项的删除，添加*/
               $("a.line-delete").on("click",function(e){
               	         
                	      var vli=$(this).closest("li");
                	      var vcmp=$(this).closest("aside").hasClass("yetdata");
                	      vli.removeClass("li-check").children("input").prop("checked",false);
                	      	   
                	     if($(this).attr("data-role")==1)
                	      	{
                	      	    	  getSpan($(this),1);
                	      	    	  $(this).removeAttr("data-role").children("span").remove();
                	      	    	 
                	      	 	
                	      	 }
                	      	if(vcmp)
                	      	{
                	      	    	 $(this).children("img").attr("src","img/tianjia.png");
                	      	}
                	      	else
                	      	{
                	      	    	  $(this).children("img").attr("src","img/sanchu.png");
                	        }
                	      	  
                	      	$(this).attr("role","0").closest("aside").siblings("aside").find("ul").append(vli);
                	     
                	      
                });
                	      
                /*勾选 字变成黑色 添加li-check类*/
               $("aside ul>li input[type='checkbox']").on("change",function()
                	     {
                	     	  if($(this).attr("role")==0)
                	     	  {
                	     	  	 $(this).attr("role","1").prop("checked", true).closest("li").addClass("li-check");
                	     	  }
                	     	  else
                	     	  {
                	     	  	 $(this).attr("role","0").prop("checked", false).closest("li").removeClass("li-check");
                	     	  }
                 });
             /*全部选中 全部取消*/
               $("aside>.row label>input[type='radio']").on("click",function()
                	     {
                	     	  	 $(this).closest(".row").children("label").removeClass("li-check");
                	     	  	 $(this).closest("label").addClass("li-check");
                	     	  	 if($(this).hasClass("all-checked"))
                	     	  	 {
                	     	  	 	  $(this).closest("aside").find("ul>li").each(function(){
                	     	  	 	  	
                	     	  	 	  	$(this).children("input").attr("role","1").prop("checked", true).end().addClass("li-check");
                	     	  	 	    
                	     	  	 	  })
                	     	  	 }
                	     	  	 else{
                	     	  	 	
                	     	  	 	  $(this).closest("aside").find("ul>li").each(function(){
                	     	  	 	  	 
                	     	  	 	  	  	  $(this).children("input").attr("role","0").prop("checked",false).end().removeClass("li-check");
                	     	  	 	  	      
                	     	  	 	  })
                	     	  	 }
                	     	  	 
                	     	  
                	});
                	     
                /*按钮的删除，添加*/
                	 $("aside>.row>button").on("click",function(e){
                	     	  e.preventDefault(); 
                	     	  $(this).closest("aside").find("ul>li input").each(function(){
                	     	  	 if($(this).prop("checked")){
                	     	  	 	
                	     	  	 	 $(this).siblings("a.line-delete").click();
                	     	  	     	
                	     	  	 }
                	     	  	
                	     	  });
                	     	  if($(this).closest("aside").siblings("aside").find(".line-delete").attr("data-role")!=1)
                	     	  {
                	     	  	getSpan($(this).closest("aside").siblings("aside").find(".line-delete").eq(0),0);
                	     	  }
                	      	 $("aside ul>li").find("em").hide(); 
                	     })
               
               /*！导出--end*/
              
              
              /*详情-当链接到另一界面时*/
                        $(".btn-targsrc").on('click',function(e){
                       	    e.preventDefault(); 
                       	    $("section.content").empty().load($(this).attr("data-role")+'.html');
                      
                       });
              
              
              /*向上-向下*/
               $(".li-change").on("click",function(e){
                	 e.stopPropagation();
                	 
                	 if($(this).closest("li").prev("li")&&($(this).attr("flag"))){
                        $(this).closest("li").insertBefore($(this).closest("li").prev("li"));
                	 }
                	 else
                	 {
                	 	$(this).closest("li").insertAfter($(this).closest("li").next("li"));
                	 }
                	
                	  
                });
                
              
                	      
                /*详细搜索*/
                $("input.ra-ck[type='radio']").on("click",function(){
                	      	  $(this).closest("ul").children("li").removeClass("li-check");
                	      	  if($(this).prop("checked"))
                	      	  {
                	      	  	$(this).closest("li").addClass("li-check");
                	      	  }
                	      	  
                });
                	      
                /*筛选标签*/
                $("#filter-tags .row>ul>li").children("input").each(function(i){

                	     	   $(this).siblings("span").attr("index",i);
                	     	   $(this).removeAttr("checked");
               });
               $("#filter-tags .row>ul>li").children("input").on("click",function(e){
                	      e.stopPropagation();
                	      var nkid=$(this).closest("li");
                	      	  
                	      	  if($(this).attr("checked"))
                	      	  {
                	      	  	 $(this).removeAttr("checked");
                	      	  	 nkid.removeClass("li-check");
                	      	  	 var nindex=$(this).siblings("span").attr("index");
                	      	  	 $("p.outlist").children("span").each(function(){
                	      	  	 	    if($(this).attr("index")==nindex)
                	      	  	 	    {
                	      	  	 	    	$(this).remove();
                	      	  	 	    }
                	      	  	 	    
                	      	  	 });
                	      	  }
                	      	  else
                	      	  {
                	      	  	 $(this).attr("checked","checked");
                	      	  	 nkid.addClass("li-check").children("span").clone().eq(0).addClass("w-color-orange").insertBefore($("p.outlist").children("span.addtranser"));
                	      	  	 
                	      	  }
                	      	 
                	      });
                	   
                       $("#filter-tags,#loading-mask,#subDiv").hide();
                       /*筛选点击*/
                       $(".sub-detail .row aside>button.btn-green,#filter-tags>img").click(function(e){
                       	      e.preventDefault(); 
                       	      $("#filter-tags").toggle();
                       });
                     
                     /*mask遮罩-begin*/
                       var $mask=$("#loading-mask");
                       $(".btn-targ").click(function(e){
                       	      e.preventDefault(); 
                       	      var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;                    	    
                       	      var ohref=$(this).attr("data-target");
                       	      var flag=$(this).attr("flag");
                              if(ohref)
                              {  
                              	
                              	      $("body").css({"overflow":"hidden"}); 
                       	              $mask.css("top",scrollTop);
                                      $mask.find("form").children("div").hide();
                       	              $("#loading div."+ohref+"").eq(0).show().find("header .h-close").click(function(){
                       	      	            $mask.hide();
                       	      	            $("body").css({"overflow":"scroll"}); 
                       	              });
                       	              if((ohref=='sub-export')&&(flag))
                       	              {   
                       	              	   $("#loading div."+ohref+"").eq(0).find(".content>div.row:last-of-type button").click(function(i){
                       	              	   	    i.preventDefault(); 
                       	              	   	    $("#loading div."+ohref+"").eq(0).hide();
                       	              	   	    $(".btn-targ[data-target='sub-detail']").click();  
                       	              	   });
                       	              }
                       	              $mask.show(); 
                       	              $("#loading div."+ohref+"").eq(0).find(".close-modal").on("click",function(i){
                       	              	   i.preventDefault(); 
                       	              	   $(this).closest(".content").siblings("header").find(".h-close").click(); 
                       	              });
                       	              
                              }
                       	    
                       });   
                     /*mask遮罩-end*/  
                     
                    
                     
                     /*submask-begin*/
                       var $submask=$("#subDiv");
                       $(".btn-subtarg").click(function(e){
                       	      e.preventDefault(); 
           
                       	      var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;                    	    
                       	      var ohref=$(this).attr("data-target");
                              if(ohref)
                              {  
                              	
                              	    
                       	              $submask.css("top",scrollTop);
                       	              $("#loading").hide();
                                      $submask.find("form").children("div").hide();
                       	              $("div."+ohref+"").eq(0).show().find("header .h-close").click(function(){
                       	      	             $submask.hide();
                       	      	             $("#loading").show();
                       	      	           
                       	              });
                       	              $submask.show();
                       	              $("div."+ohref+"").eq(0).find(".close-modal").on("click",function(i){
                       	              	   i.preventDefault(); 
                       	              	   $(this).closest(".content").siblings("header").find(".h-close").click(); 
                       	              });
                       	              
                              }
                       	    
                       });   
                     /*submask-end*/ 
                     
                     
                     
                     /*上传头像*/
                      $(".header-por input[type='button']").on('click',function(){
                      	      $(this).siblings("input[type='file']").click();
                      });
                      
                     /*图片上传*/
                      $(".type-file").on("click",function(e){
                        	  e.preventDefault(); 
                        	  $("input[type='file']").click();
                        	
                        });
                         
                      
                        /*添加标签
                        var $addlabel=$(".add-label");
                         $addlabel.hide();
                         $(".dataTables_wrapper table.table>tbody>tr>td:nth-of-type(10)").hover(function(){
                         	 $addlabel.find("p").html($(this).html()).end().show().appendTo($(this));
                         	 
                         },function(){
                         	 $addlabel.hide();
                         });*/
                      
                       
                       /*load关闭*/
                      /*
                       $(".close-load").on('click',function(e){
                       	    e.preventDefault(); 
                       	    $(".treeview").find("a").each(function(){
                       	    	 var ohref=$(this).attr("href");
                       	    	 if(ohref.indexOf("magMember")>-1)
                       	    	 {
                       	    	     $(this).closest("ul").siblings("a").click();
                       	    	     $(this).click();
                       	    	     return false;
                       	    	 }
                       	    });
                      
                       });  */
                       
                       
                       
                       
                         
                       /*查看大图*/
                       var addmask=$("#magnifier-mask");
                       addmask.hide();
                        $(".magnifier").on("click",function(e){
                        	   e.preventDefault(); 
                        	   $("body").css({"overflow":"hidden"}); 
                        	   var num=$(this).attr("index");
                        	   var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                        	   var imgsrc;
                        	   if(num){
                        	   	     imgsrc=$(this).siblings("img").attr("src");
                        	       
                        	   }
                        	   else
                        	   {
                        	   	  imgsrc=$(this).closest("div").siblings(".up-img").children("img").attr("src");
                        	    
                        	   }
                        	   addmask.find("#magnifier img").attr("src",imgsrc).end().css("top",scrollTop).toggle();
                        	   e.stopPropagation(); 
                        	
                        });
                        $("#magnifier-mask").click(function(event) {  
                               addmask.hide();
                        });
                 
                 
                      /*详细搜索-查询*/
                      $(".to-transer").hide();
                      function getTanser(fTans,tTans){
                      	   $(fTans).hide();
                      	   $(tTans).show();
                      }
                      $(".bRearch").on("click",function(e){
                      	   e.preventDefault();
                      	   $(".h-close").click();
                      	   getTanser(".from-transer",".to-transer");
                      });
                      $(".btnback").on("click",function(e){
                      	   e.preventDefault();
                      	   getTanser(".to-transer",".from-transer");
                      });
                        
                         
         }          
 
};
