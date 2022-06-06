<template>
    <div class="common-layout">
        <el-container style="min-height: 100vh"  direction="vertical">
            <Header />
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container direction="vertical">
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <Footer />
                </el-container>
            </el-container>
        </el-container>
    </div>
    <!-- <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div> -->
</template>
<script setup>
import Header from'./layout/Header.vue'
import Footer from './layout/Footer.vue'
</script>