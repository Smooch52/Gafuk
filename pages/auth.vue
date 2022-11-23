<template>
    <div class="auth-page">  
        <header class="app-header auth-page__header">
            <div class="container">
                <div class="col-xs-4"><AppLogo/></div>
            </div>
        </header>
        <div class="auth-bg">
            <img src="@/assets/img/bg.svg" alt=""/>
        </div>
        <div class="auth-bg auth-bg--second">
            <img src="@/assets/img/bg.svg" alt=""/>
        </div>
        <div class="container">
            <div class="auth-page__outer">
                <div class="card card--border card--glass auth-page__card">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <form class="auth-page__form" action="">
                                <h1>Вход</h1>
                                <div class="field">
                                    <label for="">Имя пользователя</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label for="">Пароль</label>
                                    <input type="password">
                                </div>
                                <div class="field forgot-field">
                                    <a href="#">Забыли пароль? Восстановить</a>
                                </div>
                                <button class="btn btn-primary" type="submit">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auth-page__image">
                <img src="@/assets/img/spiderman.png" alt=""/>
            </div>
        </div>
    </div>
</template>

<script>
    definePageMeta({
        layout: false,
    });
</script>

<style lang="scss">

    .auth-page{
        width:100%;
        height:100%;
        position: relative;
        overflow: hidden;

        .auth-bg{
            pointer-events: none;
            position:absolute;
            width:80rem;
            bottom:-40rem;
            right:-50rem; 
            z-index: -1;
            img{
                max-width: 100%;
                animation: bgRotate 25s infinite;
                @keyframes bgRotate {
                    from{transform: rotate(0);}
                    to{transform: rotate(360deg);}

                }
            }

            &--second{
                top:-20rem;
                left:-60rem; 
            }
        }

        &__card{
            padding-bottom:3rem;
        }

        &__image{
            pointer-events: none;
            position:relative;
            right:-5rem;
            &:before{
                content:'';
                display: block;
                position:absolute;
                width:12rem;
                height:12rem;
                bottom:5rem;
                left:-5rem;
                background:url(@/assets/img/headset.png) no-repeat 50% 50%;
                background-size:contain;
                transform: scale(-1, 1);
            }
            img{
                max-width: 110%;
                display: block;
                margin-top:-7rem;
            }
        }
        &__outer{
            &:before{
                content:'';
                display: block;
                position:absolute;
                width:13rem;
                height:13rem;
                top:-2rem;
                right:-2rem;
                z-index: -3;
                background:url(@/assets/img/gamepad.png) no-repeat 50% 50%;
                background-size:contain;
            }
        }
    }

    @media screen and (min-width:64em) {
        .auth-page{
            min-height:100vh;

            &__header{
                width:100%;
                padding:4rem 0;
                position:absolute;
                top:0;
                left:0;
            }
            &__outer{
                margin:20vh 0;
                &:before{
                    width:15rem;
                    height:13rem;
                    top:7%;
                    left:50%;
                }
            }
            &__card{
                width:100%;
                padding:3.5rem 5rem;
            }
            &__form{
                max-width:25rem;
                margin-left:auto;
            }
            &__image{
                position:absolute;
                bottom:0;
                right:0;
                width:60%;
                left:40%;
                &:before{
                    width:13rem;
                    height:13rem;
                    top:20%;
                    left:auto;
                    bottom:auto;
                    right:10%;
                    transform: scale(1);
                }
                img{
                    max-width: 100%;
                    margin:auto;
                    margin-top:0;
                }

            }
            .auth-bg{
                width:100vw;
                bottom:-20vw;
                right:-60vw; 
                left:auto;
                top:auto;

                &--second{
                    right:auto;
                    bottom:auto;
                    top:-10vw;
                    left:-50vw; 
                }
            }
            }
    }

</style>