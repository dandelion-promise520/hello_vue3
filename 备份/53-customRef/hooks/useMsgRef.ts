import { customRef } from "vue";

// 使用vue提供的customRef定义响应式数据
export default function (initValue: string, delay: number) {
  let timer: number;
  //  track(跟踪)、trigger(触发)
  let msg = customRef((track, trigger) => {
    return {
      // get何时调用?- msg被读取时
      get() {
        track(); // 告诉Vue数据msg很重要，需要持续关注它，一旦msg变化了就更新
        return initValue;
      },
      // get何时调用?- msg被读取时
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initValue = value;
          trigger(); //通知Vue数据msg变化了
        }, delay);
      },
    };
  });

  return { msg };
}
