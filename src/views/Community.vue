<template>
  <div class="community">
    <div class="box">
    <ul class="ul1">
        <li 
          v-for="(item,index) in tabtit" 
          :class="{active:index == num}" 
          @click="tab(index)"
          :key="index"
        >
            {{item}}
        </li>
    </ul>
    <ul class="ul2">
        <li 
          v-show="0 == num"
        >
          <hot/>
        </li>
        <li 
          v-show="1 == num"
        >
          <Answer/>
        </li>
    </ul>
</div>
  </div>
</template>

<script>
import Hot from "../components/community/hot.vue";
import Answer from "../components/community/answer.vue";
export default {
   data() {
      return {
        tabtit: ["热门", "答疑"],
        tabmain: ["内容一", "内容二"],
        num: 0
      }
    },
    methods:{
      tab(index){
        this.num = index;
      }
    },
    components:{
      Hot,
      Answer
    }
}
</script>

<style lang="scss" scoped>
.ul1 {
  width:1.64rem;
  height:0.3rem;
  margin:0 auto;
  margin-top: 0.25rem;
	overflow:hidden;
  display: flex;
}
.ul1 li {
  width:0.82rem;
  height:0.3rem;
  box-sizing: border-box;
  border:1px solid #B0B0B0;
  line-height: 0.3rem;
  color: #A2A2A2;
  font-size: 0.14rem;
  text-align: center;
}
.ul2 li {
	// width:200px;
	// height:200px;
    padding-bottom: 0.8rem;

}
.active {
  
	background:#000;
}
</style>