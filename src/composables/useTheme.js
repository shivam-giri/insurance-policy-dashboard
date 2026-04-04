import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'insurance-dashboard-theme'
const DEFAULT_DARK_THEME = 'midnight'
const theme = ref('light')

export const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'midnight', label: 'Midnight' },
  { value: 'evergreen', label: 'Evergreen' },
  { value: 'graphite', label: 'Graphite' }
]

let initialised = false

function normaliseTheme(value) {
  if (value === 'dark') return DEFAULT_DARK_THEME

  return themeOptions.some(option => option.value === value) ? value : 'light'
}

function getPreferredTheme() {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return DEFAULT_DARK_THEME
  }

  return 'light'
}

function applyTheme(value) {
  if (typeof document === 'undefined') return

  document.documentElement.dataset.theme = value
}

function initialiseTheme() {
  if (initialised) return

  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY)
    theme.value = savedTheme ? normaliseTheme(savedTheme) : getPreferredTheme()
  } else {
    theme.value = 'light'
  }

  watch(
    theme,
    value => {
      const nextTheme = normaliseTheme(value)
      if (nextTheme !== value) {
        theme.value = nextTheme
        return
      }
      applyTheme(nextTheme)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, nextTheme)
      }
    },
    { immediate: true }
  )

  initialised = true
}

export function useTheme() {
  initialiseTheme()

  const isDark = computed(() => theme.value !== 'light')

  return {
    theme,
    isDark,
    themeOptions
  }
}
