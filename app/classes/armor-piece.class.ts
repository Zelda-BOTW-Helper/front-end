import { Item }             from "./item.class";
import { Coordinates }      from "./coordinates.class";
import { NeededMaterial }   from "./needed-material.class";

export class ArmorPiece extends Item {
    public level: number;
    public neededMaterials: NeededMaterial[];

    public constructor(
        id: number, 
        name: string, 
        type: string, 
        imageOffset: Coordinates, 
        level: number = 1,
        neededMaterials: NeededMaterial[] = []
    ) {
        super(id, name, type, imageOffset);
        
        this.level = level;
        this.neededMaterials = neededMaterials;
    }
}