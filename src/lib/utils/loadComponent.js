// src/lib/utils/loadComponent.js
export async function loadComponent(componentName) {
  switch (componentName) {
    case 'TaskList':
      return (await import('$lib/components/TaskList.svelte')).default;
    default:
      return null;
  }
}
