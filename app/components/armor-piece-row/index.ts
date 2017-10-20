import "./styles.less";

import { Component } from "../../decorators";

import { ArmorPiece } from "../../classes/armor-piece.class";

@Component({
    controllerAs: 'ctrl',
    templateUrl: require("./template.html"),
    bindings: {
        armorPiece: "<"
    }
})
export class ArmorPieceRow {
    private armorPiece: ArmorPiece;

    public constructor() {}

    private getItemImageURL(itemType: string): string {
        return `assets/images/${itemType}.png`;
    }
}