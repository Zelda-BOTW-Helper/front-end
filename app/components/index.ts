import { ItemSmallIcon }    from "./item-small-icon";
import { ArmorPieceRow }        from "./armor-piece-row";
import { MaterialCard }         from "./material-card";
import { SpriteImage }          from "./sprite-image";

angular.module("components", [])
        .component("itemSmallIcon", <any>ItemSmallIcon)
        .component("armorPieceRow",     <any>ArmorPieceRow)
        .component("materialCard",      <any>MaterialCard)
        .component("spriteImage",       <any>SpriteImage);
