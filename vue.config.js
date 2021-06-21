// module.exports ={
//     // publicPath:'/'
//     publicPath:'/msegs/'

// }

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/msegs/'
      : '/'
  }