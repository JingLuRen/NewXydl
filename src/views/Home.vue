<template>
  <div class="renwu">
    <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="搜索" />
    </div>
    <!-- 走马灯 -->
    <div class="my_swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) of banner_url" :key="index">{{
          item.url
        }}</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 任务列表 -->
    <div class="task">
      <el-tabs class="task_s" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="all" label="全部" name="first">
          <All/>
        </el-tab-pane>
        <el-tab-pane class="all" label="即将开始" name="second">
          <Start/>
        </el-tab-pane>
        <el-tab-pane class="all" label="已领取" name="third">
          <Gets/>
        </el-tab-pane>
        <el-tab-pane class="all" label="已结束" name="fourth">
          <Over/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div> 
</template>

<script>
import All from '../components/task/all.vue'
import Start from '../components/task/start.vue'
import Gets from '../components/task/gets.vue'
import Over from '../components/task/over.vue'
export default {
  name: 'home',
  data() {
    return {
      activeIndex: '',
      swiperOption: {
        loop: true, // 前后衔接循环
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          // 绑定分页器，否则分页器不显示
          el: '.swiper-pagination',
          type: 'bullets'
        }
      },
      banner_url: [
        {
          url: 1
        },
        {
          url: 2
        },
        {
          url: 3
        },
        {
          url: 4
        }
      ],
      task: [
        {
          title: '全部',
          name: 'all',
          url: '/all',
          itemIndex: 0
        },
        {
          title: '即将开始',
          name: 'start',
          url: '/start',
          itemIndex: 1
        },
        {
          title: '已领取',
          name: 'gets',
          url: '/gets',
          itemIndex: 2
        },
        {
          title: '已结束',
          name: 'over',
          url: '/over',
          itemIndex: 3
        }
      ],
      activeName: 'first'
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
      All,
      Start,
      Gets,
      Over
    }
  
}
</script>
<style lang="scss" scoped>
.task{
  padding-bottom: 0.62rem;
}
.search{
  width:100%;
  height:0.42rem;
  position: relative;
  .el-icon-search{
    position: absolute;
    top:0.14rem;
    left:1.55rem;
  }
  input{
    border:none;
    font-size: 0.14rem;
    border-radius: 0.04rem;
    width:3.57rem;
    height:0.28rem;
    float: left;
    text-align: center;
    background-color: #E7E7E7;
    margin-top:0.07rem;
    margin-left: 0.09rem;
  }
}

.my_swiper {
  font-size: 0.12rem;
  width: 100%;
  height: 1.46rem;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
}
.swiper-slide{
  background-color:#ccc;
}


</style>
<style lang="scss">
  .el-tabs__nav{
    box-sizing: border-box;
    width:100%;
    height:0.41rem;
    border:1px solid #DCDCDC;
    margin-top: 0.1rem;
    display: flex;
      .el-tabs__item{
        width:25%;
        height:0.4rem;
        color:#ACACAC;
        text-align: center;
        padding:0 0.2rem!important;
        font-size: 0.15rem;
        line-height: 0.4rem;
      }
      .el-tabs__active-bar{
        background-color: #797979;
      }
    }

.el-tabs__header{
  margin:0;
}
</style>