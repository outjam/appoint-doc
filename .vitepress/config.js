export default {
  title: 'appoint',

  markdown: {
    lineNumbers: true,
    mermaid: true
  },

  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', href: 'assets/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3c87ff' }],
  ],
  
  appearance: 'dark',
  
  themeConfig: {
    siteTitle: 'appoint',
    logo: 'assets/logo.png',
    
    socialLinks: [
      { icon: 'telegram', link: 'https://github.com/your-repo' },
      { icon: 'slack', link: '' }
    ],
    
    // nav: [
    //   { text: 'Бизнес логика', link: '/' },
    //   { text: 'Дизайн', link: '/' }
    // ],
    
    sidebar: [
      {
        text: 'Основное',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'Релизы и обновления',
            link: '/docs/main/Update.md'
          },
          {
            text: 'Доступы',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Смена стендов',
                link: '/docs/main/Accesses/ChangeofStands.md'
              },
              {
                text: 'Админ-панель',
                link: '/docs/main/Accesses/AdminAppoint.md'
              },
              {
                text: 'Белый список',
                link: '/docs/main/Accesses/WhiteList.md'
              },
              {
                text: 'VPN',
                link: '/docs/main/Accesses/VPN.md'
              }
            ]
          },
          {
            text: 'Дистрибуция и магазины',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'AppStore',
                link: '/docs/main/DistributionAndStores/AppStore.md'
              },
              {
                text: 'TestFlight',
                link: '/docs/main/DistributionAndStores/TestFlight.md'
              },
              {
                text: 'Google Play',
                link: '/docs/main/DistributionAndStores/GooglePlay'
              },
              {
                text: 'RuStore',
                link: '/docs/main/DistributionAndStores/RuStore'
              },
              {
                text: 'APK',
                link: '/docs/main/DistributionAndStores/APK'
              },
            ]
          },
          {
            text: 'Уведомления и рассылки',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Push'
              },
              {
                text: 'SMS'
              },
              {
                text: 'Email'
              },
            ]
          },
          {
            text: 'Внешние сервисы',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Почта'
              },
              {
                text: 'Эквайринг ВТБ'
              },
              {
                text: 'Yandex Cloud'
              },
              {
                text: 'Notificore'
              },
              {
                text: 'Яндекс Карты'
              },
              {
                text: 'DaData'
              },
              {
                text: 'Tilda'
              }
            ]
          },
          {
            text: 'Интеграции',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'МТС Лайв'
              },
              {
                text: 'YCLIENTS'
              }
            ]
          }
        ]
      },
      {
        text: 'Приложение',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Вход и регистрация',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Авторизация'
              },
              {
                text: 'Регистрация'
              }
            ]
          },
          {
            text: 'Афиша и контент',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Истории'
              },
              {
                text: 'Подборки'
              },
              {
                text: 'Главная'
              },
              {
                text: 'Категории'
              },
              {
                text: 'Подкатегории'
              },
              {
                text: 'Документы'
              },
              {
                text: 'Помощь и вопросы'
              }
            ]
          },
          {
            text: 'Платежи и финансы',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Платежи и транзакции'
              },
              {
                text: 'Внутренняя валюта'
              },
              {
                text: 'Подписка'
              },
              {
                text: 'Бронирование и покупка'
              },
              {
                text: 'Возвраты',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    text: 'Личный кабинет'
                  },
                  {
                    text: 'МТС Лайв'
                  },
                  {
                    text: 'YCLIENTS'
                  },
                ]
              },
              {
                text: 'Промокод',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    text: 'Генерация'
                  },
                  {
                    text: 'Использование'
                  }
                ]
              },
            ]
          },
          {
            text: 'Профиль и настройки',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Редактирование профиля'
              },
              {
                text: 'Настройки',
                collapsible: true,
                collapsed: true,
                items: [
                  {
                    text: 'Уведомления'
                  },
                  {
                    text: 'Иконка приложения'
                  },
                ]
              }
            ]
          },
        ]
      },
      {
        text: 'Личный кабинет',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Вход и регистрация',
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: 'Авторизация'
              },
              {
                text: 'Регистрация',
                link: '/docs/merchant/Auth/Sign-Up.md'
              }
            ]
          }
        ]
      },
      {
        text: 'Админ-панель',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Статусы',
            collapsible: true,
            collapsed: true,
            link: '/docs/admin/Core/Status/StatusIndex.md',
            items: [
              {
                text: 'Верификация компании',
                link: '/docs/admin/Core/Status/StatusVerification.md'
              },
              {
                text: 'Видимость сущностей',
                link: '/docs/admin/Core/Status/StatusPublished.md'
              },
              {
                text: 'Счёт и баланс',
                link: '/docs/admin/Core/Status/StatusBalance.md'
              }
            ]
          },
          {
            text: 'Удаление компании',
            link: '/docs/admin/Core/DeleteCompany.md'
          }
        ]
      },
      {
        text: 'Example',
        link: '/docs/example.md'
      }
    ],

    
    // // Редактировать на GitHub
    // editLink: {
    //   pattern: 'https://github.com/your-repo/edit/main/docs/:path',
    //   text: 'Редактировать эту страницу на GitLab'
    // }
  }
}