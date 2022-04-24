/*

DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/

// My Solution
function DNAtoRNA(dna) {
  return dna
    .split('')
    .map((letter) => (letter === 'T' ? 'U' : letter))
    .join('');
}
// One of other Solutions
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
// One of other Solutions
function DNAtoRNA(dna) {
  return dna.split('T').join('U');
}
// One of other Solutions
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  while (dna.indexOf('T') !== -1) {
    dna = dna.replace('T', 'U');
  }

  return dna;
}
// One of other Solutions

// One of other Solutions
