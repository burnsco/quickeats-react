const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')

;(async () => {
  let dir = 'Burgers'
  const files = await imagemin([`images/${dir}/*.{jpg,png}`], {
    destination: `images/${dir}/test`,
    plugins: [imageminMozjpeg({ quality: 60 })]
  })

  console.log(files)
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
