<template>
    <el-header class="text-right">
        <div class="toolbar">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    Tom
                    <el-icon style="margin-right: 8px; margin-top: 1px"><Setting /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item divided>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>        
    </el-header>
</template>
<script setup>
import { Setting } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>