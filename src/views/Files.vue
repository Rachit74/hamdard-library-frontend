<script setup>
const props = defineProps(
    {
        department: String
    }
)

console.log(props.department);
</script>

<template>
    {{ props.department }} files
</template>