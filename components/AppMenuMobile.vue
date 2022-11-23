<template>
<Transition name="showmenu">
  <nav v-if="showMenu" class="mobile-menu">
      <div class="mobile-menu__inner">
        <NuxtLink
        class="mobile-menu__link"
        @click="toggleMenu"
        v-for="link in menu" 
        :key="link.id" 
        :to="link.url">{{ link.title }}</NuxtLink>
      </div>
  </nav>
</Transition>
  <nav class="visible-xs-block mobile-nav">
    <div class="row around-xs row-nowrap">
      <NuxtLink
      class="mobile-nav__link" 
      v-for="link in fastMenu" 
      :key="link.id" 
      :to="link.url">
      <SvgIcon class="mobile-nav__icon" :name="link.icon"/>
      <span class="mobile-nav__text"> {{ link.title }}</span>
     
      </NuxtLink>
      <button @click="toggleMenu" class="mobile-nav__link">
          <svg class="svg-icon btn-burger mobile-nav__icon" :class="{ 'btn-burger--active' : showMenu }" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="btn-burger__line" d="M21 13H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="btn-burger__line" d="M21 7H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="btn-burger__line" d="M21 1H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mobile-nav__text">Меню</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { useMenu } from '@/stores/menu'
import { storeToRefs } from 'pinia'

export default {
  props: {
      modifier: String
  },

  setup(props) {

    const menuState = useMenu();
    const {showMenu} = storeToRefs(menuState);
    const {toggleMenu} = menuState;
    const {menu} = menuState;

    const fastMenu = menu.filter(e => e.mobile === true);

    return {
      menu,
      fastMenu,
      showMenu,
      toggleMenu
    }
  }
}
</script>

<style lang="scss">
  .mobile-nav{
    display: block;
    background:var(--color-base-invert);
    border-radius: 1.5rem 1.5rem 0 0;
    padding:.5rem 1rem 0;
    position:fixed;
    bottom:0;
    left:0;
    width:100%; 
    z-index: 100;
    box-shadow:.5rem -.5rem 1.5rem rgba(73, 73, 135, 0.1);;
    &__link{
      text-decoration: none;
      color:var(--color-base);
      padding:.5rem;
      font-size:.75rem;
    }
    &__icon{
      display: block;
      margin:auto;
      margin-bottom:2px;
    }
    &__text{
      color:var(--color-base);
    }
    
    .router-link-active{
      .svg-icon{
        color:var(--color-brand);
      }
    }
  }


  .mobile-menu{
    transform-origin: 0 50%;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:var(--color-base-invert);
    z-index:100;

  &__inner{
    display:block;
  }
    &__link{
      display:block;
      text-decoration: none;
      color:var(--color-base);
      padding:1rem 1.5rem;
      border-bottom:1px solid var(--color-bg);
      position:relative;
      &:after{
        content:'';
        display: block;
        width:.675rem;
        height:.675rem;
        position:absolute;
        top:1.25rem;
        right:1.5rem;
        border-radius: 0 3px 0 0;
        border-top:2px solid var(--color-brand);
        border-right:2px solid var(--color-brand);
        transform: rotate(45deg);
      }

      &.router-link-active{
        background:var(--color-bg);
        border-radius: 0;
        color:var(--color-brand);
      }
    }
  }

  .showmenu-enter-active,
  .showmenu-leave-active {
    transition: transform 0.5s ease, opacity 0.25s ease;
  }

  .showmenu-enter-from,
  .showmenu-leave-to {
    transform: rotateY(180deg);
  }
</style>