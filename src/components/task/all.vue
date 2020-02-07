<template>
   <div class="task_list">
        <div class="infinite-list-wrapper" style="overflow:auto">
            <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">
                <li 
                v-for="(item, index) of alllist" 
                class="list-item"
                :key="index"
                >
                    <div class="left">
                    <h4>{{item.title}}</h4>
                    <p class="s_p">
                        <i class="el-icon-link"></i><span>{{item.xianshang}}</span>
                        <i class="el-icon-coin"></i><span>{{item.price}}金币</span>
                        <i class="el-icon-lollipop"></i><span>{{item.jingyan}}经验</span>
                    </p>
                    <p class="x_p">
                        <i class="el-icon-date"></i>
                        活动时间：
                        <span>{{item.timer}}</span>
                    </p>
                    </div>
                    <div class="right">
                        <el-button type="primary" round @click="details(item.id)">{{item.btn}}</el-button>
                    </div>
                </li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>
   </div>
</template>
<script>
export default {
   name: '',
   data() {
       return {
           count:2,
           loading: false,
           alllist:[
               {
                   id:"0001",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0002",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0003",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0004",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0005",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0006",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0007",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0008",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0009",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },{
                   id:"0010",
                   title:"校园线上分享任务",
                   xianshang:"线上",
                   price:"50",
                   jingyan:"200",
                   timer:"2020.1.10-2020.2.3",
                   btn:"立即进入"
               },
           ]
       }
   },
  components: {},
  computed: {
      noMore () {
        return this.count >= this.alllist.length
      },
      disabled () {
        return this.loading || this.noMore
      }
  },
  beforeMount() {},
  mounted() {},
  methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      },
      details(id){
          let det = this.alllist.filter((item) => {
            return item.id === id;
          })
          this.$router.push({name:'listDetail',query:{
              det
            }})
      }
  },
  watch: {},
}
</script>
<style lang="scss" scoped>
.list{
    background-color: #FBFBFB;
}
.list-item{
    width:93.5%;
    height:0.71rem;
    padding:0.1rem;
    background-color:#fff;
    margin-top: 0.04rem;
    // margin:0 auto;
    display: flex;
    .left{
        height:0.6rem;
        width:70%;
        h4{
            font-size: 0.17rem;
            color:#696969;
        }
        .s_p{
            font-size: 0.13rem;
            color:#989898;
            margin-top: 0.03rem;
        }
        .x_p{
            font-size: 0.12rem;
            color:#AAAAAA;
            margin-top: 0.03rem;
        }
    }
    .right{
        height:100%;
        width:30%;
        text-align: center;
        line-height: 0.6rem;
        .el-button.is-round{
            height:0.31rem;
            width:0.77rem;
            background-color:#4AA0D5;
            font-size: 0.11rem;
            padding:0.06rem 0.12rem;
            border-radius: 50px;
            
        }
    }
}
</style>
