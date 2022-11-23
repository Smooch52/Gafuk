<template>
    <form class="app-search" action="">
        <div class="field app-search__field">
            <input class="app-search__input" ref="search" type="text" name="q">
            <ui-button type="submit" class="btn-link"><SvgIcon name="search"/></ui-button>
        </div> 
    </form>
</template>

<script setup>
    const search = ref();

    onUpdated(() => {
        search.value.focus();
    })
</script>

<style lang="scss">
.app-search{
    width:100%;
    position:relative;
    &__field{
        margin-bottom:0;
    }
   .btn{
        position:absolute; 
        top:0;
        right:0;
        padding:0 1.25rem;
        display: flex;
        align-items:center;
        height:100%;
        bottom:0;
    }
}

</style>