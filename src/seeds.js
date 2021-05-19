// https://github.com/lubersol/instagram-clon

// - seed.js
export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'vjfSOIIFY0P0XarJ8rWNIm7M4GI3',
            username: 'lubersol',
            fullName: 'Lucia Bermejo',
            emailAddress:'lubersol@gmail.com',
            following: ['2'],
            followers: [ '2','3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'raphael',
            fullName: 'Raphaello Sanzio de Urbino ',
            emailAddress:'raphael@gmail.com',
            following: ['2'],
            followers: ['vjfSOIIFY0P0XarJ8rWNIm7M4GI3'],
            dateCreated: Date.now()   
        },
        {
            userId: '3',
            username: 'picasso',
            fullName: 'Pablo Picasso',
            emailAddress:'raphael@gmail.com',
            following: ['2'],
            followers: ['vjfSOIIFY0P0XarJ8rWNIm7M4GI3'],
            dateCreated: Date.now()   
        },
        {
            userId: '4',
            username: 'dali',
            fullName: 'Salvador Dali',
            emailAddress:'salvador@gmail.com',
            following: ['3'],
            followers: ['vjfSOIIFY0P0XarJ8rWNIm7M4GI3'],
            dateCreated: Date.now()   
        },
        {
            userId: '5',
            username: 'leonardo',
            fullName: 'Leonardo Da Vinci',
            emailAddress:'leonardo@gmail.com',
            following: ['4'],
            followers: ['vjfSOIIFY0P0XarJ8rWNIm7M4GI3'],
            dateCreated: Date.now()   
        }
    ]
      // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}



