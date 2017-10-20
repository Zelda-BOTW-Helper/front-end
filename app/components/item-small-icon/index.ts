import "./styles.less";

import { Component } from "../../decorators";

import { Item } from "../../classes/Item.class";

@Component({
    controllerAs: 'ctrl',
    templateUrl: require("./template.html"),
    bindings: {
        item: "<"
    }
})
export class ItemSmallIcon {
    private item: Item;

    public constructor() {}
}