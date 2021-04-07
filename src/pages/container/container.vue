<template>
  <el-container style="height:100vh;">
    <el-header class="header">
      <div class="top-title">vite2-vue3-TypeScript4</div>
      <div class="header-dropdown">
        <el-dropdown size="small">
          <span class="el-dropdown-link">{{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" class="menu">
        <el-menu :default-active="defaultActive" :unique-opened="true" :router="true" background-color="#333853">
          <template v-for="(item,index) in ChildRoutes" :key="item.path+index">
            <el-submenu :index="item.path" v-if="item.children&&item.children.length>0">
              <template #title>{{item.name}}</template>
              <template v-for="(child,childIndex) in item.children" :key="child.path+childIndex">
                <el-menu-item v-if="child.meta.isShow" :index="item.path+'/'+child.path">{{child.name}}</el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
              <template #title>{{item.name}}</template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="container-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { ref, reactive, onMounted, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { childRoutes } from '@/router/index';
import { useStore } from 'vuex';

export default {
  setup() {
    const ChildRoutes = reactive(childRoutes);
    const defaultActive = ref('/form/select');
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const userInfo = ref(store.state.userInfo.metaData);
    const logout = () => {
      router.replace('/login');
    };
    onMounted(() => {
      console.log(store.getters.token);
    });
    watchEffect(() => {
      defaultActive.value = route.path;
    });
    return {
      ChildRoutes,
      defaultActive,
      logout,
      store,
      userInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #333853;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .top-title {
    font-size: 22px;
  }
}
</style>
<style lang="scss">
.header-dropdown {
  .el-dropdown {
    color: #fff !important;
    font-size: 16px;
  }
}
.menu::-webkit-scrollbar {
  display: none; /*隐藏滚轮*/
}
.container-main {
  height: calc(100vh - 60px);
}
.container-main::-webkit-scrollbar {
  display: none; /*隐藏滚轮*/
}
.menu {
  background: #333853 !important;
  color: #fff !important;
  height: calc(100vh - 60px);

  .el-menu {
    width: 100% !important;
  }
  .el-submenu__title {
    color: #fff !important;
  }

  .el-submenu__title:hover {
    background-color: #354263 !important;
  }

  .el-submenu__title:focus {
    background-color: #354263 !important;
  }
  .el-menu-item {
    color: #fff;
  }
  .el-submenu .el-menu-item {
    color: #cfc2c2;
  }

  .el-menu-item:hover {
    background-color: #354263 !important;
  }

  .el-menu-item:focus {
    background-color: #354263 !important;
  }

  .is-active {
    background-color: #354263 !important;
    color: #409eff !important;
  }
}
</style>