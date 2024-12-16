const jsonServer=require('json-server')
const kanbanServer=jsonServer.create()
const middleware=jsonServer.defaults()
const route=jsonServer.router('db.json')
const PORT=3000 || Process.env.PORT
kanbanServer.use(middleware)
kanbanServer.use(route)
kanbanServer.listen(PORT,()=>{
    console.log(`kanban server is running at ${PORT} and waiting for client request`);
    
})