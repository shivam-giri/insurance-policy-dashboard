// Placeholder AI helper. In real apps, replace with an API call.
export function suggestImprovements(componentName){
  const map = {
    'PolicyList': 'Consider virtualized lists if policies exceed 500 to improve scroll performance.',
    'PremiumCalculator': 'Cache frequently used combinations and debounce input handlers for smoother UI.',
    'PolicyCompare': 'Provide color-coded highlights for better visual differentiation.'
  }
  return map[componentName] || 'No suggestions found.'
}
