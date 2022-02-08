const data = {
    version: 2,
    stage: null,
    background: 0xffffff,
    width: 550,
    height: 400,
    framerate: 24,
    totalFrames: 1,
    assets: {
        "Worm": "../../assets/worm/Worm.shapes.txt"
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


        data.lib.anten = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Worm[0])
                    .setTransform(30.6, 22.2);
                this.addChild(instance1);
            }
        };

        data.lib.circle = class extends Container {
            constructor() {
                super();
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Worm[3]);
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Worm[2]);
                this.addChild(instance2, instance1);
            }
        };

        const Graphic1 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 36, loop: false });
                const instance4 = new data.lib.circle()
                    .setTransform(-0.65, -2.45, 1.157, 1.199)
                    .setColorTransform(0.2, 0.8, 0.2, 0.48, 0.2, 0.32);
                const instance3 = new Graphics()
                    .drawCommands(data.shapes.Worm[1]);
                const instance2 = new data.lib.anten()
                    .setTransform(-1.15, -9.2, 0.697, 0.732, 0.21)
                    .setColorTransform(0.2, 0.64, 0.2, 0.51, 0.2, 0.38);
                const instance1 = new data.lib.anten()
                    .setTransform(57.65, -12.9, 0.697, 0.732, 0, 0.21, 2.932)
                    .setColorTransform(0.2, 0.64, 0.2, 0.51, 0.2, 0.38);
                this.addTimedChild(instance4)
                    .addTimedChild(instance3)
                    .addTimedChild(instance2)
                    .addTimedChild(instance1);
            }
        };

        const Graphic2 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 36, loop: false });
                const instance6 = new data.lib.circle()
                    .setTransform(-177.9, 79.05, 0.35, 0.35);
                const instance5 = new data.lib.circle()
                    .setTransform(-169.1, 89.05, 0.45, 0.45);
                const instance4 = new data.lib.circle();
                const instance3 = new data.lib.circle();
                const instance2 = new data.lib.circle();
                const instance1 = new data.lib.circle();
                this.addTimedChild(instance6)
                    .addTimedChild(instance5)
                    .addTimedChild(instance4, 0, 36, {
                        "0": {
                            x: -155.3,
                            y: 85.85,
                            sx: 0.6,
                            sy: 0.6
                        },
                        "1": {
                            x: -155.748,
                            y: 85.549
                        },
                        "2": {
                            x: -156.148,
                            y: 85.299
                        },
                        "3": {
                            x: -156.548,
                            y: 84.999
                        },
                        "4": {
                            x: -156.948,
                            y: 84.749
                        },
                        "5": {
                            x: -157.298,
                            y: 84.499
                        },
                        "6": {
                            x: -157.648,
                            y: 84.299
                        },
                        "7": {
                            x: -157.948,
                            y: 84.099
                        },
                        "8": {
                            x: -158.248,
                            y: 83.899
                        },
                        "9": {
                            x: -158.548,
                            y: 83.699
                        },
                        "10": {
                            x: -158.798,
                            y: 83.499
                        },
                        "11": {
                            x: -159.048,
                            y: 83.349
                        },
                        "12": {
                            x: -159.248,
                            y: 83.199
                        },
                        "13": {
                            x: -159.448,
                            y: 83.049
                        },
                        "14": {
                            x: -159.648,
                            y: 82.949
                        },
                        "15": {
                            x: -159.798,
                            y: 82.849
                        },
                        "16": {
                            x: -159.948,
                            y: 82.749
                        },
                        "17": {
                            x: -160.1,
                            y: 82.65
                        },
                        "18": {
                            x: -159.948,
                            y: 82.799
                        },
                        "19": {
                            x: -159.798,
                            y: 82.899
                        },
                        "20": {
                            x: -159.648,
                            y: 82.999
                        },
                        "21": {
                            x: -159.448,
                            y: 83.149
                        },
                        "22": {
                            x: -159.248,
                            y: 83.249
                        },
                        "23": {
                            x: -159.048,
                            y: 83.399
                        },
                        "24": {
                            x: -158.798,
                            y: 83.549
                        },
                        "25": {
                            x: -158.548,
                            y: 83.749
                        },
                        "26": {
                            x: -158.298,
                            y: 83.899
                        },
                        "27": {
                            x: -158.048,
                            y: 84.099
                        },
                        "28": {
                            x: -157.748,
                            y: 84.299
                        },
                        "29": {
                            x: -157.448,
                            y: 84.499
                        },
                        "30": {
                            x: -157.098,
                            y: 84.699
                        },
                        "31": {
                            x: -156.798,
                            y: 84.899
                        },
                        "32": {
                            x: -156.448,
                            y: 85.149
                        },
                        "33": {
                            x: -156.048,
                            y: 85.399
                        },
                        "34": {
                            x: -155.698,
                            y: 85.649
                        },
                        "35": {
                            x: -155.3,
                            y: 85.85
                        }
                    })
                    .addTimedChild(instance3, 0, 36, {
                        "0": {
                            x: -152.3,
                            y: 68.2,
                            sx: 0.7,
                            sy: 0.7
                        },
                        "1": {
                            x: -153.598,
                            y: 67.299
                        },
                        "2": {
                            x: -154.848,
                            y: 66.399
                        },
                        "3": {
                            x: -155.998,
                            y: 65.599
                        },
                        "4": {
                            x: -157.098,
                            y: 64.799
                        },
                        "5": {
                            x: -158.148,
                            y: 64.049
                        },
                        "6": {
                            x: -159.148,
                            y: 63.349
                        },
                        "7": {
                            x: -160.098,
                            y: 62.699
                        },
                        "8": {
                            x: -160.948,
                            y: 62.049
                        },
                        "9": {
                            x: -161.798,
                            y: 61.449
                        },
                        "10": {
                            x: -162.548,
                            y: 60.899
                        },
                        "11": {
                            x: -163.248,
                            y: 60.399
                        },
                        "12": {
                            x: -163.898,
                            y: 59.949
                        },
                        "13": {
                            x: -164.498,
                            y: 59.499
                        },
                        "14": {
                            x: -165.048,
                            y: 59.099
                        },
                        "15": {
                            x: -165.548,
                            y: 58.749
                        },
                        "16": {
                            x: -165.998,
                            y: 58.449
                        },
                        "17": {
                            x: -166.3,
                            y: 58.2
                        },
                        "18": {
                            x: -165.947,
                            y: 58.499
                        },
                        "19": {
                            x: -165.497,
                            y: 58.799
                        },
                        "20": {
                            x: -164.997,
                            y: 59.149
                        },
                        "21": {
                            x: -164.447,
                            y: 59.549
                        },
                        "22": {
                            x: -163.847,
                            y: 59.999
                        },
                        "23": {
                            x: -163.247,
                            y: 60.399
                        },
                        "24": {
                            x: -162.547,
                            y: 60.899
                        },
                        "25": {
                            x: -161.847,
                            y: 61.399
                        },
                        "26": {
                            x: -161.097,
                            y: 61.949
                        },
                        "27": {
                            x: -160.297,
                            y: 62.499
                        },
                        "28": {
                            x: -159.447,
                            y: 63.099
                        },
                        "29": {
                            x: -158.547,
                            y: 63.749
                        },
                        "30": {
                            x: -157.647,
                            y: 64.399
                        },
                        "31": {
                            x: -156.647,
                            y: 65.099
                        },
                        "32": {
                            x: -155.647,
                            y: 65.849
                        },
                        "33": {
                            x: -154.597,
                            y: 66.599
                        },
                        "34": {
                            x: -153.497,
                            y: 67.399
                        },
                        "35": {
                            x: -152.3,
                            y: 68.2
                        }
                    })
                    .addTimedChild(instance2, 0, 36, {
                        "0": {
                            x: -150.3,
                            y: 38.85,
                            sx: 0.754,
                            sy: 0.754
                        },
                        "1": {
                            x: -151.398,
                            y: 37.899
                        },
                        "2": {
                            x: -152.448,
                            y: 36.899
                        },
                        "3": {
                            x: -153.448,
                            y: 35.999
                        },
                        "4": {
                            x: -154.348,
                            y: 35.099
                        },
                        "5": {
                            x: -155.248,
                            y: 34.249
                        },
                        "6": {
                            x: -156.098,
                            y: 33.449
                        },
                        "7": {
                            x: -156.848,
                            y: 32.699
                        },
                        "8": {
                            x: -157.598,
                            y: 31.999
                        },
                        "9": {
                            x: -158.298,
                            y: 31.349
                        },
                        "10": {
                            x: -158.948,
                            y: 30.749
                        },
                        "11": {
                            x: -159.548,
                            y: 30.149
                        },
                        "12": {
                            x: -160.098,
                            y: 29.649
                        },
                        "13": {
                            x: -160.598,
                            y: 29.149
                        },
                        "14": {
                            x: -161.048,
                            y: 28.749
                        },
                        "15": {
                            x: -161.448,
                            y: 28.349
                        },
                        "16": {
                            x: -161.848,
                            y: 27.999
                        },
                        "17": {
                            x: -162.1,
                            y: 27.65
                        },
                        "18": {
                            x: -161.798,
                            y: 28.05
                        },
                        "19": {
                            x: -161.398,
                            y: 28.4
                        },
                        "20": {
                            x: -160.998,
                            y: 28.8
                        },
                        "21": {
                            x: -160.548,
                            y: 29.2
                        },
                        "22": {
                            x: -160.048,
                            y: 29.7
                        },
                        "23": {
                            x: -159.548,
                            y: 30.2
                        },
                        "24": {
                            x: -158.948,
                            y: 30.7
                        },
                        "25": {
                            x: -158.348,
                            y: 31.3
                        },
                        "26": {
                            x: -157.698,
                            y: 31.9
                        },
                        "27": {
                            x: -157.048,
                            y: 32.55
                        },
                        "28": {
                            x: -156.348,
                            y: 33.2
                        },
                        "29": {
                            x: -155.598,
                            y: 33.9
                        },
                        "30": {
                            x: -154.798,
                            y: 34.65
                        },
                        "31": {
                            x: -153.998,
                            y: 35.45
                        },
                        "32": {
                            x: -153.148,
                            y: 36.25
                        },
                        "33": {
                            x: -152.248,
                            y: 37.1
                        },
                        "34": {
                            x: -151.298,
                            y: 38
                        },
                        "35": {
                            x: -150.3,
                            y: 38.85
                        }
                    })
                    .addTimedChild(instance1, 0, 36, {
                        "0": {
                            x: -167.1,
                            y: 4.2
                        },
                        "1": {
                            x: -165.95,
                            y: 3.3
                        },
                        "2": {
                            x: -164.8,
                            y: 2.4
                        },
                        "3": {
                            x: -163.75,
                            y: 1.6
                        },
                        "4": {
                            x: -162.75,
                            y: 0.8
                        },
                        "5": {
                            x: -161.8,
                            y: 0.05
                        },
                        "6": {
                            x: -160.9,
                            y: -0.65
                        },
                        "7": {
                            x: -160.05,
                            y: -1.3
                        },
                        "8": {
                            x: -159.25,
                            y: -1.95
                        },
                        "9": {
                            x: -158.45,
                            y: -2.55
                        },
                        "10": {
                            x: -157.75,
                            y: -3.1
                        },
                        "11": {
                            x: -157.1,
                            y: -3.6
                        },
                        "12": {
                            x: -156.5,
                            y: -4.05
                        },
                        "13": {
                            x: -156,
                            y: -4.5
                        },
                        "14": {
                            x: -155.5,
                            y: -4.9
                        },
                        "15": {
                            x: -155.05,
                            y: -5.25
                        },
                        "16": {
                            x: -154.65,
                            y: -5.55
                        },
                        "17": {
                            x: -154.3,
                            y: -5.8
                        },
                        "18": {
                            x: -154.65,
                            y: -5.55
                        },
                        "19": {
                            x: -155,
                            y: -5.25
                        },
                        "20": {
                            x: -155.4,
                            y: -4.9
                        },
                        "21": {
                            x: -155.9,
                            y: -4.55
                        },
                        "22": {
                            x: -156.4,
                            y: -4.15
                        },
                        "23": {
                            x: -156.95,
                            y: -3.75
                        },
                        "24": {
                            x: -157.55,
                            y: -3.25
                        },
                        "25": {
                            x: -158.2,
                            y: -2.75
                        },
                        "26": {
                            x: -158.9,
                            y: -2.2
                        },
                        "27": {
                            x: -159.6,
                            y: -1.65
                        },
                        "28": {
                            x: -160.4,
                            y: -1.05
                        },
                        "29": {
                            x: -161.2,
                            y: -0.4
                        },
                        "30": {
                            x: -162.1,
                            y: 0.3
                        },
                        "31": {
                            x: -163,
                            y: 1
                        },
                        "32": {
                            x: -163.95,
                            y: 1.75
                        },
                        "33": {
                            x: -164.95,
                            y: 2.55
                        },
                        "34": {
                            x: -166,
                            y: 3.35
                        },
                        "35": {
                            x: -167.1,
                            y: 4.2
                        }
                    });
            }
        };

        data.lib.gusano3 = class extends MovieClip {
            constructor() {
                super({
                    duration: 36,
                    labels: {
                        play_looped: 0
                    }
                });
                const instance2 = new Graphic2(MovieClip.SYNCHED)
                    .setTransform(137, -2)
                    .setColorTransform(0.2, 0.8, 0.2, 0.48, 0.2, 0.32);
                const instance1 = new Graphic1(MovieClip.SYNCHED);
                this.addTimedChild(instance2)
                    .addTimedChild(instance1, 0, 36, {
                        "0": {
                            x: -34.7,
                            y: 1.9,
                            sx: 1,
                            sy: 1,
                            r: 0,
                            tw: {
                                d: 17,
                                p: {
                                    x: -11.9,
                                    y: -20.85,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: 0.276
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 18,
                                p: {
                                    x: -34.7,
                                    y: 1.9,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    });
            }
        };

        data.lib.Worm = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 24
                });
                const instance1 = new data.lib.gusano3()
                    .setTransform(490.1, 269.95, 0.8, 0.8);
                this[instance1.name = "worm1"] = instance1;
                this.addChild(instance1);
            }
        };
        data.stage = data.lib.Worm;
    }
};


export default data;