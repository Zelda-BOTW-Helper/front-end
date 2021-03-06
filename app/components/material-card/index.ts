import "./styles.less";

import { Component } from "../../decorators";

import { NeededMaterial } from "../../classes/needed-material.class";

@Component({
    controllerAs: 'ctrl',
    templateUrl: require("./template.html"),
    bindings: {
        material: "<"
    }
})
export class MaterialCard {
    private material: NeededMaterial;

    public constructor() {}
}