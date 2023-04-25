export default () => async (ctx, next) => {
  try {
    const data = await next()
    ctx.body = {
      code: 0,
      data,
      msg: 'success'
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      msg: '服务器出错！',
      error: error.message
    }
  }
}