specialDay = document.getElementById("specialDay")
bkg = document.getElementById('bkgVid')
content = document.getElementById('context')
nowT = new Date()
m = nowT.getMonth()
d = nowT.getDate()
if (m == 11 && d == 24){
	specialDay.innerHTML = "宝贝子平安夜要吃苹果哒！"
	bkg.src = 'img/Christmas1.mp4'
}else if (m == 11 && d == 25){
	specialDay.innerHTML = "宝贝圣诞节要开心鸭！"
	bkg.src = 'img/Christmas1.mp4'
}else if (m == 11 && d == 23){
	content.style.marginTop = '280px'
	bkg.src = 'img/yuandan.mp4'
}else if (m == 1 && d == 14){
	specialDay.innerHTML = "宝贝子情人节快乐！<br>新的一年元气满满！"
	content.style.marginTop = '120px'
	bkg.src = 'img/yuandan.mp4'
}
