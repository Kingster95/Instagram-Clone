export const users = [
  {
    id: 0,
    username: "Ortan_Mihai",
    name: "Ortan Mihai",
    photo_url: require("../assets/users/Ortan.jpg"),
    posts: 9,
    followers: 310,
    following: 686,
    description: "Mobile App / Game Developer",
    link: "🔗 linktr.ee/ortanmihai",
  },
  {
    id: 1,
    username: "Matt_Burrus",
    photo_url: require("../assets/users/Matt_Burrus.jpg"),
    posts: 4,
    followers: 251,
    following: 237,
    description: "Helpers--Installation, Maintenance, and Repair Worker",
  },
  {
    id: 2,
    username: "Sara_Hawes",
    photo_url: require("../assets/users/Sara_Hawes.jpg"),
    posts: 5,
    followers: 203,
    following: 189,
    description: "Photographer and Visual Artist",
  },

  {
    id: 3,
    username: "Mike_Castro",
    photo_url: require("../assets/users/Mike_Castro.jpg"),
    posts: 2,
    followers: 302,
    following: 192,
    description: "Software Engineer and Tech Enthusiast",
  },

  {
    id: 4,
    username: "Emily_Fernandez",
    photo_url: require("../assets/users/Emily_Fernandez.jpg"),
    posts: 8,
    followers: 159,
    following: 215,
    description: "Lifestyle Blogger and Social Media Influencer",
  },

  {
    id: 5,
    username: "Alex_Palmer",
    photo_url: require("../assets/users/Alex_Palmer.jpg"),
    posts: 12,
    followers: 473,
    following: 278,
    description: "Fitness Trainer and Nutrition Coach",
  },

  {
    id: 6,
    username: "Jenny_Kim",
    photo_url: require("../assets/users/Jenny_Kim.jpg"),
    posts: 6,
    followers: 214,
    following: 198,
    description: "Graphic Designer and Illustrator",
  },

  {
    id: 7,
    username: "Ethan_Lin",
    photo_url: require("../assets/users/Ethan_Lin.jpg"),
    posts: 3,
    followers: 87,
    following: 94,
    description: "Music Producer and DJ",
  },

  {
    id: 8,
    username: "Ashley_Rodriguez",
    photo_url: require("../assets/users/Ashley_Rodriguez.jpg"),
    posts: 9,
    followers: 321,
    following: 267,
    description: "Fashion Stylist and Blogger",
  },

  {
    id: 9,
    username: "Adam_Chen",
    photo_url: require("../assets/users/Adam_Chen.jpg"),
    posts: 7,
    followers: 156,
    following: 198,
    description: "Travel Photographer and Blogger",
  },

  {
    id: 10,
    username: "Lila_Kim",
    photo_url: require("../assets/users/Lila_Kim.jpg"),
    posts: 11,
    followers: 382,
    following: 345,
    description: "Beauty Influencer and Makeup Artist",
  },

  {
    id: 11,
    username: "Ryan_Wang",
    photo_url: require("../assets/users/Ryan_Wang.jpg"),
    posts: 4,
    followers: 98,
    following: 76,
    description: "Freelance Writer and Poet",
  },
];

export const stories = [
  {
    id: 0,
    user: users[0],
    story_photo: require("../assets/stories/story1.jpg"),
    close_friend: false,
    seen: false,
  },
  {
    id: 1,
    user: users[9],
    story_photo: require("../assets/stories/story2.jpg"),
    close_friend: true,
    seen: false,
  },

  {
    id: 2,
    user: users[2],
    story_photo: require("../assets/stories/story3.jpg"),
    close_friend: false,
    seen: false,
  },

  {
    id: 3,
    user: users[3],
    story_photo: require("../assets/stories/story4.jpg"),
    close_friend: false,
    seen: false,
  },

  {
    id: 4,
    user: users[1],
    story_photo: require("../assets/stories/story5.jpg"),
    close_friend: true,
    seen: false,
  },

  {
    id: 5,
    user: users[5],
    story_photo: require("../assets/stories/story6.jpg"),
    close_friend: false,
    seen: false,
  },

  {
    id: 6,
    user: users[6],
    story_photo: require("../assets/stories/story7.jpg"),
    close_friend: false,
    seen: false,
  },

  {
    id: 7,
    user: users[4],
    story_photo: require("../assets/stories/story8.jpg"),
    close_friend: true,
    seen: false,
  },

  {
    id: 8,
    user: users[8],
    story_photo: require("../assets/stories/story9.jpg"),
    close_friend: false,
    seen: false,
  },

  {
    id: 9,
    user: users[7],
    story_photo: require("../assets/stories/story10.jpg"),
    close_friend: true,
    seen: false,
  },
];

export const user_posts =[
  {
    id:0,
    post_photo: require("../assets/me/1.jpg"),
  },
  {
    id:1,
    post_photo: require("../assets/me/2.jpg"),
  },
  {
    id:2,
    post_photo: require("../assets/me/3.jpg"),
  },
  {
    id:3,
    post_photo: require("../assets/me/4.jpg"),
  },
  {
    id:4,
    post_photo: require("../assets/me/5.jpg"),
  },
  {
    id:5,
    post_photo: require("../assets/me/6.jpg"),
  },
  {
    id:6,
    post_photo: require("../assets/me/7.jpg"),
  },
  {
    id:7,
    post_photo: require("../assets/me/8.jpg"),
  },
  {
    id:8,
    post_photo: require("../assets/me/9.jpg"),
  },
]
export const posts =[
  {
    id: 0,
    user: users[1],
    post_photo: require("../assets/stories/story1.jpg"),
    photo:true,
    likes: 152,
    description: "Breaking Rules",
    comments: [
      {user:users[5], text:"That's the spirit!"},
      {user:users[3], text:"Going places"},
    ],
    date: new Date(),
  },
  {
    id: 1,
    user: users[2],
    post_photo: require("../assets/stories/story2.jpg"),
    photo:true,
    likes: 152,
    description: "Breaking Rules",
    comments: [
      {user:users[5], text:"That's the spirit!"},
      {user:users[3], text:"Going places"},
    ],
    date: new Date(),
  },
]
