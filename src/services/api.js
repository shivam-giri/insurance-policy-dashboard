export async function fetchPolicies(){
  const res = await fetch('/mock/policies.json')
  if (!res.ok) throw new Error('Failed to load policies')
  return await res.json()
}
