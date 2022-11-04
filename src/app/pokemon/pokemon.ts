export class Pokemon {
id:number;
nom:string;
categorie:string;
poid:number;
taille:number;
type: string[];
picture: string;

constructor(
    id:number,
    nom:string,
    description:string,
    poid:number,
    taille:number,
    type:string[],
    picture: string
){
    this.id = id
    this.nom = nom
    this.categorie = description
    this.poid = poid
    this.taille = taille
    this.type = type
    this.picture = picture
}

}
