<template>
    <h4 v-if="title">{{ title }}</h4>
    <table class="table table-bordered table-fixed " :ref="tabId">
        <thead>
            <tr class="text-center">
                <th v-for="header in headers" scope="col">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(list,idx) in listData">
				<td v-for="(key,keyIdx) in keys" ref="key">{{ utils.formatter(list[key],colTypes[keyIdx]) }}</td>
			</tr>
        </tbody>
    </table>
</template>
<script setup>
    import utils from "~/common/util.ts";
    
    const pageProp = defineProps(['title', 'tabId', 'headers', 'keys','colTypes', 'listData']);
    const {title, tabId, headers, keys, colTypes, listData} = pageProp;
    console.log({...pageProp})
</script>