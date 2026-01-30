import { ref, onMounted, computed } from "vue";
export default function () {
  // 数据
  let sum = ref(0);
  let bigSum = computed(() => {
    return sum.value * 2;
  });
  // 方法
  function add() {
    sum.value += 1;
  }
  // 钩子
  onMounted(() => {
    add();
  });
  return { sum, add, bigSum };
}
