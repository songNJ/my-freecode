
var isInternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
// ���� Flash ӰƬ�е����� FSCommand ��Ϣ

// Internet Explorer �Ĺҹ�
if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
	document.write('<scr' + 'ipt language=\"VBScript\"\>\n');
	document.write('On Error Resume Next\n');
	document.write('Sub nav3_FSCommand(ByVal command, ByVal args)\n');
	document.write('	Call nav3_DoFSCommand(command, args)\n');
	document.write('End Sub\n');
	document.write('Sub nav4_FSCommand(ByVal command, ByVal args)\n');
	document.write('	Call nav4_DoFSCommand(command, args)\n');
	document.write('End Sub\n');
	document.write('</scr' + 'ipt\>\n');
}
var xmlHttp;
function GetXmlHttpObject(){
	var xmlHttp=null;
	try{
	  // Firefox, Opera 8.0+, Safari
	  xmlHttp=new XMLHttpRequest();
	}
	catch (e){
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
	  	catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}
function saveFavourites(gid) 
{ 
		xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	  {
	  alert ("�����������֧��AJAX��");
	  return;
	  } 
	var url='/tombs/saveFavourites.asp?u='+gid;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=doFavourites;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
function doFavourites()
{ 		
	if (xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			if(xmlHttp.responseText.length>0){
				alert(xmlHttp.responseText);
			}else{
				alert("�ղسɹ�!");
				parent.closeWin();
			}				  
		}
	}
}
function upHit(gid) 
{ 
		xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	  {
	  alert ("�����������֧��AJAX��");
	  return;
	  } 
	var url='/user/getNeedInfo.asp?t=6&id='+gid;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=function(){doUpHit(gid)};
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
function doUpHit(gid)
{ 		
	if (xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			if(xmlHttp.responseText.length>0){
				alert(xmlHttp.responseText);
			}else{
				alert("��л����֧��!");
			pubajax('/user/getNeedInfo.asp','t=7&id='+gid,'div_upHit');
			}				  
		}
	}
}
function add_Friend(id)
	{
		url = "/member/addFriend.asp?id="+id;
		openWindow(url, 400, 300, '��Ӻ���');
	}
function sendMsg(name)
	{
		url = "/member/sendMessege.asp?r="+name;
		openWindow(url, 450, 300, '������Ϣ');
	}
function InviteUserToGroup(gid,name)
	{
		url = "/member/InviteUserToGroup.asp?r="+name+"&gid="+gid;
		openWindow(url, 450, 300, '������������');
	}
function donateCoin(name)
	{
		url = "/user/donateCoin.asp?r="+name;
		openWindow(url, 450, 300, '���ͽ��');
	}	
function pubajax(url,actionstr,divID)
{
    var Action=actionstr; 
    var options={ 
                      method:'get', 
                      parameters:Action, 
                      onComplete:function(transport) 
                      { 
                          var returnvalue=transport.responseText; 
                          if (returnvalue.indexOf("??")>-1) 
                              document.getElementById(divID).innerHTML=''; 
                          else 
                              document.getElementById(divID).innerHTML=returnvalue; 
                      } 
                   }; 
       new  Ajax.Request(url+'?no-cache='+Math.random(),options);
}

function shows(gid,event){
	document.all.show_div.style.display="block";
	//alert(event.clientX + event.clientY);
	document.all.showframe.src="http://www.zg05.com/tombs/getTombInfo.asp?gid="+gid;
	document.all.show_div.style.left=event.clientX+document.body.scrollLeft;
	document.all.show_div.style.top=event.clientY+document.body.scrollTop;
} 
function dis(){
	document.all.show_div.style.display="none";
	document.all.showframe.src="";
	//alert(event.clientX + event.clientY);
	//document.all.show_div.style.left=event.clientX;
	//document.all.show_div.style.top=event.clientY;
}

function showDialog(url,div_w,div_h,des){ 
//t=1�޸���ƽ t=2�޸Ļ�����Ϣ
var urls=url+"&rnd="+Math.random();
document.getElementById("light_title").innerText=des;
document.getElementById("light2").style.width=div_w;
document.getElementById("light2").style.height=div_h;//parent.document.body.clientHeight;
//document.getElementById("light2").style.top=(document.body.clientHeight-div_h)/2+80;
document.getElementById("light2").style.top=document.body.scrollTop+document.documentElement.scrollTop+80;
document.getElementById("light2").style.left=(document.body.scrollWidth-div_w)/2;
document.getElementById("lightbg").style.height=document.body.scrollHeight;
document.getElementById("lightbg").style.display="block";
document.getElementById("light2").style.display="block";
document.getElementById("giftList2").src=urls;
//alert(document.getElementById("light_Title").style.width);
}
function showPic(url,div_w,div_h,des){ 
var urls=url.substring(3);
document.getElementById("light_Title").innerText=des;
document.getElementById("light2").style.width=div_w;
document.getElementById("light2").style.height=div_h;//parent.document.body.clientHeight;
//document.getElementById("light2").style.top=(document.body.clientHeight-div_h)/2+80;
document.getElementById("light2").style.top=document.body.scrollTop+document.documentElement.scrollTop+80;
document.getElementById("light2").style.left=(document.body.scrollWidth-div_w)/2;
document.getElementById("lightbg").style.display="block";
document.getElementById("light2").style.display="block";
document.getElementById("giftList2").src="http://www.zg05.com/"+urls;
//alert(document.getElementById("light_Title").style.width);
}
function showPic2(url,div_w,div_h,des){ 
//var urls=url.substring(3);
document.getElementById("light_Title").innerText=des;
document.getElementById("light2").style.width=div_w;
document.getElementById("light2").style.height=div_h;//parent.document.body.clientHeight;
//document.getElementById("light2").style.top=(document.body.clientHeight-div_h)/2+80;
document.getElementById("light2").style.top=document.body.scrollTop+document.documentElement.scrollTop+80;
document.getElementById("light2").style.left=(document.body.scrollWidth-div_w)/2;
document.getElementById("lightbg").style.display="block";
document.getElementById("light2").style.display="block";
document.getElementById("giftList2").src="http://www.zg05.com/"+url;
//alert(document.getElementById("light_Title").style.width);
}

function closeWin(){ 
document.getElementById("lightbg").style.display="none";
document.getElementById("light2").style.display="none";
document.getElementById("giftList2").src="";
//var img_bn=document.getElementById("img_bnFlag");
//if(img_bn!="undefined"&&img_bn!=null){
//	img_bn.style.display="none";
//}
}
 
 function shutdownTips(){
	document.getElementById("win_tips").style.display="none";
	document.getElementById("lightbgTips").style.display="none";
}
function showTips(txt){
parent.document.getElementById('light').style.display='none';
parent.document.getElementById('lightbgTips').style.display='inline';
var win_tips=parent.document.getElementById('win_tips');
var tips_content=parent.document.getElementById('tips_content');
tips_content.innerHTML=txt;
win_tips.style.color="#990000";
win_tips.style.display='inline';

}
//��ʾ/����"�������"ͼƬ
//v=1��ʾ   v!=1����
function showBnImg(v){
	var img_bn=document.getElementById("img_bnFlag");
	var img_jr=document.getElementById("img_jieriFlag");
	if(img_bn!="undefined"&&img_bn!=null){
		if(v==1)
		img_bn.style.display="inline";
		else
		img_bn.style.display="none";
		
		}
	if(img_jr!="undefined"&&img_jr!=null){
		if(v==1)
		img_jr.style.display="inline";
		else
		img_jr.style.display="none";
		
		}
}
//����������س�ʱʵ������
function kOnKeydown(v)
{	//alert(event.keyCode);
	if(event.keyCode==13)
		window.location.href="/xsAll.asp?k="+v+"&rnd="+Math.random();
}

function sign()//ǩ��
{ 
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null)
		  {
		  alert ("�����������֧��AJAX��");
		  return;
		  } 
		url="/user/getNeedInfo.asp?t=9";
		url=url+"&sid="+Math.random();
		//window.clipboardData.setData("Text", url); 
		xmlHttp.onreadystatechange=signStateChanged;
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
}
function signStateChanged()
{ 		
	if (xmlHttp.readyState==4)
	{//alert(xmlHttp.responseText);
		if(xmlHttp.status==200){ 
			if(xmlHttp.responseText!=""){
			//alert(xmlHttp.responseText);
				if(xmlHttp.responseText.indexOf("|")==0){
					alert('ִ���ļ����ؽ������')
				}
				else{
					var resultArr=xmlHttp.responseText.split("|")	
					var result=resultArr[0]	;	
					var tips=resultArr[1];	
					alert(tips);
					if(result!="0"){
						document.getElementById('sign').innerHTML="<a href=\"javascript:void(0);\">������ǩ��</a>";
					}
				}
			}  
		}
	}
}

