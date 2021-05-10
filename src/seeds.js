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
}