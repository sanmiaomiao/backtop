# backtop
点击返回顶部按钮
###
	**本插件为jquery插件，需同时引入jquery.js
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
		
	
