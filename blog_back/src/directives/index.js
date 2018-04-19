import Vue from "vue"
var focus = {
  componentUpdated(el, binding) {
    var { value, msg, reg, request, state } = binding.value
    //清空提示p标签
    let clearP = () => {
      let $p = el.parentNode.getElementsByTagName("p")[0]
      if ($p != undefined) {
        el.parentNode.removeChild($p)
      }
    }
    // 检测value是否为空
    let testNull = () => {
      if (value != "" && value != undefined && value != null) {
        testHandle()
      } else {
        testRequest()
      }
    }
    // 检测是否为必填项
    let testRequest=()=>{
      if(request){
        clearP()
        let $p=document.createElement("p")
        $p.style.color='#f00';
        $p.style.textAlign='center';
        $p.style.fontSize='14px'
        $p.innerHTML="此项不能为空"
        el.parentNode.appendChild($p)
      }else{
    // 正则校验
    let testHandle=()=>{
      clearP()
      if(!reg.test(value)){
        // el.parentNode
        let $p=document.createElement("p")
        
		// margin: 3px auto;
		// height: 20px;
		// line-height: 20px;
		// color: #f00;
        $p.style.color='#f00';
        $p.style.textAlign='center';
        $p.style.fontSize='14px'
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
