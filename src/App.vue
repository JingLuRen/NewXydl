<template>
    <div id="app">
      <!-- 底部导航 -->
        <ul id="d_nav">
            <li
                v-for="(item, index) of list"
                :key="index"
                @click="routerGo(item.url)"
                :class="{'cur':$route.path === item.url}"
            ><i :class="item.icon"></i><br/>{{item.title}}</li>
        </ul>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script>
window.onload = window.onresize = function() {
    var rem = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (rem * 100) / 375 + "px";
};
export default {
    data() {
        return {
            list: [
                {
                    title: "任务",
                    icon: "el-icon-s-order",
                    name: "home",
                    url: "/"
                },
                {
                    title: "社区",
                    icon: "el-icon-s-home",
                    name: "community",
                    url: "/community"
                },
                {
                    title: "我",
                    icon: "el-icon-s-custom",
                    name: "me",
                    url: "/me"
                }
            ]
        };
    },
    methods: {
        // 路由跳转
        routerGo(url) {
            this.$router.push({ path: url });
        },
    }
};
</script>
<style lang="scss">
html,
body {
    font-size: 100px;
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    a {
        color: #000;
    }
}
#app {
    font-size: 0.15rem;
    
}
#d_nav {
    z-index: 5;
    width: 100%;
    height:0.59rem;
    background-color: #fff;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .cur{
        color:#999999;
    }
    li{
        color:#C1C1C1;
        text-align: center;
        font-size: 0.12rem;
        i{
            font-size: 0.28rem;
        }
    }
}
</style>
