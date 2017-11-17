var fourLetterCountries = [
    "Chad", 
    "Cuba", 
    "Greenland", 
    "Iraq", 
    "Mali", 
    "Oman", 
    "India" 
]
fourLetterCountries.push ("Fiji")
fourLetterCountries.splice (4, 0, "Iran")
fourLetterCountries.pop()
fourLetterCountries.pop()
fourLetterCountries.push("Fiji")
fourLetterCountries.reverse()
fourLetterCountries.splice(5, 1, "Togo")
fourLetterCountries.push("Laos")
fourLetterCountries.reverse()
fourLetterCountries.unshift("Peru")
console.log(fourLetterCountries)