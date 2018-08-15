module.exports = function import_careers() {
	
	if(typeof document !== "undefined"){
	
		var divId="BambooHR-ATS";
		var el=document.getElementById(divId);

		var xmlhttp;
		if (('XDomainRequest' in window && window.XDomainRequest !== null) && document.documentMode < 10) {
			xmlhttp=new XDomainRequest();
		} 

		else if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		} 

		xmlhttp.onreadystatechange=function() {
			if(xmlhttp.readyState===4 && xmlhttp.status===200) {
				var content = xmlhttp.responseText;
				el=document.getElementById(divId);
				if(el) el.innerHTML=content;
			}
		}
		xmlhttp.open("GET","https://broadsign.bamboohr.com/jobs/embed2.php",true);
		xmlhttp.send();
		
	}
}