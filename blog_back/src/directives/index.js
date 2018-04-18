import Vue from "vue"
<<<<<<< HEAD
var focus={
  componentUpdated(el,binding){
    var {value,msg,reg,request,state}=binding.value
    //清空提示p标签
    let clearP=()=>{
      let $p=el.parentNode.getElementsByTagName("p")[0]
      if($p!=undefined){
=======
var focus = {
  componentUpdated(el, binding) {
    var { value, msg, reg, request, state } = binding.value
    //清空提示p标签
    let clearP = () => {
      let $p = el.parentNode.getElementsByTagName("p")[0]
      if ($p != undefined) {
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
        el.parentNode.removeChild($p)
      }
    }
    // 检测value是否为空
<<<<<<< HEAD
    let testNull=()=>{
      if(value!=""&&value!=undefined&&value!=null){
        testHandle()
      }else{
=======
    let testNull = () => {
      if (value != "" && value != undefined && value != null) {
        testHandle()
      } else {
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
        testRequest()
      }
    }
    // 检测是否为必填项
<<<<<<< HEAD
    let testRequest=()=>{
      if(request){
        clearP()
        let $p=document.createElement("p")
<<<<<<< HEAD
        $p.setAttribute("class","p")
=======
        $p.style.color='#f00';
        $p.style.textAlign='center';
        $p.style.fontSize='14px'
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
        $p.innerHTML="此项不能为空"
        el.parentNode.appendChild($p)
      }else{
=======
    let testRequest = () => {
      if (request) {
        clearP()
        let $p = document.createElement("p")
        $p.setAttribute("class", "p")
        $p.innerHTML = "此项不能为空"
        el.parentNode.appendChild($p)
      } else {
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
        clearP()
      }
    }
    // 正则校验
<<<<<<< HEAD
    let testHandle=()=>{
      clearP()
      if(!reg.test(value)){
        // el.parentNode
        let $p=document.createElement("p")
<<<<<<< HEAD
=======
        
		// margin: 3px auto;
		// height: 20px;
		// line-height: 20px;
		// color: #f00;
        $p.style.color='#f00';
        $p.style.textAlign='center';
        $p.style.fontSize='14px'
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
        $p.setAttribute("class","p")
        $p.innerHTML=msg
        el.parentNode.appendChild($p)
      }
    }
    if(state){
      testNull()
    }
    
      
  }
}

Vue.directive("focus",focus)
=======
    let testHandle = () => {
      clearP()
      if (!reg.test(value)) {
        // el.parentNode
        let $p = document.createElement("p")
        // $p.setAttribute("class", "p")
        $p.style.color = 'red';
        $p.style.fontSize = '14px';
        $p.style.textAlign = 'center';
        $p.style.lineHeight = '18px';
        $p.innerHTML = msg;
        el.parentNode.appendChild($p);
      }
    }
    if (state) {
      testNull()
    }
  }
}

Vue.directive("focus", focus)
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
