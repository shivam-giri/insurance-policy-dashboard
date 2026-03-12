import { defineStore } from 'pinia'
import { fetchPolicies } from '../services/api'

export const usePolicyStore = defineStore('policy', {
  state: () => ({
    policies: [],
    filtered: [],
    loading: false,
    error: ''
  }),
  actions: {
    async loadPolicies(){
      try{
        this.loading = true
      }catch(e){}
      try {
        const data = await fetchPolicies()
        this.policies = data
        this.filtered = []
        this.error = ''
      } catch (err) {
        this.error = err.message || 'Failed to load'
      } finally {
        this.loading = false
      }
    },
    filter({ q = '', type = '' }){
      const query = q.toLowerCase()
      this.filtered = this.policies.filter(p => {
        const matchesQuery = [p.policyName, p.type].some(v => String(v).toLowerCase().includes(query))
        const matchesType = type ? p.type === type : true
        return matchesQuery && matchesType
      })
    }
  }
})
