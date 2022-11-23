<template>
    <div class="profile-avatar" :class="avatar.size ? `profile-avatar--${avatar.size}` : ''">
        <svg v-if="avatar.size == 'lg' && avatar.post" class="profile-post">
            <use :xlink:href="`/_nuxt/assets/img/profile-status.svg#${avatar.post}`" :href="`/_nuxt/assets/img/profile-status.svg#${avatar.post}`"></use>
        </svg>
        <div class="profile-avatar__photo">
            <img class="profile-avatar__image" :src="avatar.src" alt="">
        </div>
        <span v-if="avatar.status" class="profile-avatar__status"></span>
    </div>
</template>

<script>
export default {
    props: {
        bg: String,
        src: String,
        size: String,
        status: String,
        post: String
    },
    setup(props) {
        return {avatar : props};
    },
}
</script>


<style lang="scss">
    .profile-avatar{
        position:relative;
        width:3rem;
        height:3rem;

        &__image{
            display:block;
            width: 100%;
            border-radius: 100%;
        }
        &__status{
            display:block;
            width:.675rem;
            height:.675rem;
            border-radius: 100%;
            background:var(--color-online);
            position:absolute;
            bottom:0;
            left:0;
            box-shadow:0 0 0 .15rem var(--color-bg);
        }
    }
    .profile-avatar--sm{
        width:1.5rem; 
        height:1.5rem;
    }

    .profile-avatar--lg{
        width:6.25rem; 
        height:6.25rem;

        .profile-avatar__status{
            width:1.25rem;
            height:1.25rem;
            box-shadow:0 0 0 .25rem var(--color-bg);
        }
    }

    .profile-post{
        position:absolute;
        top:-28%; left:-28%;
        width:156%;
        height:156%;
        display: block; z-index: -1;
    }
</style>