  
const messages = [
    {
      _id: 0,
      text: 'system message',
      system: true,
    },
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'Up Levl',
      },
    },
    {
      _id: 2,
      text: 'Hi! I worked from home today!',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 21, 0)),
      user: {
        _id: 1,
        name: 'Username',
      },
      //image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 3,
      text: 'Cool you don\'t normally do that, how did you find it?',
      createdAt: new Date(Date.UTC(2016, 5, 14, 17, 23, 0)),
      user: {
        _id: 2,
        name: 'Up Levl',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: '😋 Great',
            value: 'Great',
          },
          {
            title: '😞Not the best',
            value: 'not the best',
          },

        ],
      },
    },
    {
      _id: 4,
      text: '😞Not the best',
      createdAt: new Date(Date.UTC(2016, 5, 15, 17, 25, 0)),
      user: {
        _id: 1,
        name: 'Username',
      },
    },
    {
      _id: 5,
      text: 'Why\'s that?',
      createdAt: new Date(Date.UTC(2016, 5, 15, 17, 26, 0)),
      user: {
        _id: 2,
        name: 'Up Levl',
      },
    },
  ];
  
  export default messages;