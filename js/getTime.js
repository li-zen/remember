function getTime(){
	let t = new Date() - new Date(2020, 6-1, 26, 21)
	let d = Math.floor(t/ 1000 / 60 / 60 / 24)
	t -= d * 1000 * 60 * 60 * 24
	let h = Math.floor(t/ 1000 / 60 / 60)
	t -= h * 1000 * 60 * 60
	let m= Math.floor(t/ 1000 / 60)
	t -= m * 1000 * 60
	let s = Math.floor(t/ 1000)
	return d + "天" + h + "小时" + m + "分钟" + s + "秒"
}
window.onload = function(){
	setInterval("nowtime.innerHTML=getTime();", 1000)
}
