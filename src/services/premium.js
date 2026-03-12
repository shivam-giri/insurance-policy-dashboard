export function estimatePremium({ age, sumInsured, tenure }){
  // Simple illustrative calculation: base rate + age factor + tenure discount
  const base = sumInsured * 0.008
  const ageFactor = age > 45 ? 1.3 : 1.0
  const tenureDiscount = tenure >= 3 ? 0.9 : 1.0
  return Math.round(base * ageFactor * tenureDiscount)
}
