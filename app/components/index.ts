import { MaterialCard } from "./material-card";
import { SpriteImage } from "./sprite-image";

angular.module("components", [])
        .component("materialCard", <any>MaterialCard)
        .component("spriteImage", <any>SpriteImage);
