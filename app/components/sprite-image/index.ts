import "./styles.less";

import { Component } from "../../decorators";

@Component({
    controllerAs: 'ctrl',
    templateUrl: require("./template.html"),
    bindings: {
        spriteSrc: "@",
        spriteScale: "<",
        elementSizeX: "<",
        elementSizeY: "<",
        elementOffsetX: "<",
        elementOffsetY: "<",
        extraOffsetX: "<?",
        extraOffsetY: "<?",
        elementsRowSpacing: "<?",
        elementsColumnSpacing: "<?"
    }
})
export class SpriteImage {
    private spriteSrc: string;
    private spriteScale: number;

    private elementSizeX: number;
    private elementSizeY: number;
    private elementOffsetX: number = 0;
    private elementOffsetY: number = 0;

    private extraOffsetX: number = 0;
    private extraOffsetY: number = 0;

    private elementsRowSpacing: number = 0;
    private elementsColumnSpacing: number = 0;

    public constructor() { }

    private getComputedStyle(): any {
        const xPos: number = 
            (this.elementSizeX * this.elementOffsetX) + 
            (this.elementsRowSpacing * (this.elementOffsetX + 1)) + 
            this.extraOffsetX;

        const yPos: number = 
            (this.elementSizeY * this.elementOffsetY) + 
            (this.elementsColumnSpacing * (this.elementOffsetY + 1)) + 
            this.extraOffsetY;

        let style: any = {
            transformOrigin: `0 0`,
            transform: `scale(${this.spriteScale})`,
            width: `${this.elementSizeX}px`,
            height: `${this.elementSizeY}px`,
            background: `url('${this.spriteSrc}') 0 0 no-repeat`,
            backgroundPosition: `-${xPos}px -${yPos}px`
        };

        return style;
    }
}