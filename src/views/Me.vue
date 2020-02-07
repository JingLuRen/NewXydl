<template>
   <div>
     <div class="me-nav">
       <div class="me">
         我的
         <i class="el-icon-s-tools"></i>
       </div>
       <div class="me-header">
         <div class="me-msg">
           <div class="msg-l">
             <img src="http://www.17qq.com/img_qqtouxiang/74882967.jpeg" alt="">
           </div>
           <div class="msg-c">
             <h4>雪碧军</h4>
             <p>布基瓦布无以至千里布基瓦布无以至千里布基瓦布无以至千里</p>
           </div>
           <div class="msg-r">
             <button type="button">签到</button>
           </div>
         </div>
       </div>
       <div class="me-content">
         <div class="con-top">
           <ul>
             <li v-for="(item, index) of tops" :key="index">
               <i :class="item.icon"></i>
               <p>{{item.msg}}</p>
             </li>
           </ul>
         </div>
         <div class="msg-list">
           <ul>
             <li v-for="(item, index) of lists" :key="index">
               <div>
                  <i :class="item.icon" class="icon-l"></i>
                  <p><span>{{item.msg}}</span></p>
                  <i class="el-icon-arrow-right icon-r"></i>
               </div>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
</template>
<script>
export default {
   name: '',
   data() {
       return {
         tops:[
           {
             icon:"el-icon-medal-1",
             msg:"排行榜"
           },{
             icon:"el-icon-notebook-1",
             msg:"我的任务"
           },{
             icon:"el-icon-coin",
             msg:"我的收益"
           },{
             icon:"el-icon-bank-card",
             msg:"钱包"
           },
         ],
         lists:[
           {
             icon:"el-icon-location-outline",
             msg:"收货地址"
           },{
             icon:"el-icon-full-screen",
             msg:"身份认证"
           },{
             icon:"el-icon-shopping-bag-2",
             msg:"积分商城"
           },{
             icon:"el-icon-ship",
             msg:"我的团队"
           },{
             icon:"el-icon-message",
             msg:"问题反馈"
           },{
             icon:"el-icon-folder-add",
             msg:"上传意愿客户"
           },
         ]
       }
   },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>
<style lang="scss" scoped>
.me-nav{
  width:100%;
  height:0.52rem;
  .me{
    width:3.39rem;
    height:0.26rem;
    margin:0 auto;
    text-align: center;
    font-size: 0.16rem;
    padding-top: 0.13rem;
    padding-bottom: 0.08rem;
    position: relative;
    .el-icon-s-tools{
      position: absolute;
      right:0rem;
      top:0.13rem;
      font-size: 0.24rem;
      color:#999999;
    }
  }
}

.me-header{
  width:100%;
  height:1.23rem;
  background-color: #A6A6A6;
  display: flex;
  justify-content: center;
  align-items: center;
  .me-msg{
    width:90%;
    height:0.59rem;
    display: flex;
    justify-content: space-around;
    .msg-l{
      width:0.59rem;
      height:0.59rem;
      // background-color: aquamarine;
      // border-radius: 50px;
      img{
        width:100%;
        height:100%;
        border-radius: 50%;
      }
    }
    .msg-c{
      width:2rem;
      height:100%;
      h4{
        font-size: 0.18rem;
        color:#F2F2F2;
        padding-top: 0.05rem;
      }
      p{
        font-size: 0.13rem;
        color:#F2F2F2;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-top: 0.05rem;
      }
    }
    .msg-r{
      width:0.55rem;
      height:100%;
      display: flex;
      align-items: center;
      button{
        width:100%;
        height:0.24rem;
        border:none;
        font-size: 0.12rem;
        background-color: #F2F2F2;
        border-radius: 60px;
        outline: none;
      }
    }
  }
}

.me-content{
  background-color: #EFEFEF;
  .con-top{
    width:100%;
    height:0.7rem;
    display: flex;
    align-items: center;
    background-color:#fff;

    ul{
      width:100%;
      display: flex;
      justify-content: space-between;
      li{
        width:25%;
        text-align: center;
        i{
          font-size: 0.31rem;
          color:#999999;
        }
        p{
          font-size: 0.11rem;
        }
      }
    }
  }
}

.me-content{
  .msg-list{
    margin-top: 0.12rem;
    ul{
      width:100%;
      background-color: #EFEFEF;
      li{
        width:100%;
        height:0.47rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background-color:#fff;
        &:nth-child(4){
          margin-top: 0.07rem;
        }
        &:last-child{
          margin-top: 0.07rem;
        }
        div{
          width:94%;
          height:0.47rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color:#999999;
          .icon-l{
            width:7%;
              font-size: 0.23rem;
            }
          p{
            width:86%;
            height:0.23rem;
            font-size: 0.16rem;
            
            span{
              padding-left: 1em;
              margin-top: 0.02rem;
            }
          }
          .icon-r{
            width:7%;
            font-size: 0.23rem;
          }
        }
        
      }
    }
  }
}
</style>
