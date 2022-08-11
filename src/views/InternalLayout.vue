<template>
    <div class="common-layout">
        <el-container style="min-height: 100vh" direction="vertical">
            <el-container>
                <el-aside width="200px">
                    <SideBar />
                </el-aside>
                <el-container direction="vertical">
                    <Header />
                    <el-main>
                        <router-view v-slot="{ Component }">
                            <transition name="fade-transform" mode="out-in">
                                <keep-alive>
                                    <component :is="Component" />
                                </keep-alive>
                            </transition>
                        </router-view>
                    </el-main>
                    <Footer />
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import Header from'./layout/Header.vue'
import SideBar from './layout/SideBar.vue'
import Footer from './layout/Footer.vue'
</script>
<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all .5s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>