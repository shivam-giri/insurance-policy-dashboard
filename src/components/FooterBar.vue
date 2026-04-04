<template>
  <footer class="px-4 pb-6 pt-2 sm:px-6 lg:px-8">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-[28px] border border-slate-200/80 bg-white/80 px-5 py-4 text-xs text-slate-500 shadow-[0_10px_26px_-24px_rgba(15,23,42,0.18)] backdrop-blur sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <span class="font-semibold text-slate-700"
          >Insurance Policy Dashboard</span
        >
        <span>{{ new Date().getFullYear() }} coverage planning companion</span>
      </div>
      <div class="uppercase tracking-[0.2em] text-slate-400">
        Built with Vue, Vite and Tailwind
        <a
          href="https://github.com/shivam-giri/insurance-policy-dashboard"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 transition duration-200 hover:border-sky-300 hover:bg-sky-100 hover:text-sky-800"
        >
          View GitHub Repo
        </a>
      </div>
    </div>
  </footer>
</template>
