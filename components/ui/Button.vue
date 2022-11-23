<template>
    <a v-if="props.href != ''" :href="props.href" class="btn">
        <slot></slot>
    </a>
    <button v-else :type="props.type" class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default defineComponent({
    props:{
        type: {
            type: String,
            default: 'button'
        },
        href: {
            type: String,
            default:''
        }
    },
    setup(props) {
        return { props }
    }
});
</script>

<style lang="scss">

.btn{
    border-radius:var(--rounded);
    padding:.5rem 1.75rem;
    line-height:1.2;
    text-decoration: none;
    transition: background .25s ease, color .25s ease;

    &-xl{
        padding:1rem 1.5rem;
    }

    &-primary{
        background:var(--color-brand);
        color:var(--color-base-invert);
        &:hover{
            background:var(--color-brand-light);
            color:var(--color-brand)
        }
    }
    &-link{
        padding:.5rem;
        color:var(--color-brand);
    }
    &-success{
        background:var(--color-success-light);
        &:hover{
            opacity: .9;
        }
    }

}
</style>