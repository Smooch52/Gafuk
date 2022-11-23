<template>
    <div class="error-page">
        <div class="error-page__inner">
            <h1 class="error-page__title">404</h1>
            <ui-button @click="$router.go(-1)" class="btn-primary">Вернуться назад</ui-button>
        </div>
    </div>
</template>
<style lang="scss">
    .error-page{
        width:100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content: center;

        &__title{
            font-weight: 700;
            position: relative;
            font-size: 10rem;
            padding: 1rem;

            @media screen and (min-width:48em){
                font-size: 20vw;
            }
        }
        
    }
</style>