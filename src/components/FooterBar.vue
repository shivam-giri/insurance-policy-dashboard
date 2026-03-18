<template>
  <footer class="px-4 pb-6 pt-2 sm:px-6 lg:px-8">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-[28px] border border-white/70 bg-white/75 px-5 py-4 text-xs text-slate-500 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.4)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
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