function IsCn(Str)
{
    return /^[һ-��]+$/igm.test(Str);
}

function submitchecken() {
	if (document.cidu.youname1.value == "") {
		alert("���������ϡ�");
		document.cidu.youname1.focus();
		return false;
		}
	if (IsCn(document.cidu.youname1.value)==false) {
		alert("�������,Ӧ�ö�Ϊ���֡�");
		document.cidu.youname1.focus();
		return false;
		}
	if (document.cidu.youname1.value.length > 2) {
		alert("�����������,���ܶ���2�֡�");
		document.cidu.youname1.focus();
		return false;
		}

	if (document.cidu.youname2.value == "") {
		alert("����������");
		document.cidu.youname2.focus();
		return false;
		}
	if (IsCn(document.cidu.youname2.value)==false) {
		alert("�������,Ӧ�ö�Ϊ���֡�");
		document.cidu.youname2.focus();
		return false;
		}
	if (document.cidu.youname2.value.length > 2) {
		alert("�����������,���ܶ���2�֡�");
		document.cidu.youname2.focus();
		return false;
		}
	if (document.cidu.nian.value.length != 4) {
		alert("���λ��������,����Ϊ4λ��");
		document.cidu.nian.focus();
		return false;
		}
	
	re="���������룡";
 	y=document.cidu.nian.value;
 	m=document.cidu.yue.value;
 	d=document.cidu.ri.value;
 	h=document.cidu.hh.value;

	if (y==""||y<1901||y>2050) {
		alert("��Ӧ��1901��2050֮�䡣"+re);
		document.cidu.nian.focus();
		return false;
		}
	if (m>12||m<1) {
		alert("��Ӧ��1��12֮�䡣"+re);
		document.cidu.yue.focus();
		return false;
		}
	if (d>31||d<1) {
		alert("��Ӧ��1��31֮�䡣"+re);
		document.cidu.ri.focus();
		return false;
		}
	if ((m==4||m==6||m==9||m==11)&&d>30) {
		alert(m+"��ֻ��30�졣"+re);
		document.cidu.ri.focus();
		return false;
		}
	if (y%4!=0&&m==2&&d>28) {
		alert(y+"����ƽ�꣬2��ֻ��28�졣"+re);
		document.cidu.ri.focus();
		return false;
		}
	if (m==2&&d>29) {
		alert(y+"�������꣬2��ֻ��29�졣"+re);
		document.cidu.ri.focus();
		return false;
		}
	if (h>23||h<0) {
		alert("ʱӦ��0��23֮�䡣"+re);
		document.cidu.hh.focus();
		return false;
		}
	return true;
}

