export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    // 设置条件
    console.log(to, from)
  })
 }
 