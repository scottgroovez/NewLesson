const data = {
    version: 2,
    stage: null,
    background: 0xffffff,
    width: 550,
    height: 400,
    framerate: 24,
    totalFrames: 1,
    assets: {
        "Character": "../../assets/character/Character.shapes.txt"
    },
    lib: {},
    shapes: {},
    textures: {},
    spritesheets: [],
    getTexture: function (id) {
        if (data.textures[id]) {
            return data.textures[id];
        }
        const atlas = data.spritesheets.find(atlas => !!atlas.textures[id]);
        return atlas ? atlas.textures[id] : null;
    },
    setup: function (animate) {
        const MovieClip = animate.MovieClip;
        const Container = animate.Container;
        const Graphics = animate.Graphics;


        data.lib.Character_1 = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Character[0]);
                this.addChild(instance1);
            }
        };

        data.lib.Character = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 24
                });
                const instance1 = new data.lib.Character_1();
                this.addChild(instance1);
            }
        };
        data.stage = data.lib.Character;
    }
};


export default data;