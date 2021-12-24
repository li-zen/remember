bkg = document.getElementById('bkgVid')
nowT = new Date()
m = nowT.getMonth()
if (m==0 || m==1 || m==11) {
	bkg.src = 'img/winter.webm'
}else if (m==2 || m==3 || m==4) {
	bkg.src = 'img/spring.webm'
}else if (m==5 || m==6 || m==7) {
	bkg.src = 'img/summer.webm'
}else if (m==8 || m==9 || m==10) {
	bkg.src = 'img/fall.mp4'
}

