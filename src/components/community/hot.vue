<template>
   <div>
       <div class="infinite-list-wrapper" style="overflow:auto">
            <ul
            class="list lists"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
                <li 
                    v-for="i in count" 
                    class="list-item lists-item"
                    :key="i"
                >
                <div class="img_s">

                </div>
                <h4>校园代理招募活动</h4>
                <p>20小时前</p>
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
            count: 5,
            loading: false
       }
   },
  components: {},
  computed: {
      noMore () {
        return this.count >= 10
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
      }
  },
  watch: {},
}
</script>
<style lang="scss" scoped>
.lists{
    width:100%;
    .lists-item{
        width:3.44rem;
        height:1.65rem;
        box-sizing: border-box;
        border:1px solid #EEEEEE;
        margin: 0 auto;
        margin-top: 0.18rem;
        .img_s{
            width:100%;
            height:1.11rem;
            background-color: #eee;
        }
        h4{
            width:3.07rem;
            height:0.21rem;
            margin:0 auto;
            padding-top: 0.07rem;
            color:#646464;
            font-size: 0.14rem;
        }
        p{
            width:3.07rem;
            margin:0 auto;
            color:#BABABA;
            font-size: 0.12rem;
        }
    }
}
</style>
