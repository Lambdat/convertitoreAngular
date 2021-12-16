/**
 * classe convertitore in grado di convertire un'unità di misura in un'altra.
 */
export class Convertitore {

    constructor(private coefficienteDiConversione: number, private unitaDiMisuraDa: string, private unitaDiMisuraA: string) {}

    /**
     * Effettua la conversione secondo l'unità di misura impostata
     * @param daConvertire il valore da convertire nell'unità di misura 'da'
     * @returns il valore convertito all'unità di misura 'a'
     */
    convertire(daConvertire: number) {
        return daConvertire * this.coefficienteDiConversione;
    }

    get convertiDa() { return this.unitaDiMisuraDa; }
    get convertiA() { return this.unitaDiMisuraA; }

    isSuitableDa(da: string) {
        return da === this.unitaDiMisuraDa;
    }

    isSuitableA(a: string) {
        return a === this.unitaDiMisuraA;
    }
}
