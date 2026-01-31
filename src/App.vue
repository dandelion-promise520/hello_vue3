<script setup lang="ts">
import { ref } from "vue";
import { Sortable, SortableItem } from "./components/sortable";

interface Task {
  id: number;
  title: string;
}

const tasks = ref<Task[]>([
  { id: 1, title: "Complete project" },
  { id: 2, title: "Client meeting" },
  { id: 3, title: "Update documentation" },
  { id: 4, title: "Fix bugs" },
]);
</script>

<template>
  <Sortable :data="tasks">
    <TransitionGroup name="task-list" tag="div">
      <SortableItem v-for="(task, index) in tasks" :key="task.id" :source="tasks" :index="index">
        <h3>{{ task.title }}</h3>
      </SortableItem>
    </TransitionGroup>
  </Sortable>
</template>

<style>
/* TransitionGroup animations */
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}

.task-list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.task-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.task-list-move {
  transition: transform 0.5s ease;
}
</style>
