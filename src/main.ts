import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';


const pages = {
  'auth': [ Pages.authPage , {title:  'Авторизация'}],
  'listpage': [ Pages.Pagelist , {title:  'Список'} ],
  'chat': [ Pages.ChatPage , {title:  'Чат'}],
  '404': [ Pages.Page404, {text: 'Не туда попали'} ],
  '500': [ Pages.Page500, {text: 'Мы уже фиксим'}  ],
  'profile': [ Pages.PageProfile, {title:  'Профиль'}  ],
  'changepassword': [ Pages.PageChange, {title:  'Изменить пароль'}  ],
  'change': [ Pages.PageChangeMain, {title:  'Изменить данные'}  ],
  'registrationPage': [ Pages.registrationPage , {title:  'Регистрация'} ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('listpage'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');

 
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
