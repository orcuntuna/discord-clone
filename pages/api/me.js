export default (req, res) => {
  res.statusCode = 200
  res.json({
    direct_messages: [
      {
        id: 1,
        type: "user",
        name: "Enis",
        photo: "/img/user-1.png",
        status: "online",
        customStatus: null,
      },
      {
        id: 2,
        type: "user",
        name: "mustafaisik",
        photo: "/img/user-2.png",
        status: "offline",
        customStatus: null,
      },
      {
        id: 3,
        type: "user",
        name: "Rick Sanchez",
        photo: "/img/user-3.png",
        status: "idle",
        customStatus: "Playing GTA V",
      },
      {
        id: 4,
        type: "user",
        name: "samet",
        photo: "/img/user-4.png",
        status: "offline",
        customStatus: null,
      },
      {
        id: 5,
        type: "user",
        name: "mfcokek",
        photo: "/img/user-5.png",
        status: "doNotDisturb",
        customStatus: null,
      },
      {
        id: 6,
        type: "user",
        name: "Yusuf Can",
        photo: "/img/user-6.png",
        status: "online",
        customStatus: null,
      },
    ]
  })
}
