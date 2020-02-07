<template>
   <div class="details">
       <div class="det-head">
           <div>
                <i @click="back()" class="el-icon-arrow-left"></i>
                <h3>任务详情</h3>
                <i class="el-icon-more"></i>
           </div>
       </div>
       <div class="det-content">
            <h2>{{details.title}}</h2>
            <span class="red le"><i class="el-icon-link ico"></i><span class="text">{{details.xianshang}}</span></span>
            <span class="yellow le"><i class="el-icon-coin ico"></i><span class="text">{{details.price}}金币</span></span>
            <span class="ju le"><i class="el-icon-lollipop ico"></i><span class="text">{{details.jingyan}}经验</span></span>
            <p class="x_p">
                <i class="el-icon-date ico"></i>
                <span class="text">活动时间：{{details.timer}}</span>
            </p>
            <div class="txt">
                <h4>任务说明</h4>
                <div>{{texts}}</div>
            </div>
            <div class="txt">
                <h4>任务要求</h4>
                <div>{{texts}}</div>
            </div>
            <div class="txt">
                <h4>参考实例</h4>
                <div>{{texts}}<img src="http://sc.68design.net/photofiles/201706/aMStJ653RK.jpg" alt=""></div>
            </div>
            <div class="txt">
                <h4>注意事项</h4>
                <div>{{texts}}</div>
            </div>
       </div>
   </div>
</template>
<script>
export default {
   name: 'detail',
   data() {
       return {
           details:'',
           texts:"和地方还是到付哈就是话费的回复可就是覅u恶化很疯狂觉得好的话看见好或粉红色开发计划费口舌符合社会风俗苦海恢复俄红粉水库恢复哭声飞花如核辐射恐慌富士康回复和风俗和府库何况是符合"
       }
   },
  components: {},
  computed: {},
  created(){
      
  },
  beforeMount() {
        
  },
  mounted() {
      this.init()
  },
  methods: {
      init(){
            this.details = this.$route.query.det[0]
      },
      back(){
          this.$router.go(-1);
      }
  },
  beforeDestroy(){
      localStorage.removeItem('tempData');
  },
  watch: {},
}
</script>
<style lang="scss" scoped>
.details{
    width:100%;
    min-height:100%;
    position: absolute;
    top:none;
    left: none;
    z-index: 10;
    background-color: #fff;
    // position: relative;
}
.det-head{
    width:100%;
    height:0.52rem;
    background-color: #fff;
    border-bottom: 2px solid #A8A8A8;
    position: absolute;
    top:0;
    left:0;
    div{
        width:3.35rem;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        color:#585858;
        h3{
            line-height: 0.52rem;
            font-size: 0.2rem;
        }
        i{
            line-height: 0.52rem;
            font-size: 0.26rem;
        }
    }
}
.det-content{
    padding-top: 0.54rem;
    width:3.35rem;
    margin:0 auto;
    h2{
        padding-top: 0.15rem;
        width:100%;
        font-size: 0.21rem;
        font-weight: 400;
    }
    .text{
        font-size: 0.14rem;
    }
    .red{
        color:#ED544D;
    }
    .yellow{
        color:#FFC300;
    }
    .ju{
        color:#FF8D1A;
    }
    .ico{
        font-size: 0.24rem;
    }
    .x_p{
        color:#999999;
        span{
            padding-left: 0.06rem;
        }
    }
    .le{
        padding-right:0.06rem;
    }
    .txt{
        h4{
            width:100%;
            height:0.3rem;
            font-size: 0.16rem;
            color:#696969;
            padding-top: 0.1rem;
            line-height: 0.3rem;
        }
        div{
            width:100%;
            min-height: 0.9rem;
            font-size: 0.16rem;
            color:#7C7C7C;
        }
    }
}
</style>
