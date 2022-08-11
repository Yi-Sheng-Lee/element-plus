<template>
    <el-menu
        class="el-menu-vertical-demo"
        style="min-height: 100vh;"
        :collapse="isCollapse"
    >
        <el-sub-menu index="1">
            <template #title>
                <el-icon><Location /></el-icon>
                <span>Navigator One</span>
            </template>
            <!-- <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group> -->
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">websocket</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon><Document /></el-icon>
            <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
        </el-menu-item>
    </el-menu>
</template>
<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,

} from '@element-plus/icons-vue'
import { ref } from '@vue/reactivity'

const isCollapse = ref(false)
</script>