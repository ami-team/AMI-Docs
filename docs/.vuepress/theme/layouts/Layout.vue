<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
    <ParentLayout>
        <template #navbar-before>
            <a
                href="https://github.com/ami-team/awfwebpack"
                style="display: flex; align-items: center; padding-right: 1em"
            >
                <img
                    src="https://img.shields.io/badge/AMI%20Web%20Framework-2.0.0-brightgreen"
                    alt="Badge displaying the current version of AMI Web Framework"
                />
            </a>
        </template>
    </ParentLayout>
</template>
