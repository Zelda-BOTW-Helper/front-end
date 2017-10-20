import { Coordinates } from "./coordinates.class";

export class Item {
    public id: number;
    public name: string;
    public type: string;
    public imageOffset: Coordinates;

    public constructor(id: number, name: string, type: string, imageOffset: Coordinates) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.imageOffset = imageOffset;
    }
}