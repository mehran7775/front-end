<template>
  <div id="userPanelHeader">
    <notification v-if="is_notify" />
    <div id="userPanelHeaderWrapper" class="maxIs">
      <div class="d-flex align-items-center">
        <a class="log_out" href="/users/logout">
          <i
            id="logout"
            class="fas fa-sign-out-alt fa-2x fa-rotate-180"
            title="خروج"
          ></i>
        </a>
        <a class="ml-4" href="/"><img class="brand" src="/static/public/images/logo.png" alt=""/></a>
      </div>
      <div id="profile">
        <div id="image">
          <img :src="userInfo.picture" alt="" />
        </div>
        <p>{{ userInfo.username }}</p>
      </div>
      <div id="hamMenu" @click="toggleSubMenu">
        <div class="sikh1"></div>
        <div class="sikh2"></div>
        <div class="sikh3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Notification from "../../notification/Notification.vue";
export default {
  name: "userPanelHeader",
  components: {
    Notification,
  },
  computed: {
    is_notify() {
      return this.$store.state.toggle_notification_df_msg;
    },
  },
  methods: {
    ...mapActions([
      // 'toggleSubMenu'
    ]),
    toggleSubMenu() {
      const stickMenu = document.querySelector(".stickMenu");
      stickMenu.style.transition = "all 0.3s linear";
      stickMenu.style.right = "0";
    },
    watchInner() {
      const stickMenu = document.querySelector(".stickMenu");
      if (window.innerWidth <= 1000) {
        // stickMenu.style.display="block"
        this.$store.state.sideMenuOpen = false;
      } else {
        this.$store.state.sideMenuOpen = true;
      }
    },
  },
  mounted() {
    this.watchInner();
    // window.addEventListener("resize", () => {
    //   const sideMenu = document.querySelector("#sideMenu");
    //   if (window.innerWidth <= 1100) {
    //     this.$store.state.sideMenuOpen = false;
    //   } else {
    //     this.$store.state.sideMenuOpen = true;
    //     // sideMenu.style.right='0'
    //     // sideMenu.style.width="17%"
    //   }
    // });
  },
  created() {
    window.addEventListener("beforeinstallprompt", async (event) => {
      event.preventDefault();
      if (window.matchMedia("(display-mode: standalone)").matches) {
      } else {
        if (sessionStorage.getItem("say") !== "true") {
          this.$store.state.installEvent = event;
          this.$store.state.showInstallAppBanner = true;
        }
      }
      sessionStorage.setItem("say", "true");
      return false;
    });
  },
};
</script>

<style scoped>
#image {
  width: 50px;
  height: 50px;
}
#image img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
#profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
p {
  margin-left: 20px;
  color: rgb(108, 108, 108);
}
#userPanelHeader {
  width: 100%;
  height: max-content;
  position: relative;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
}
#userPanelHeaderWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
#hamMenu {
  margin-right: 20px;
  cursor: pointer;
}
.sikh1,
.sikh2,
.sikh3 {
  width: 40px;
  height: 5px;
  background: #0061af;
  margin-top: 4px;
}
.log_out {
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-left: 20px;
}
#logout {
  color: rgba(0, 0, 0, 0.63);
  transition: all 0.2s;
  cursor: pointer;
  direction: rtl !important;
}
#logout:hover {
  color: var(--blue);
}
@media (min-width: 1000px) {
  #hamMenu {
    display: none;
  }
}
.brand{
  width: 130px;
  height:40px;
}
</style>
