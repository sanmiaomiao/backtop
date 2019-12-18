	/**本插件为jquery插件，需同时引入jquery.js
	 * 
	 * @param {
		 selector2,//点击返回顶部的按钮选择器
	 }
	 * 
	 *使用： 	$(document).BackTop('button')
	 * 
	 * 
	 * html中:在HTML中添加一下
		<div class="outer">
			<div class="wrapper">
				<div class="content">
				//以下部分为自己根据情况添加，但上面外层三个div必须有，且wrapper和content的类名固定，不可修改，outer类名可以修改
				//可以在style中增加wrapper和content的样式
					<div class="div">1</div>
					<div class="div">2</div>
					<div class="div">3</div>
					<div class="div">4</div>
				</div>
			
			</div>
			<button>返回顶部</button>//按钮的位置可自行根据情况更换
		</div>
		
	 * */
	
	
	
		(function($){
			//1.定义jquery的扩展方法BackTop
			$.fn.BackTop=function BackTop(selector2){	
				var selector1='.content';
				return $.fn.BackTop.methods['drag'](selector1,selector2);
			}			
			//2.定义BackTop的方法
			$.fn.BackTop.methods={			
				drag:function(selector1,selector2){					
					this.obj=$(selector1);//selector1  拖拽对象选择器
					this.button=$(selector2);//selector2 点击返回顶部的按钮
				this.obj.bind("mousedown",start);	
											function start(event){
											                    if(event.button==0){
											                        gapY=event.clientY-$(selector1)[0].offsetTop;
											                        $(document).bind("mousemove",move);
											                        $(document).bind("mouseup",stop);
											                       
											                    }
											                    return false;//阻止默认事件或冒泡
											                }
											function move(event){
											                   $(selector1).css({	                      
											                        "top":(event.clientY-gapY)+"px"
											                    });																
											                    return false;//阻止默认事件或冒泡
											                }
											function stop(){
											                    $(document).unbind("mousemove",move);
											                    $(document).unbind("mouseup",stop);
											                    
											                }
											function back(){
																$(selector1).css({
																	  "top":0+"px"
																})
															}
					this.button.bind('click',back)
				},				
			}			
			})(jQuery)
