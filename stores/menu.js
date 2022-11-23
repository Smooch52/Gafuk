
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const useMenu = defineStore('menuState', () =>  {

        const showMenu = ref(false);

        const toggleMenu = () => {
            showMenu.value = !showMenu.value;
            showMenu.value ? disablePageScroll() : enablePageScroll();
        }

        const menu = [
            {
              id:0,
              icon:'',
              url:'news',
              title:'Новости',
              mobile:false,
              footer:true,
              class:'hidden-sm hidden-md',
            },
            {
              id:1,
              icon:'case',
              url:'share',
              title:'Составы',
              mobile:true,
              footer:true,
              class:'',
            },
            {
              id:2,
              icon:'cart',
              url:'market',
              title:'Маркет',
              mobile:true,
              footer:true,
              class:'',
            },
            {
              id:3,
              icon:'key',
              url:'rent',
              title:'Аренда',
              mobile:true,
              footer:true,
              class:'',
            },
            {
              id:4,
              icon:'',
              url:'forum',
              title:'Форум',
              mobile:false,
              class:'',
            },
            {
              id:5,
              icon:'',
              url:'users',
              title:'Пользователи',
              mobile:false,
              footer:false,
              class:'hidden-sm hidden-md',
            },
            {
              id:6,
              icon:'',
              url:'catalog',
              title:'Каталог',
              mobile:false,
              footer:false,
              class:'hidden-sm',
            },
            {
              id:7,
              icon:'',
              url:'rights',
              title:'Правила',
              mobile:false,
              footer:true,
              class:'hidden-sm hidden-md',
            },
            
          ]


        return { showMenu, menu, toggleMenu }
  })