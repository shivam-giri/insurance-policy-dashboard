<template>
  <footer class="px-4 pb-6 pt-2 sm:px-6 lg:px-8">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-[28px] border border-slate-200/80 bg-white/80 px-5 py-4 text-xs text-slate-500 shadow-[0_10px_26px_-24px_rgba(15,23,42,0.18)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span class="font-semibold text-slate-700">Insurance Policy Dashboard</span>
        <span class="mx-2 text-slate-300">|</span>
        <span>{{ new Date().getFullYear() }} coverage planning companion</span>
      </div>
      <div class="uppercase tracking-[0.2em] text-slate-400">
        Built with Vue, Vite and Tailwind
      </div>
    </div>
  </footer>
</template>
