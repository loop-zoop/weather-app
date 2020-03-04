import {List} from 'immutable';

export const data = {
  user: {
    name: {
      firstName: 'John',
      lastName: 'Doe'
    },
    age: 20
  },
  posts: {
    first: {
      title: {
        en: 'Title',
        ru: 'Заголовок'
      },
      text: 'Lorem ipsum'
    },
    count: 15
  },
  notes: {
    data: [
      {
        author: 'John',
        content: 'asdfasdf'
      },
      {
        author: 'Jane',
        content: 'dfgjsldfgsdf'
      }
    ]
  },
  list: {
    data: List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  }
}
