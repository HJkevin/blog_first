<template>
  <div>
        <headerC></headerC>
        <div class="main">
            <asideC class="left"></asideC>
            <router-view class="right"></router-view>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .main{
        overflow: hidden
    }
    .main .left{
        float: left
    }
    .main .right{
        float: left;
    }
</style>
