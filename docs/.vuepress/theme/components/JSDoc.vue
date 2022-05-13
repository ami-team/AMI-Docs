<template>
    <div v-for="(section, name) in myJSDoc">
        <h2>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h2>
        <div v-if="name === 'functions'" v-for="func in section">
            <h4 :id="func.name" style="margin: 0; font-size: 1.5rem">
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
                <h5 style="margin: 0">Parameters</h5>
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

        <div v-else v-for="part in section">
            <h4 :id="part.name" style="margin: 0; font-size: 1.5rem">
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
                    <h5 style="margin: 0">Parameters</h5>
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
    mounted() {
        console.log(this.myJSDoc);
    },
};
</script>

<style scoped></style>
