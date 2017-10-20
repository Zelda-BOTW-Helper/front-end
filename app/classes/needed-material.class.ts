import { Item }         from "./item.class";
import { Coordinates }  from "./coordinates.class";
import { ArmorPiece }   from "./armor-piece.class";

export class NeededMaterial extends Item {
    public quantity: number;
    public requiredBy: ArmorPiece[];

    public constructor(
        id: number, 
        name: string, 
        type: string, 
        imageOffset: Coordinates, 
        quantity: number = 0,
        requiredBy: ArmorPiece[] = []
    ) {
        super(id, name, type, imageOffset);

        this.quantity = quantity;
        this.requiredBy = requiredBy;
    }
}