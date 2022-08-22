export const menus = [
  {
    title: '체크메뉴1',
    list: [
      {
        title: 'sameValue',
        value: 'sameValue',
      },
      {
        title: 'Menu1-2',
        value: 'Menu1-2',
      },
      {
        title: 'Menu1-3',
        value: 'Menu1-3',
      },
    ],
  },
  {
    title: '체크메뉴2',
    list: [
      {
        title: 'sameValue',
        value: 'sameValue',
      },
      {
        title: 'Menu2-2',
        value: 'Menu2-2',
      },
      {
        title: 'Menu2-3',
        value: 'Menu2-3',
      },
      {
        title: 'Menu2-4',
        value: 'Menu2-4',
      },
    ],
  },
  {
    title: '체크메뉴3',
    list: [
      {
        title: 'Menu3-1',
        value: 'Menu3-1',
      },
      {
        title: 'Menu3-2',
        value: 'Menu3-2',
      },
    ],
  },
];

export const menus2 = [
  {
    title: 'Deafult Menu1',
    list: [
      {
        title: 'sameValue',
        value: 'sameValue',
      },
      {
        title: 'diffVal1',
        value: 'diffVal1',
      },
    ],
  },
  {
    title: 'Deafult Menu2',
    list: [
      {
        title: 'sameValue',
        value: 'sameValue',
      },
      {
        title: 'diffVal2',
        value: 'diffVal2',
      },
    ],
  },
];
export const menus3 = [
  {
    title: '즐겨찾기1',
    list: [
      {
        title: '커리어웹 가기',
        value: 'https://career.rememberapp.co.kr/',
        onClick: (value: string) => {
          window.open(value);
        },
      },
      {
        title: '리멤버웹 가기',
        value: 'https://rememberapp.co.kr/',
        onClick: (value: string) => {
          window.open(value);
        },
      },
    ],
  },
  {
    title: '즐겨찾기2',
    list: [
      {
        title: '프로필웹 가기',
        value: 'http://profile.rememberapp.co.kr/',
        onClick: (value: string) => {
          window.open(value);
        },
      },
      {
        title: '커뮤니티웹 가기',
        value: 'https://community.rememberapp.co.kr/',
        onClick: (value: string) => {
          window.open(value);
        },
      },
    ],
  },
];
