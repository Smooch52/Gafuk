<template>
  <header class="app-header">
    <div class="container-fluid">
        <div class="row row-nowrap middle-xs between-md">
            <div class="col-xs-6 col-sm-auto col-xl-2">
                <AppLogo/>
            </div>
            <div class="col-xs-6 col-sm-auto col-xl-2 last-sm">
                <div class="row middle-xs end-xs">
                    <ui-button class="btn-link btn-notification">
                        <span class="counter-badge">256</span>
                        <SvgIcon name="mail"/>
                    </ui-button>
                    <ui-button class="btn-link btn-notification">
                        <span class="counter-badge">3</span>
                        <SvgIcon name="ring"/>
                    </ui-button>
                    <AppHeaderProfile/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-full col-xl-8">
                <button class="btn menu-dropdown hidden-xs hidden-lg">
                    <svg class="svg-icon btn-burger mobile-nav__icon"  viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="btn-burger__line" d="M21 13H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="btn-burger__line" d="M21 7H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="btn-burger__line" d="M21 1H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="row between-xs middle-xs card app-header__card hidden-xs">
                    <AppMenu class="main-menu"/>
                    <div class="app-header__search" :class="{'is-show' : searchActive}">
                        <AppSearch ref="search" v-show="searchActive"/>
                        <ui-button v-show="searchActive" @click="hideSearch" class="btn-link search-hide"><SvgIcon name="close-xs"/></ui-button>
                        <ui-button v-show="!searchActive" @click="showSearch" class="btn-link search-show"><SvgIcon name="search"/></ui-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>



<script setup>
    let searchActive = ref(false);
    const showSearch = () =>  searchActive.value = true;
    const hideSearch = () => searchActive.value = false;

</script>

<style lang="scss">
    .app-header{

        @media screen  and (min-width:48em){
            padding:1rem 0;
        }
        &__card{
            max-width:53rem;
            margin:auto;
            padding:4px 6px;
            position:relative;
        }

        &__search{
            position:absolute;
            top:0;
            right:0;
            height:100%;
            width:3rem;
            transition: width .25s linear;
            
            &.is-show{
                width:100%;
            }
            .search-show,
            .search-hide{
                position:absolute;
                top:0;
                bottom:0;
                display: flex;
                align-items:center;
                padding:.5rem;
                right:.75rem;
                
            }
            .search-hide{right:3rem;}
            input{
                border-radius: 1.5rem; 
                padding-top:.75rem;
                padding-bottom:.75rem;
                background:var(--color-base-invert);
                padding-right:5rem;
            }

        }

        .menu-dropdown{
            float:left;
            padding:.75rem;
        }
    }
</style>