<script setup lang="ts">
import AutoLink from "@theme/AutoLink.vue";
import DropdownTransition from "@theme/DropdownTransition.vue";
import { computed, ref, toRefs, watch, unref } from "vue";
import type { PropType } from "vue";
import { useRoute } from "vue-router";
import type { NavbarItem, ResolvedNavbarItem } from "../../shared";
import { VsmMenu } from "vue-stripe-menu";

const props = defineProps({
    item: {
        type: Object as PropType<Exclude<ResolvedNavbarItem, NavbarItem>>,
        required: true,
    },
});

const { item } = toRefs(props);

const dropdownAriaLabel = computed(
    () => item.value.ariaLabel || item.value.text
);

const open = ref(false);
const route = useRoute();
watch(
    () => route.path,
    () => {
        open.value = false;
    }
);

const innerMenu = unref(item).children.map((link) => {
    return {
        title: link.text,
        dropdown: `${link.text}-dropdown`,
        icon: link.icon || "/ami-docs/images/icons/apple-touch-icon.png",
        link: link.link || "#",
    };
});

const menu = ref([
    { title: "Projects", dropdown: "projects-dropdown", element: "a" },
]);

const handleDropdown = (e): void => {
    const isTriggerByTab = e.detail === 0;
    if (isTriggerByTab) {
        open.value = !open.value;
    } else {
        open.value = false;
    }
};

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean =>
    arr[arr.length - 1] === item;
</script>

<template>
    <div class="navbar-dropdown-wrapper" :class="{ open }">
        <vsm-menu :menu="menu" style="color: black">
            <template #default="{ item }">
                <div
                    style="padding: 10px 10px 10px 30px"
                    v-for="link in innerMenu"
                >
                    <a
                        :href="`/ami-docs${link.link}`"
                        style="display: flex; align-items: center"
                    >
                        <div style="height: 25px; width: 25px">
                            <img :src="link.icon" alt="Project icon" />
                        </div>
                        <div style="width: 300px; padding-left: 20px">
                            {{ link.title }}
                        </div>
                    </a>
                </div>
            </template>
            <template #after-nav>
                <div
                    class="vsm-mob-show navbar-dropdown-wrapper"
                    :class="{ open }"
                >
                    <button
                        class="navbar-dropdown-title"
                        type="button"
                        :aria-label="dropdownAriaLabel"
                        @click="handleDropdown"
                    >
                        <span class="title">{{ item.text }}</span>
                        <span class="arrow down" />
                    </button>

                    <button
                        class="navbar-dropdown-title-mobile"
                        type="button"
                        :aria-label="dropdownAriaLabel"
                        @click="open = !open"
                    >
                        <span class="title">{{ item.text }}</span>
                        <span class="arrow" :class="open ? 'down' : 'right'" />
                    </button>

                    <DropdownTransition>
                        <ul v-show="open" class="navbar-dropdown">
                            <li
                                v-for="child in item.children"
                                :key="child.text"
                                class="navbar-dropdown-item"
                            >
                                <template v-if="child.children">
                                    <h4 class="navbar-dropdown-subtitle">
                                        <AutoLink
                                            v-if="child.link"
                                            :item="child"
                                            @focusout="
                                                isLastItemOfArray(
                                                    child,
                                                    item.children
                                                ) &&
                                                    child.children.length ===
                                                        0 &&
                                                    (open = false)
                                            "
                                        />

                                        <span v-else>{{ child.text }}</span>
                                    </h4>

                                    <ul class="navbar-dropdown-subitem-wrapper">
                                        <li
                                            v-for="grandchild in child.children"
                                            :key="grandchild.link"
                                            class="navbar-dropdown-subitem"
                                        >
                                            <AutoLink
                                                :item="grandchild"
                                                @focusout="
                                                    isLastItemOfArray(
                                                        grandchild,
                                                        child.children
                                                    ) &&
                                                        isLastItemOfArray(
                                                            child,
                                                            item.children
                                                        ) &&
                                                        (open = false)
                                                "
                                            />
                                        </li>
                                    </ul>
                                </template>

                                <template v-else>
                                    <AutoLink
                                        :item="child"
                                        @focusout="
                                            isLastItemOfArray(
                                                child,
                                                item.children
                                            ) && (open = false)
                                        "
                                    />
                                </template>
                            </li>
                        </ul>
                    </DropdownTransition>
                </div>
            </template>
        </vsm-menu>
    </div>
</template>

<style lang="scss">
@import "node_modules/vue-stripe-menu/src/scss/index";

.vsm-menu {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}

.vsm-link-container {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
}

.vsm-link {
    color: var(--c-text) !important;
    font-weight: 500;
    padding: 0;

    &:hover {
        span {
            margin-bottom: -2px;
            border-bottom: 2px solid var(--c-text-accent);
        }
    }
}

li.vsm-mob-container.vsm-mob-show {
    margin: 0;
    font-weight: 600;

    color: var(--c-text);

    &:hover {
        color: var(--c-text-accent);
    }
}

@media screen and (min-width: 720px) {
    .vsm-mob-show {
        display: none;
    }
}

@media screen and (max-width: 719px) {
    .vsm-mob-show {
        display: block;
    }
    .vsm-mob-hide {
        display: none;
    }
    .vsm-mob-full {
        flex-grow: 1;
    }
}

.vsm-dropdown-container {
    img {
        height: 25px;
        width: 25px;
        object-fit: cover;
    }
}
</style>
