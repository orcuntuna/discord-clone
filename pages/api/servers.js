export default (req, res) => {
  res.statusCode = 200
  res.json([
    {
      id: 'youtrend',
      name: 'YouTrend',
      image: '/img/youtrend.png',
    },
    {
      id: 'milky-away',
      name: 'Milky Away',
      image: '/img/milky-away.png',
    },
    {
      id: 'yazilimktu',
      name: 'KTÜ Yazılım Kulübü',
      image: '/img/ktu-yazilim.jpg',
    },
  ])
}
