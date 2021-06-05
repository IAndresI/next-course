const mongoose = require('mongoose');

const user1 = mongoose.Types.ObjectId(), user2 = mongoose.Types.ObjectId()

module.exports = {
  users: [
    {
      _id: user1,
      avatar: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
      email: "asd@mail.ru",
      name: "Lox",
      userName: "Loxxxxxxx",
      info: "I'm Lox)0))",
      password: "1234567",
      role: "ADMIN"
    },
    {
      _id: user2,
      avatar: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
      email: "asd1234@mail.ru",
      name: "Loxi",
      userName: "Loxiiiiii",
      info: "I'm Loxi)0))",
      password: "1234567",
    }
  ],
  portfolios: [
    {
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
      user: user1
    },
    {
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
      user: user1
    },
    {
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011',
      user: user2
    }
  ]
}