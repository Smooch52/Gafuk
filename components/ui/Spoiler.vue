<template>
    <div class="spoiler">
        <span class="spoiler__link" v-on:click="show = !show" :class="{'spoiler__link--active': show}">{{title}} <SvgIcon class="icon-sm" name="chevron-down"/></span>
        <transition name="fade">
            <div class="spoiler__content" v-if="show"><slot></slot></div>
         </transition>
    </div>
</template>

<script setup>  
    const props = defineProps({
        title: String,
    });
        const show = ref(false);
        const title = props.title;
</script>


<style lang="scss">

.spoiler{
    margin-bottom:1rem;
    &__link{
        font-weight: 600;
        display:flex;
        align-items: center;
        line-height:1.4;
        justify-content: space-between;
        padding:.5rem 0;
        border-bottom:1px solid var(--color-brand-light);
        cursor: pointer;
        .svg-icon{transition: transform .25s ease; flex:0 0 auto;}
    }
        
    &__link--active{
        border-color:transparent;
        .svg-icon{transform:rotate(180deg);}
    }
    
    &__content{
        padding:1rem 0;
    }
}
    .fade-enter-active,
    .fade-leave-active {
      transition: all .25s;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>