<template>
  <div>
    <div class="top-text">我们在一起的第{{days}}天~</div>
    <div class="container">
      <div class="mobie heart heart-beat">
        <div class="heart heart-shadow"></div>
      </div>
    </div>
    <div class="bottom-text">
      <div class="name">
        <i class="iconfont icon-boy"></i>
        {{boy}}
      </div>
      <i class="iconfont icon-love"></i>
      <div class="name">
        <i class="iconfont icon-girl"></i>
        {{girl}}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "@/fonts/iconfont.css";
import "@/css/heart.css";
import "@/js/utils/snow";
// import { getProfileConfig } from "@/js/service/profile";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      boy: "谢喜儒",
      girl: "吴飞双",
      time: "2020-09-06 20:00:00"
    };
  },
  computed: {
    days: function() {
      return moment(new Date()).diff(moment(new Date(this.time)), "days");
    },
    title: function() {
      return "在一起的第" + this.days + "天";
    }
  },
  mounted() {
    console.log(this.boy, " Love ", this.girl);
    // getProfileConfig().then(data => {
    //   this.boy = data.profile.boy;
    //   this.girl = data.profile.girl;
    //   this.time = data.profile.time;
    //   console.log(this.boy, " Love ", this.girl);
    //   console.log(
    //     "页面访问量为",
    //     data.pv,
    //     "次，有",
    //     data.uv,
    //     "人见证了我们的爱情"
    //   );
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
