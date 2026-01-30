import mitt from "mitt";

export const emitter = mitt();

// 测试
// 绑定事件
// emitter.on("test1", () => {
//   console.log("test1");
// });
// emitter.on("test2", () => {
//   console.log("test2");
// });

// 触发事件
// setInterval(() => {
//   emitter.emit("test1");
//   emitter.emit("test2");
// }, 1000);

//关闭事件
// // setTimeout(() => {
// //   emitter.off("test1");
// // }, 3000);

// setTimeout(() => {
//   emitter.all.clear();
// }, 3000);
