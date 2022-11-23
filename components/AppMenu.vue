<template>
  <nav class="main-menu" :class="menuClass">
      <NuxtLink
      class="main-menu__link" :class="link.class"
      v-for="link in menu" 
      :key="link.id"
      :to="link.url">{{ link.title }}</NuxtLink>
  </nav>
</template>



<script setup>
  import { useMenu } from '@/stores/menu';

  const props = defineProps( {
      modifier: String
  });
  let deskMenu = true;
  const menuState = useMenu();
  const {menu} = menuState;
  const menuClass = props.modifier ? `main-menu--${props.modifier}`: false;
  const topMenu = !menuClass;

  const onResize = () =>{
      console.log('Resized');
  }
  
  onMounted(() => {
    nextTick(() => {
      onResize()
    });

    window.addEventListener('resize', onResize());
  });

</script>

<style lang="scss">
.main-menu{
  &__link{
    display: block;
    font-weight: 500;
    color:inherit;
    text-decoration: none;line-height:1;
    padding:.75rem 1rem;

    &.router-link-active{
      background:var(--color-brand); 
      color:var(--color-base-invert);
      border-radius: var(--rounded);
    }
    }

  &--footer{
    a:nth-last-child(2){
      display: none;
    }
    a:nth-last-child(3){
      display: none;
    }
  }
  @media screen and (min-width:48em) {
     display: flex;
  }
}

</style>