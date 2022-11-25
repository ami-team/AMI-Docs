<template>
    <div v-for="(section, name) in myJSDoc">
        <div class="accordion" @click="openPanel" v-if="name !== 'default'">
            <h2 style="padding-top: 0; margin-top: 0">
                {{ name.charAt(0).toUpperCase() + name.slice(1) }}
            </h2>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
            </svg>
        </div>

        <div class="panel" v-if="name === 'functions'" v-for="func in section">
            <h4
                :id="func.name"
                style="margin: 0; padding-top: 0; font-size: 1.5rem"
            >
                <a
                    class="header-anchor"
                    :href="`#${func.name}`"
                    aria-hidden="true"
                    >#</a
                >{{ func.name }}(<span
                    style="color: #60a5fa; font-weight: 500"
                    v-for="param in func.params"
                    >{{ param.name
                    }}{{
                        param !== func.params[func.params.length - 1]
                            ? ", "
                            : ""
                    }}
                    <small style="color: gray" v-if="param.optional === true"
                        >,opt</small
                    ></span
                >)
            </h4>

            <p style="color: #475569; margin-top: 0">
                {{ func.desc }}
            </p>

            <div v-if="func.params.length > 0">
                <h5 style="margin: 0; padding-top: 0">Parameters</h5>
                <table style="width: 100%; margin-bottom: 2rem">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Description</th>
                    </tr>
                    <tr v-for="param in func.params">
                        <th>{{ param.name }}</th>
                        <th>{{ param.type[0] }}</th>
                        <th>{{ param.optional }}</th>
                        <th>{{ param.desc }}</th>
                    </tr>
                </table>
            </div>
        </div>

        <div class="panel" v-else v-for="part in section">
            <h4
                :id="part.name"
                style="margin: 0; padding-top: 0; font-size: 1.5rem"
            >
                <a
                    class="header-anchor"
                    :href="`#${part.name}`"
                    aria-hidden="true"
                    >#</a
                >{{ part.name }}
            </h4>

            <div v-for="functions in part.functions">
                <p style="font-weight: bold; margin: 0; font-size: 1.1rem">
                    {{ functions.name }}(<span
                        style="color: #60a5fa; font-weight: 500"
                        v-for="param in functions.params"
                        >{{ param.name
                        }}{{
                            param !==
                            functions.params[functions.params.length - 1]
                                ? ", "
                                : ""
                        }}
                        <small
                            style="color: gray"
                            v-if="param.optional === true"
                            >,opt</small
                        ></span
                    >)<span
                        v-for="typeReturn in functions.returns"
                        style="color: #94a3b8"
                        >-> { {{ typeReturn.type[0] }} }</span
                    >
                </p>
                <p style="color: #475569; margin-top: 0">
                    {{ functions.desc }}
                </p>

                <div v-if="functions.params.length > 0">
                    <h5 style="margin: 0; padding-top: 0">Parameters</h5>
                    <table style="width: 100%; margin-bottom: 2rem">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Optional</th>
                            <th>Description</th>
                        </tr>
                        <tr v-for="param in functions.params">
                            <th>{{ param.name }}</th>
                            <th>{{ param.type[0] }}</th>
                            <th>{{ param.optional }}</th>
                            <th>{{ param.desc }}</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as content from "./JSDoc.json";
export default {
    name: "JSDoc",
    data() {
        return {
            myJSDoc: content,
        };
    },
    methods: {
        openPanel(e) {
            if (
                e.currentTarget.nextElementSibling.style.display === "none" ||
                !e.currentTarget.nextElementSibling.style.display
            ) {
                e.currentTarget.nextElementSibling.style.display = "block";
            } else {
                e.currentTarget.nextElementSibling.style.display = "none";
            }
        },
    },
    mounted() {
        console.log(this.myJSDoc);
    },
};
</script>

<style scoped>
.accordion {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.accordion h2 {
    width: 100%;
}

.panel {
    display: none;
}
</style>
