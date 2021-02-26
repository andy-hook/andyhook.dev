const fs = require('fs')
const glob = require('glob')
const sizeOf = require('image-size')

const imagesDir = './public/images/'
const files = glob.sync(imagesDir + '/**/*.*')

const images = Object.assign(
  {},
  ...Object.keys(files).map((index) => {
    const sourcePath = files[index]

    try {
      const dimensions = sizeOf(sourcePath)
      const filename = sourcePath.replace(imagesDir, '')

      return {
        [filename]: {
          imagePath: filename,
          width: dimensions.width,
          height: dimensions.height,
        },
      }
    } catch (err) {
      console.error(`${sourcePath} – Failed to retrieve image sizes`, err)
    }
  })
)

fs.writeFileSync('./data/image-sizes.json', JSON.stringify(images))

console.log('Image sizes generated', images)
