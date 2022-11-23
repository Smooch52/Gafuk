<template>
    <svg class="svg-icon">
        <use :xlink:href="target" :href="target"></use>
    </svg>
</template>
<script setup>
    import sprite from '@/assets/sprite.svg'
    const props = defineProps({
        name: String,
    });

    const target = `${sprite}#${props.name}`;

</script>


<style lang="scss">
    .svg-icon{
        width:1.5rem;
        height:1.5rem;
        display:inline-block;
        vertical-align: middle;
    }
    .icon-md{width:1.25rem; height:1.25rem;}
    .icon-sm{width:1rem; height:1rem;}
    .icon-xs{width:.75rem;}
</style>