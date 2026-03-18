export function calculateUlipProjection({
  annualPremium,
  expectedReturn,
  policyTerm,
  premiumAllocationCharge = 0.05
}) {
  const monthlyRate = expectedReturn / 100 / 12
  const months = policyTerm * 12
  const monthlyContribution = (annualPremium * (1 - premiumAllocationCharge)) / 12

  let fundValue = 0

  for (let month = 0; month < months; month += 1) {
    fundValue = (fundValue + monthlyContribution) * (1 + monthlyRate)
  }

  const totalInvested = annualPremium * policyTerm
  const wealthGain = fundValue - totalInvested

  return {
    fundValue: Math.round(fundValue),
    totalInvested: Math.round(totalInvested),
    wealthGain: Math.round(wealthGain),
    netAnnualPremium: Math.round(annualPremium * (1 - premiumAllocationCharge))
  }
}
