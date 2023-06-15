import bcyrpt from 'bcryptjs';



const users = [
    {
        name : 'Admin User',
        email : 'admin@email.com',
        password : bcyrpt.hashSync('123456',10),
        isAdmin : true,
    },
    {
        name : 'Ashish Tomar',
        email : 'ashish@email.com',
        password : bcyrpt.hashSync('123456',10),
        isAdmin : false,
    },
    {
        name : 'Akash Tomar',
        email : 'akash@email.com',
        password : bcyrpt.hashSync('123456',10),
        isAdmin : false,
    }
];

export default users;

