import Handlebars from 'handlebars';
import avatar from '/img/avatar.png'

export { default as ListChat } from './list-chat.hbs?raw';


Handlebars.registerHelper('item', () => {
    return [
        {name: 'Киноклуб', avatar: avatar, text: 'Друзья, у меня для вас особенный выпуск новостей!...' ,time:'10:49', count:'2'},
        {name: 'Илья', avatar: avatar, active: true, text: 'И Human Interface Guidelines и Material Design рекомендуют...',time:'10:49'},
        {name: 'Киноклуб', avatar: avatar, text: 'Друзья, у меня для вас особенный выпуск новостей!...' ,time:'10:49'},
        {name: 'Илья', avatar: avatar, text: 'И Human Interface Guidelines и Material Design рекомендуют...',time:'10:49'},
        {name: 'Киноклуб', avatar: avatar, text: 'Друзья, у меня для вас особенный выпуск новостей!...',time:'10:49'},
        {name: 'Илья', avatar: avatar, text: 'И Human Interface Guidelines и Material Design рекомендуют...',time:'10:49'},
        {name: 'тет-а-теты', avatar: avatar, text: 'Миллионы россиян ежедневно проводят десятки часов свое...',time:'10:49'},
    ]
})
