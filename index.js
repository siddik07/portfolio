
txt=document.getElementById("role");
console.log(txt);

function role() {
	setTimeout(()=>{
		txt.innerHTML="Python Full Stack Developer"
	},0);
	setTimeout(()=>{
		txt.innerHTML="Python Backend Developer"
	},7000);
	setTimeout(()=>{
		txt.innerHTML="FrontEnd Developer"
	},11600);
}

role();
setInterval(role,18000);



var openContent=(id,cls)=>{
			console.log("Not work");
			let taglink=document.getElementsByClassName("about-links");
			let tagcontent=document.getElementsByClassName("about-tag");
			console.log(taglink,tagcontent);
			console.log("work");
			for(let i of taglink){
				i.classList.remove("active-about-links");
			}
			for(let j of tagcontent){
				j.classList.remove("active-about-tag");
			}
			document.getElementById(id).classList.add("active-about-links");
			document.getElementById(cls).classList.add("active-about-tag");
}


