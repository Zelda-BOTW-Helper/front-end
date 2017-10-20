import { NeededMaterial }   from "../classes/needed-material.class";
import { ArmorPiece }       from "../classes/armor-piece.class";
import { Coordinates }      from "../classes/coordinates.class";

export class MainCtrl {
    public static templateUrl: string = require("../views/main.template.html");

    public materials: NeededMaterial[];

    private static $inject = [];
    public constructor() {
        this.materials = [
            new NeededMaterial(
                1, "Griffe de Lézalfos", "materials", new Coordinates(4, 3, 0, 4 * 14), 10, [
                    new ArmorPiece(
                        1, "Casque Zora", "armor-heads", new Coordinates(0, 2), 2, [
                            new NeededMaterial(1, "Griffe de Lézalfos", "materials", new Coordinates(4, 3, 0, 4 * 14), 5),
                            new NeededMaterial(2, "Perche Hyrule", "food", new Coordinates(0, 9, 0, 10 * 14), 5)
                        ]
                    ),
                    new ArmorPiece(
                        2, "Armure Zora", "armor-bodies", new Coordinates(0, 2), 2, [
                            new NeededMaterial(1, "Griffe de Lézalfos", "materials", new Coordinates(4, 3, 0, 4 * 14), 5),
                            new NeededMaterial(2, "Perche Hyrule", "food", new Coordinates(0, 9, 0, 10 * 14), 5)
                        ]
                    )
                ]
            ),
            new NeededMaterial(
                2, "Perche Hyrule", "food", new Coordinates(0, 9, 0, 10 * 14), 10, [
                    new ArmorPiece(
                        1, "Casque Zora", "armor-heads", new Coordinates(0, 2), 2, [
                            new NeededMaterial(1, "Griffe de Lézalfos", "materials", new Coordinates(4, 3, 0, 4 * 14), 5),
                            new NeededMaterial(2, "Perche Hyrule", "food", new Coordinates(0, 9, 0, 10 * 14), 5)
                        ]
                    ),
                    new ArmorPiece(
                        2, "Armure Zora", "armor-bodies", new Coordinates(0, 2), 2, [
                            new NeededMaterial(1, "Griffe de Lézalfos", "materials", new Coordinates(4, 3, 0, 4 * 14), 5),
                            new NeededMaterial(2, "Perche Hyrule", "food", new Coordinates(0, 9, 0, 10 * 14), 5)
                        ]
                    )
                ]
            ),
            new NeededMaterial(
                3, "Princesse de la Sérénité", "materials", new Coordinates(4, 11, 0, 8 * 14), 3, [
                    new ArmorPiece(
                        3, "Tunique de Prodige", "armor-bodies", new Coordinates(0, 16), 1, [
                            new NeededMaterial(3, "Princesse de la Sérénité", "materials", new Coordinates(4, 11, 0, 8 * 14), 3)
                        ]
                    )
                ]
            )
        ]
     }
}