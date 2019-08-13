/**
 * 
 * @param {String} dna 
 */
function DNAStrand(dna) {
    DNAStrand.pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
      }
      dna.replace(/./g,v=>DNAStrand.pairs[v]
      )
}