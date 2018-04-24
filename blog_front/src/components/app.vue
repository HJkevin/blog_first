<template>
  <div class="box">
      <div class="top">
        <span class="name">个人博客</span>
        <p>
            <el-row>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
          </el-row>  
        </p>  
      </div>
      <div class="banner">
        <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524576243&di=4c7b41add3a76c74d2e0999776887f3e&src=http://i5.bbswater.fd.zol-img.com.cn/t_s1200x5000/g5/M00/07/01/ChMkJ1euv3-IVy94ACXDFZR2p_UAAUZpAHuc28AJcMt505.jpg" alt="">
      </div>
      <div class="text">
        <div class="text-left">
            <span class="article">文章推荐</span>
            <dl class="tests">
              <dt><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524586333&di=84cc9b293bb54831f070dc19c65e9398&src=http://sucimg.itc.cn/sblog/j7da12f56faf9ab9f8e918095bdf06d63" alt=""></dt>
              <dd>
                <p class="test-title"> 
                  <span>测试</span>
                  <span>阅读全文</span>
                </p>
                <div class="time">
                  <span>2018-04-24</span>
                  分类：<span>八维/网站</span>
                 作者：<span>啊大大</span>
                </div>
                <p>答复是发送到送到送到送到送到</p>
              </dd>
            </dl>
            <div>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>

        </div>
        <div class="text-right">
            <ul>
              <li class="title">全站搜索</li>
              <li>
                <input type="text" placeholder="请输入你要搜索的内容">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </li>
              <li class="title">最新文章</li>
              <li>
                <span>测试</span>
                <span>2018-04-24</span>
              </li>
              <li class="title">点击排行</li>
              <li>
                <span>测试</span>
                <span>4</span>
              </li>
              <li class="title">友情链接</li>
              <li class="intro">
                <span>个人微博</span>
                <span>个人简介</span>
                <span>Github</span>
                <span>FaceBook</span>
              </li>
              <li class="qr-code">
                <p>请扫二维码关注xz公众账号</p>
                <div class="ewm">
                  <img src="" alt="">
                </div>
              </li>
            </ul>
        </div>
      </div>
  </div>
      
</template>
<script>
  export default{
      // data(){
      //   return {name:"zhangsan"}
      // }
  }
</script>
<style scoped>
  .box{
    font-size: 50px;
  }
  .top{
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    justify-content: space-between
  }
  .name{
    font-size: 1.8rem;
  }
  .banner {
    width: 100%;
    height: 200px;
  }
  img{
    width: 100%;
    height: 100%;
  }

  .text-left{
     width: 65%;
     text-align: center;
   }
  .text-left .article{
    font-size: 14px;
    padding: 3px 8px;
    background: blue;
    color: #fff;
    border-radius: 5px;
  }
  .text-left dl{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text-left dl dd{
    flex: 1
  }
  .text-left dl dt{
    width: 200px;
  }
  dl dt img{
    width: 100%;
    height: 100%;
  }
  .text{
    display: flex;
    justify-content: space-between;
  }
  .test-title{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    justify-content: space-around
  }
  .test-title span{
    font-size: 12px;
  }
  .time{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  dl dd p{
    font-size: 12px;
  }
 
  .text-right{
    width: 40%;
  }
  .text-right ul li{
    list-style: none;
    font-size: 12px;
    line-height: 30px;
    margin-top: 10px;
  }
  .title{
    background: green;
    color: #fff;
    text-align: center;
  }
  .intro{
    border: 1px solid #333;
    border-radius: 40%;
  }
  .intro span{
    display: block;
    text-align: center;
  }
  .qr-code{
    text-align: center;
  }
</style>