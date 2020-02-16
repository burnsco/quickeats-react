const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

;(async () => {
  let dir = 'sandwiches'
  const files = await imagemin([`images/${dir}/*.{jpg,png}`], {
    destination: `images/${dir}/`,
    plugins: [imageminWebp()]
  })

  console.log(files)
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
