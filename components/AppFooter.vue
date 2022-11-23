<template>
  <footer class="app-footer">
    <div class="container-fluid">
        <div class="app-footer__grid">
          <div class="app-footer__logo">
            <AppLogo modifier="footer"/>
          </div>
          <div class="app-footer__menu">
            <AppMenu modifier="footer" />
          </div>
          <div class="app-footer__donation donation-footer end-sm">
            <button type="button" class="btn btn-success btn-xl">Поддержать проект</button>
          </div>
          <div class="copyright app-footer__copyright">
            <p>18+ Сайт предназначен только для лиц 18 лет и старше</p>
            <p>&copy; Gafuk, 2014 &mdash; {{date}}</p>
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

  setup() {
        const date = new Date().getFullYear();
        return {
          date,
        }
    }
}
</script>

<style lang="scss">
  .app-footer{
    background:var(--color-base-invert);
    padding:3rem 0 6rem;

    &__grid{
      display:grid; 
      grid-template-columns: 3fr 1fr; 
      gap:.5rem 1rem;
    }
    &__menu {
      grid-row:1/4;
      grid-column:2/3;

      .main-menu__link{
        font-weight: 600;



      }

      .router-link-active{
        background:none;
        color:var(--color-brand);
      }

    }
    &__donation {
      padding:1rem 0;
      font-weight: 600;
    }
    
  }
  .app-footer__copyright{
      p{
        font-size:.875rem;
        margin-bottom:.75rem;
        &:last-child{
        font-size:.75rem;
          margin-bottom:0;
        }
      }
      
    }
  .main-menu--footer{
    margin-top:-.5rem;
    text-align: right;
  }
  @media screen and (min-width:48em) {
    .app-footer{padding:4rem 0 3rem;
      &__grid{
        gap:1rem;
        grid-template-rows: auto auto ; 
      }
      &__menu {
        grid-row:1/2;
        grid-column:2/3;
      }
      &__donation {
        grid-column:2/3;
      }
      &__copyright {
        grid-row:2/3;
      }
    }
    .app-footer__copyright{
      p{
        font-size:1rem;
        &:last-child{
          font-size:.875rem;
        }
      }
    }
    .main-menu--footer{
      margin-top:0;
    }
  }

</style>