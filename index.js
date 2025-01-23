const jsonServer = require('json-server');
const router = jsonServer.router('db.json'); // Tệp dữ liệu JSON

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Sử dụng middleware mặc định
server.use(middlewares);
// Sử dụng router
server.use(router);


// Khởi động máy chủ
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Khởi chạy webapi với port  http://localhost:${PORT}`);
});


