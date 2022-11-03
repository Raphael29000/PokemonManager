export class Pokemon {
id:string;
nom:string;
categorie:string;
poid:number;
taille:number;
type: string[];
picture: string;

constructor(
    id:string,
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
