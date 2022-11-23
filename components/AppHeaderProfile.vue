<template>
    <div class="dropdown header-profile">
        <button @click="toggleDropdown" class="btn btn-link toggle-profile header-profile__button">
            <AppAvatar src="/_nuxt/public/img/ava.png" status="online" post="org"/>
            <SvgIcon class="icon-xs" name="chevron-down"/>
        </button>
        <Transition name="dropdown">
            <nav v-if="state.isDrop" class="profile-menu dropdown__content">
                <NuxtLink
                    class="profile-menu__link" 
                    v-for="link in menu" 
                    :key="link.id" 
                    :to="link.url">
                    <SvgIcon v-if="link.icon" :name="link.icon"/>
                    <AppAvatar v-else src="/_nuxt/public/img/ava.png" size="sm"/>
                    <span class="profile-menu__text">{{ link.title }}</span>
                </NuxtLink> 
            </nav>
        </Transition>
    </div>
</template>

<script>
export default {

  setup() {

    const state = ref({
        isDrop: false
    });

    const menu = [
            {
                id:0,
                url:'#',
                title:'Smooch',
            },
            {
                id:1,
                url:'#',
                title:'Мои составы',
                icon:'case'
            },
            {
                id:2,
                url:'#',
                title:'Добавить профиль',
                icon:'add'
            },
            {
                id:3,
                url:'#',
                title:'Сменить тему',
                icon:'sun'
            },
            {
                id:4,
                url:'#',
                title:'Пароли',
                icon:'lock'
            },
            {
                id:5,
                url:'#',
                title:'Выйти',
                icon:'logout'
            }
        ]

        const toggleDropdown = (e) => {
            e.preventDefault();
            state.value.isDrop = !state.value.isDrop;
        }

        return{
            menu,
            state,
            toggleDropdown
        }
    }
}
</script>

<style lang="scss">

    .header-profile{
        &__button{
            position:relative;
            padding-right:1rem;

            .svg-icon{
                position:absolute;
                right:0;
                top:0;
                bottom:0;
                margin:auto;
                height:.5rem;

            }
        }

    }

    .profile-menu{
        text-align: left;
        padding:.5rem 0;
        left:auto;
        right:0;

        &__link{
            display:flex;
            align-items:center;
            text-decoration: none;
            color:var(--color-base);
            padding:.5rem 2rem;
            line-height:1.3;
            font-weight: 500;

            .svg-icon, .profile-avatar{
                margin-right:.5rem;
                color:var(--color-brand);
            }

            &:hover{
                background:var(--color-bg);
            }
        }

        &__text{
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>