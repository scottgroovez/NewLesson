const data = {
    version: 2,
    stage: null,
    background: 0xffffff,
    width: 550,
    height: 400,
    framerate: 24,
    totalFrames: 1,
    assets: {
        "Cow": "../../assets/cow/Cow.shapes.txt"
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


        data.lib.ear = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[0]);
                this.addChild(instance1);
            }
        };

        data.lib.rage = class extends MovieClip {
            constructor() {
                super({
                    duration: 4
                });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[8]);
                const instance3 = new Graphics()
                    .drawCommands(data.shapes.Cow[2]);
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[1]);
                const instance5 = new Graphics()
                    .drawCommands(data.shapes.Cow[4]);
                const instance4 = new Graphics()
                    .drawCommands(data.shapes.Cow[3]);
                const instance8 = new Graphics()
                    .drawCommands(data.shapes.Cow[7]);
                const instance7 = new Graphics()
                    .drawCommands(data.shapes.Cow[6]);
                const instance6 = new Graphics()
                    .drawCommands(data.shapes.Cow[5])
                    .setTransform(5.4, 4.9, 0.75, 0.607);
                this.addTimedChild(instance1)
                    .addTimedChild(instance3, 1, 1)
                    .addTimedChild(instance2, 1, 1, {
                        "1": {
                            x: -1.6,
                            y: 0.05
                        }
                    })
                    .addTimedChild(instance5, 2, 1)
                    .addTimedChild(instance4, 2, 1)
                    .addTimedChild(instance8, 3, 1)
                    .addTimedChild(instance7, 3, 1)
                    .addTimedChild(instance6, 3, 1);
            }
        };

        const Graphic1 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 21, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[11]);
                this.addTimedChild(instance1);
            }
        };

        data.lib.body = class extends MovieClip {
            constructor() {
                super({
                    duration: 21
                });
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[12]);
                const instance1 = new Graphic1(MovieClip.SYNCHED);
                this.addTimedChild(instance2)
                    .addTimedChild(instance1, 0, 21, {
                        "0": {
                            x: 25.15,
                            y: 21.95,
                            c: [
                                1,
                                0,
                                1,
                                0,
                                1,
                                0
                            ]
                        },
                        "2": {
                            c: [
                                1,
                                0.11,
                                1,
                                0.11,
                                1,
                                -0.11
                            ]
                        },
                        "3": {
                            c: [
                                1,
                                0.22,
                                1,
                                0.22,
                                1,
                                -0.22
                            ]
                        },
                        "4": {
                            c: [
                                1,
                                0.33,
                                1,
                                0.33,
                                1,
                                -0.33
                            ]
                        },
                        "5": {
                            c: [
                                1,
                                0.44,
                                1,
                                0.44,
                                1,
                                -0.44
                            ]
                        },
                        "6": {
                            c: [
                                1,
                                0.56,
                                1,
                                0.56,
                                1,
                                -0.56
                            ]
                        },
                        "7": {
                            c: [
                                1,
                                0.67,
                                1,
                                0.67,
                                1,
                                -0.67
                            ]
                        },
                        "8": {
                            c: [
                                1,
                                0.78,
                                1,
                                0.78,
                                1,
                                -0.78
                            ]
                        },
                        "9": {
                            c: [
                                1,
                                0.89,
                                1,
                                0.89,
                                1,
                                -0.89
                            ]
                        },
                        "10": {
                            c: [
                                1,
                                1,
                                1,
                                1,
                                1,
                                -1
                            ]
                        },
                        "11": {
                            c: [
                                1,
                                0.9,
                                1,
                                0.9,
                                1,
                                -0.9
                            ]
                        },
                        "12": {
                            c: [
                                1,
                                0.8,
                                1,
                                0.8,
                                1,
                                -0.8
                            ]
                        },
                        "13": {
                            c: [
                                1,
                                0.7,
                                1,
                                0.7,
                                1,
                                -0.7
                            ]
                        },
                        "14": {
                            c: [
                                1,
                                0.6,
                                1,
                                0.6,
                                1,
                                -0.6
                            ]
                        },
                        "15": {
                            c: [
                                1,
                                0.5,
                                1,
                                0.5,
                                1,
                                -0.5
                            ]
                        },
                        "16": {
                            c: [
                                1,
                                0.4,
                                1,
                                0.4,
                                1,
                                -0.4
                            ]
                        },
                        "17": {
                            c: [
                                1,
                                0.3,
                                1,
                                0.3,
                                1,
                                -0.3
                            ]
                        },
                        "18": {
                            c: [
                                1,
                                0.2,
                                1,
                                0.2,
                                1,
                                -0.2
                            ]
                        },
                        "19": {
                            c: [
                                1,
                                0.1,
                                1,
                                0.1,
                                1,
                                -0.1
                            ]
                        },
                        "20": {
                            c: [
                                1,
                                0,
                                1,
                                0,
                                1,
                                0
                            ]
                        }
                    });
            }
        };

        data.lib.bulltail = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[13])
                    .setTransform(-43.35, -8.25);
                this.addChild(instance1);
            }
        };

        data.lib.bullleg = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[14])
                    .setTransform(-10.3, -37.95);
                this.addChild(instance1);
            }
        };

        const Graphic2 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 30, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[15])
                    .setTransform(-25.85, -45.6);
                this.addTimedChild(instance1);
            }
        };

        const Graphic3 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 30, loop: false });
                const instance1 = new Graphic2(MovieClip.SYNCHED)
                    .setTransform(21, 5.4);
                this.addTimedChild(instance1);
            }
        };

        data.lib.bull = class extends MovieClip {
            constructor() {
                super({
                    duration: 30,
                    labels: {
                        walk: 0,
                        rage: 11
                    }
                });
                const instance10 = new Graphic3(MovieClip.SYNCHED);
                const instance9 = new data.lib.bullleg();
                const instance8 = new data.lib.bullleg();
                const instance7 = new data.lib.bullleg();
                const instance6 = new data.lib.bullleg();
                const instance5 = new data.lib.bulltail();
                const instance4 = new data.lib.body();
                const instance3 = new Graphics()
                    .drawCommands(data.shapes.Cow[9]);
                const instance11 = new Graphics()
                    .drawCommands(data.shapes.Cow[10]);
                const instance2 = new data.lib.rage()
                    .setTransform(9.45, 26.4);
                const instance1 = new data.lib.ear()
                    .setTransform(3.9, -11.25, 1.704, 2.126, 0.283)
                    .setColorTransform(0.43, 0.23, 0.43, 0.11, 0.43, 0);
                this.addTimedChild(instance10, 0, 30, {
                        "0": {
                            x: 4.1,
                            y: 42.05,
                            sx: 1.069,
                            sy: 1.278,
                            tw: {
                                d: 5,
                                p: {
                                    x: 1,
                                    y: 41.5,
                                    sx: 1.046,
                                    sy: 1.183
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 4.1,
                                    y: 42.05,
                                    sx: 1.069,
                                    sy: 1.278
                                }
                            }
                        }
                    })
                    .addTimedChild(instance9, 0, 30, {
                        "0": {
                            x: 9.25,
                            y: 38.05,
                            sx: 0.999,
                            sy: 0.999,
                            r: -0.18,
                            tw: {
                                d: 5,
                                p: {
                                    x: 10.2,
                                    y: 35.05,
                                    sx: 0.997,
                                    sy: 1.216,
                                    r: 0.402
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 9.25,
                                    y: 38.05,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: -0.18
                                }
                            }
                        },
                        "11": {
                            tw: {
                                d: 3,
                                p: {
                                    x: 10.75,
                                    y: 34.35,
                                    sx: 0.998,
                                    sy: 1.318,
                                    r: 0.564
                                }
                            }
                        },
                        "15": {
                            x: 10.324,
                            y: 35.01,
                            sx: 0.997,
                            sy: 1.246,
                            r: 0.415
                        },
                        "16": {
                            x: 9.943,
                            y: 35.733,
                            sy: 1.174,
                            r: 0.267
                        },
                        "17": {
                            x: 9.55,
                            y: 36.4,
                            sx: 0.996,
                            sy: 1.102,
                            r: 0.118,
                            tw: {
                                d: 3,
                                p: {
                                    x: 10.75,
                                    y: 34.35,
                                    sx: 0.998,
                                    sy: 1.318,
                                    r: 0.564
                                }
                            }
                        },
                        "21": {
                            x: 10.324,
                            y: 35.01,
                            sx: 0.997,
                            sy: 1.246,
                            r: 0.415
                        },
                        "22": {
                            x: 9.943,
                            y: 35.733,
                            sy: 1.174,
                            r: 0.267
                        },
                        "23": {
                            x: 9.55,
                            y: 36.4,
                            sx: 0.996,
                            sy: 1.102,
                            r: 0.118
                        }
                    })
                    .addTimedChild(instance8, 0, 30, {
                        "0": {
                            x: 15.45,
                            y: 38.05,
                            sx: 0.999,
                            sy: 0.999,
                            r: -0.18,
                            tw: {
                                d: 5,
                                p: {
                                    x: 15.1,
                                    y: 41.95,
                                    sx: 0.998,
                                    sy: 0.569,
                                    r: -0.622
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 15.45,
                                    y: 38.05,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: -0.18
                                }
                            }
                        }
                    })
                    .addTimedChild(instance7, 0, 30, {
                        "0": {
                            x: 28.5,
                            y: 38.05,
                            sx: 0.999,
                            sy: 0.999,
                            r: -0.18,
                            tw: {
                                d: 5,
                                p: {
                                    x: 31.25,
                                    y: 33.45,
                                    sx: 0.998,
                                    sy: 1.536,
                                    r: 0.162
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 28.5,
                                    y: 38.05,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: -0.18
                                }
                            }
                        }
                    })
                    .addTimedChild(instance6, 0, 30, {
                        "0": {
                            x: 34.8,
                            y: 38.05,
                            sx: 0.999,
                            sy: 0.999,
                            r: -0.18,
                            tw: {
                                d: 5,
                                p: {
                                    x: 34,
                                    y: 40.75,
                                    sx: 0.998,
                                    sy: 0.673,
                                    r: -0.669
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 34.8,
                                    y: 38.05,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: -0.18
                                }
                            }
                        }
                    })
                    .addTimedChild(instance5, 0, 30, {
                        "0": {
                            x: 43.35,
                            y: 8.25,
                            sx: 1,
                            sy: 1,
                            r: 0,
                            tw: {
                                d: 5,
                                p: {
                                    x: 42.95,
                                    y: 8.6,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: -0.276
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 43.35,
                                    y: 8.25,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance4, 0, 30, {
                        "0": {
                            x: -0.2,
                            y: -0.6,
                            sy: 1,
                            c: [
                                0.15,
                                0.34,
                                0.15,
                                0.17,
                                0.15,
                                0
                            ],
                            tw: {
                                d: 5,
                                p: {
                                    y: 0.35,
                                    sy: 0.957
                                }
                            }
                        },
                        "5": {
                            tw: {
                                d: 4,
                                p: {
                                    y: -0.6,
                                    sy: 1
                                }
                            }
                        }
                    })
                    .addTimedChild(instance3, 0, 29)
                    .addTimedChild(instance11, 29, 1)
                    .addTimedChild(instance2)
                    .addTimedChild(instance1);
            }
        };

        const Graphic15 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 47, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[16]);
                this.addTimedChild(instance1);
            }
        };

        data.lib.nose = class extends MovieClip {
            constructor() {
                super({
                    duration: 20,
                    labels: {
                        eat: 1
                    }
                });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[16]);
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[17]);
                const instance3 = new Graphics()
                    .drawCommands(data.shapes.Cow[18]);
                const instance4 = new Graphics()
                    .drawCommands(data.shapes.Cow[17]);
                const instance5 = new Graphics()
                    .drawCommands(data.shapes.Cow[18]);
                const instance6 = new Graphics()
                    .drawCommands(data.shapes.Cow[19]);
                const instance7 = new Graphics()
                    .drawCommands(data.shapes.Cow[20]);
                const instance8 = new Graphics()
                    .drawCommands(data.shapes.Cow[18]);
                const instance9 = new Graphics()
                    .drawCommands(data.shapes.Cow[17]);
                const instance10 = new Graphics()
                    .drawCommands(data.shapes.Cow[18]);
                const instance11 = new Graphics()
                    .drawCommands(data.shapes.Cow[17]);
                const instance12 = new Graphics()
                    .drawCommands(data.shapes.Cow[18]);
                const instance13 = new Graphics()
                    .drawCommands(data.shapes.Cow[17]);
                const instance14 = new Graphics()
                    .drawCommands(data.shapes.Cow[18]);
                const instance15 = new Graphics()
                    .drawCommands(data.shapes.Cow[16]);
                this.addTimedChild(instance1, 0, 1)
                    .addTimedChild(instance2, 1, 3, {
                        "1": {
                            x: 0,
                            y: 0,
                            sx: 1,
                            sy: 1
                        },
                        "2": {
                            x: 0.05,
                            y: 0.3,
                            sx: 0.983,
                            sy: 0.962
                        },
                        "3": {
                            x: 0.1,
                            y: 0.55,
                            sx: 0.967,
                            sy: 0.929
                        }
                    })
                    .addTimedChild(instance3, 4, 1)
                    .addTimedChild(instance4, 5, 1, {
                        "5": {
                            x: 0.25,
                            y: 1.15,
                            sx: 0.93,
                            sy: 0.858
                        }
                    })
                    .addTimedChild(instance5, 6, 3, {
                        "6": {
                            x: 0.15,
                            y: 0.65,
                            sx: 0.961,
                            sy: 0.921
                        },
                        "7": {
                            x: 0.2,
                            y: 0.95,
                            sx: 0.944,
                            sy: 0.884
                        },
                        "8": {
                            x: 0.25,
                            y: 1.25,
                            sx: 0.926,
                            sy: 0.842
                        }
                    })
                    .addTimedChild(instance6, 9, 1)
                    .addTimedChild(instance7, 10, 1)
                    .addTimedChild(instance8, 11, 1, {
                        "11": {
                            x: 0.2,
                            y: 1,
                            sx: 0.94,
                            sy: 0.879
                        }
                    })
                    .addTimedChild(instance9, 12, 1, {
                        "12": {
                            x: 0.3,
                            y: 1.5,
                            sx: 0.91,
                            sy: 0.816
                        }
                    })
                    .addTimedChild(instance10, 13, 2, {
                        "13": {
                            x: 0.1,
                            y: 0.45,
                            sx: 0.972,
                            sy: 0.94
                        },
                        "14": {
                            x: 0.05,
                            y: 0.2,
                            sx: 0.989,
                            sy: 0.977
                        }
                    })
                    .addTimedChild(instance11, 15, 1, {
                        "15": {
                            x: 0.15,
                            y: 0.75,
                            sx: 0.953,
                            sy: 0.912
                        }
                    })
                    .addTimedChild(instance12, 16, 1, {
                        "16": {
                            x: -0.05,
                            y: -0.4,
                            sx: 1.021,
                            sy: 1.047
                        }
                    })
                    .addTimedChild(instance13, 17, 1, {
                        "17": {
                            x: 0.05,
                            y: 0.25,
                            sx: 0.987,
                            sy: 0.967
                        }
                    })
                    .addTimedChild(instance14, 18, 1, {
                        "18": {
                            x: -0.15,
                            y: -0.9,
                            sx: 1.053,
                            sy: 1.112
                        }
                    })
                    .addTimedChild(instance15, 19, 1);
            }
        };

        const Graphic4 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 17, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic5 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 17, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic16 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 17, loop: false });
                const instance3 = new Graphic5(MovieClip.SYNCHED)
                    .setTransform(-1.1, 3.95, 0.09, 0.079);
                const instance2 = new Graphic4(MovieClip.SYNCHED)
                    .setTransform(-5.7, 5.2, 0.09, 0.079);
                const instance1 = new data.lib.ear()
                    .setTransform(-9, -8.6);
                this.addTimedChild(instance3)
                    .addTimedChild(instance2)
                    .addTimedChild(instance1);
            }
        };

        data.lib.Graphic19 = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addChild(instance1);
            }
        };

        const Graphic20 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 30, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic21 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 24, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic6 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 5, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic7 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 5, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic22 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 5, loop: false });
                const instance3 = new Graphic7(MovieClip.SYNCHED)
                    .setTransform(2.05, 4.8, 0.09, 0.079, -0.494);
                const instance2 = new Graphic6(MovieClip.SYNCHED)
                    .setTransform(-1.45, 8.1, 0.09, 0.079, -0.494);
                const instance1 = new data.lib.ear()
                    .setTransform(-10.85, -2.55, 0.998, 0.998, -0.494);
                this.addTimedChild(instance3)
                    .addTimedChild(instance2)
                    .addTimedChild(instance1);
            }
        };

        data.lib.Graphic23 = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addChild(instance1);
            }
        };

        const Graphic24 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 95, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic25 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 41, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic26 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 33, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic8 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 9, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic9 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 9, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic27 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 9, loop: false });
                const instance3 = new Graphic9(MovieClip.SYNCHED)
                    .setTransform(-3.95, 4.8, 0.09, 0.079, 0.535);
                const instance2 = new Graphic8(MovieClip.SYNCHED)
                    .setTransform(-8.55, 3.55, 0.09, 0.079, 0.535);
                const instance1 = new data.lib.ear()
                    .setTransform(-4.35, -9.95, 0.996, 0.996, 0.535);
                this.addTimedChild(instance3)
                    .addTimedChild(instance2)
                    .addTimedChild(instance1);
            }
        };

        data.lib.Graphic28 = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addChild(instance1);
            }
        };

        data.lib.Graphic29 = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[21]);
                this.addChild(instance1);
            }
        };

        data.lib.cateye = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[22]);
                this.addChild(instance1);
            }
        };

        const Graphic10 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 47, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[23]);
                this.addTimedChild(instance1);
            }
        };

        const Graphic17 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 47, loop: false });
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[24]);
                const instance1 = new Graphic10(MovieClip.SYNCHED)
                    .setTransform(2.6, 9.8, 0.998, 0.998, 0.166);
                this.addTimedChild(instance2)
                    .addTimedChild(instance1);
            }
        };

        const Graphic11 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 15, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[23]);
                this.addTimedChild(instance1);
            }
        };

        data.lib.bell = class extends MovieClip {
            constructor() {
                super({
                    duration: 15
                });
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[24]);
                const instance1 = new Graphic11(MovieClip.SYNCHED);
                this.addTimedChild(instance2)
                    .addTimedChild(instance1, 0, 15, {
                        "0": {
                            x: 2.6,
                            y: 9.8,
                            sx: 0.998,
                            sy: 0.998,
                            r: 0.166,
                            tw: {
                                d: 6,
                                p: {
                                    x: 6.95,
                                    y: 10.5,
                                    sx: 0.996,
                                    sy: 0.996,
                                    r: -0.63
                                }
                            }
                        },
                        "6": {
                            tw: {
                                d: 8,
                                p: {
                                    x: 2.6,
                                    y: 9.8,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: 0.166
                                }
                            }
                        }
                    });
            }
        };

        const Graphic12 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 35, loop: false });
                const instance4 = new Graphics()
                    .drawCommands(data.shapes.Cow[28]);
                const instance3 = new Graphics()
                    .drawCommands(data.shapes.Cow[27]);
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[26]);
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[25]);
                const instance5 = new Graphics()
                    .drawCommands(data.shapes.Cow[27]);
                const instance6 = new Graphics()
                    .drawCommands(data.shapes.Cow[26]);
                const instance7 = new Graphics()
                    .drawCommands(data.shapes.Cow[25]);
                this.addTimedChild(instance4)
                    .addTimedChild(instance3, 0, 4, {
                        "0": {
                            x: 0.4,
                            y: -18.5,
                            sx: 1.011,
                            sy: 1.008
                        }
                    })
                    .addTimedChild(instance2, 0, 4)
                    .addTimedChild(instance1, 0, 4)
                    .addTimedChild(instance5, 5, 30, {
                        "5": {
                            x: 0.4,
                            y: -18.5,
                            sx: 1.011,
                            sy: 1.008
                        }
                    })
                    .addTimedChild(instance6, 6, 29)
                    .addTimedChild(instance7, 7, 28);
            }
        };

        const Graphic13 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 35, loop: false });
                const instance1 = new Graphic12(MovieClip.SYNCHED)
                    .setTransform(-0.6, 0.45);
                this.addTimedChild(instance1);
            }
        };

        data.lib.Tween_14 = class extends MovieClip {
            constructor() {
                super({
                    duration: 35,
                    labels: {
                        blue: 4
                    }
                });
                const instance1 = new Graphic13(MovieClip.SYNCHED);
                this.addTimedChild(instance1, 0, 35, {
                    "0": {
                        x: -0.75,
                        y: -0.7,
                        c: [
                            1,
                            0,
                            1,
                            0,
                            1,
                            0
                        ]
                    },
                    "5": {
                        c: [
                            0.8,
                            0,
                            0.8,
                            0,
                            0.8,
                            0.2
                        ]
                    },
                    "6": {
                        c: [
                            0.6,
                            0,
                            0.6,
                            0,
                            0.6,
                            0.4
                        ]
                    },
                    "7": {
                        c: [
                            0.4,
                            0,
                            0.4,
                            0,
                            0.4,
                            0.6
                        ]
                    },
                    "8": {
                        c: [
                            0.2,
                            0,
                            0.2,
                            0,
                            0.2,
                            0.8
                        ]
                    },
                    "9": {
                        c: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                        ]
                    },
                    "10": {
                        c: [
                            0.2,
                            0,
                            0.2,
                            0,
                            0.2,
                            0.8
                        ]
                    },
                    "11": {
                        c: [
                            0.4,
                            0,
                            0.4,
                            0,
                            0.4,
                            0.6
                        ]
                    },
                    "12": {
                        c: [
                            0.6,
                            0,
                            0.6,
                            0,
                            0.6,
                            0.4
                        ]
                    },
                    "13": {
                        c: [
                            0.8,
                            0,
                            0.8,
                            0,
                            0.8,
                            0.2
                        ]
                    },
                    "14": {
                        c: [
                            1,
                            0,
                            1,
                            0,
                            1,
                            0
                        ]
                    },
                    "15": {
                        c: [
                            0.8,
                            0,
                            0.8,
                            0,
                            0.8,
                            0.2
                        ]
                    },
                    "16": {
                        c: [
                            0.6,
                            0,
                            0.6,
                            0,
                            0.6,
                            0.4
                        ]
                    },
                    "17": {
                        c: [
                            0.4,
                            0,
                            0.4,
                            0,
                            0.4,
                            0.6
                        ]
                    },
                    "18": {
                        c: [
                            0.2,
                            0,
                            0.2,
                            0,
                            0.2,
                            0.8
                        ]
                    },
                    "19": {
                        c: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                        ]
                    },
                    "20": {
                        c: [
                            0.2,
                            0,
                            0.2,
                            0,
                            0.2,
                            0.8
                        ]
                    },
                    "21": {
                        c: [
                            0.4,
                            0,
                            0.4,
                            0,
                            0.4,
                            0.6
                        ]
                    },
                    "22": {
                        c: [
                            0.6,
                            0,
                            0.6,
                            0,
                            0.6,
                            0.4
                        ]
                    },
                    "23": {
                        c: [
                            0.8,
                            0,
                            0.8,
                            0,
                            0.8,
                            0.2
                        ]
                    },
                    "24": {
                        c: [
                            1,
                            0,
                            1,
                            0,
                            1,
                            0
                        ]
                    },
                    "25": {
                        c: [
                            0.8,
                            0,
                            0.8,
                            0,
                            0.8,
                            0.2
                        ]
                    },
                    "26": {
                        c: [
                            0.6,
                            0,
                            0.6,
                            0,
                            0.6,
                            0.4
                        ]
                    },
                    "27": {
                        c: [
                            0.4,
                            0,
                            0.4,
                            0,
                            0.4,
                            0.6
                        ]
                    },
                    "28": {
                        c: [
                            0.2,
                            0,
                            0.2,
                            0,
                            0.2,
                            0.8
                        ]
                    },
                    "29": {
                        c: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                        ]
                    },
                    "30": {
                        c: [
                            0.2,
                            0,
                            0.2,
                            0,
                            0.2,
                            0.8
                        ]
                    },
                    "31": {
                        c: [
                            0.4,
                            0,
                            0.4,
                            0,
                            0.4,
                            0.6
                        ]
                    },
                    "32": {
                        c: [
                            0.6,
                            0,
                            0.6,
                            0,
                            0.6,
                            0.4
                        ]
                    },
                    "33": {
                        c: [
                            0.8,
                            0,
                            0.8,
                            0,
                            0.8,
                            0.2
                        ]
                    },
                    "34": {
                        c: [
                            1,
                            0,
                            1,
                            0,
                            1,
                            0
                        ]
                    }
                });
            }
        };

        data.lib._8spots = class extends MovieClip {
            constructor() {
                super({
                    duration: 3,
                    labels: {
                        "s4": 0
                    }
                });
                const instance1 = new data.lib.Tween_14()
                    .setTransform(18.3, 15.2);
                this[instance1.name = "spot4"] = instance1;
                this.addTimedChild(instance1);
            }
        };

        data.lib.queue = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[29])
                    .setTransform(-46.15, -8.7);
                this.addChild(instance1);
            }
        };

        data.lib.leg = class extends Container {
            constructor() {
                super();
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[30])
                    .setTransform(-11.2, -28.7);
                this.addChild(instance1);
            }
        };

        data.lib.flyingcapa = class extends MovieClip {
            constructor() {
                super({
                    duration: 6
                });
                const instance2 = new Graphics()
                    .drawCommands(data.shapes.Cow[32]);
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[31]);
                const instance3 = new Graphics()
                    .drawCommands(data.shapes.Cow[33]);
                const instance4 = new Graphics()
                    .drawCommands(data.shapes.Cow[34]);
                const instance5 = new Graphics()
                    .drawCommands(data.shapes.Cow[35]);
                const instance6 = new Graphics()
                    .drawCommands(data.shapes.Cow[36]);
                const instance7 = new Graphics()
                    .drawCommands(data.shapes.Cow[37]);
                this.addTimedChild(instance2, 0, 1)
                    .addTimedChild(instance1, 0, 1)
                    .addTimedChild(instance3, 1, 1)
                    .addTimedChild(instance4, 2, 1)
                    .addTimedChild(instance5, 3, 1)
                    .addTimedChild(instance6, 4, 1)
                    .addTimedChild(instance7, 5, 1);
            }
        };

        const Graphic14 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 157, loop: false });
                const instance1 = new Graphics()
                    .drawCommands(data.shapes.Cow[15])
                    .setTransform(-25.85, -45.6);
                this.addTimedChild(instance1);
            }
        };

        const Graphic18 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 157, loop: false });
                const instance1 = new Graphic14(MovieClip.SYNCHED)
                    .setTransform(21, 5.4);
                this.addTimedChild(instance1);
            }
        };

        data.lib.cow = class extends MovieClip {
            constructor() {
                super({
                    duration: 157,
                    labels: {
                        walk: 0,
                        walk_end: 17,
                        eat: 18,
                        eat_end: 23,
                        bull: 47,
                        g: 156
                    }
                });
                const instance13 = new Graphic18(MovieClip.SYNCHED);
                const instance12 = new data.lib.leg();
                const instance28 = new data.lib.flyingcapa();
                const instance11 = new data.lib.leg();
                const instance10 = new data.lib.leg();
                const instance9 = new data.lib.leg();
                const instance8 = new data.lib.queue();
                const instance7 = new data.lib.body();
                this[instance7.name = "body"] = instance7;
                const instance6 = new data.lib._8spots();
                this[instance6.name = "spots"] = instance6;
                const instance5 = new Graphic17(MovieClip.SYNCHED);
                const instance21 = new data.lib.bell();
                const instance4 = new data.lib.cateye();
                const instance3 = new data.lib.cateye();
                const instance2 = new Graphic16(MovieClip.SYNCHED);
                const instance16 = new Graphic20(MovieClip.SYNCHED);
                const instance15 = new data.lib.Graphic19();
                const instance14 = new data.lib.ear();
                const instance18 = new Graphic21(MovieClip.SYNCHED);
                const instance17 = new data.lib.ear();
                const instance1 = new Graphic15(MovieClip.SYNCHED);
                const instance20 = new Graphic22(MovieClip.SYNCHED);
                const instance24 = new Graphic24(MovieClip.SYNCHED);
                const instance23 = new data.lib.Graphic23();
                const instance22 = new data.lib.ear();
                const instance27 = new Graphic25(MovieClip.SYNCHED);
                const instance26 = new data.lib.ear();
                const instance30 = new Graphic26(MovieClip.SYNCHED);
                const instance29 = new data.lib.ear();
                const instance31 = new Graphic27(MovieClip.SYNCHED);
                const instance34 = new data.lib.Graphic29()
                    .setTransform(9.4, 8.35, 0.09, 0.079);
                const instance33 = new data.lib.Graphic28()
                    .setTransform(4.8, 9.6, 0.09, 0.079);
                const instance32 = new data.lib.ear()
                    .setTransform(1.5, -4.2);
                const instance19 = new data.lib.nose();
                this[instance19.name = "mouth1"] = instance19;
                const instance25 = new data.lib.bull();
                this[instance25.name = "bull1"] = instance25;
                this.addTimedChild(instance13, 0, 157, {
                        "0": {
                            x: 4.85,
                            y: 40.2,
                            sx: 1,
                            sy: 1,
                            tw: {
                                d: 8,
                                p: {
                                    x: 6,
                                    y: 41.15,
                                    sx: 0.933,
                                    sy: 0.824
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 4.85,
                                    y: 40.2,
                                    sx: 1,
                                    sy: 1
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 0.6,
                                    y: 42.1,
                                    sx: 1.09
                                }
                            }
                        },
                        "47": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 4.85,
                                    y: 40.2,
                                    sx: 1
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 12.9,
                                    sx: 0.819
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 4.85,
                                    sx: 1
                                }
                            }
                        }
                    })
                    .addTimedChild(instance12, 0, 157, {
                        "0": {
                            x: 31.65,
                            y: 35.5,
                            sx: 0.999,
                            sy: 0.999,
                            r: 0.272,
                            tw: {
                                d: 8,
                                p: {
                                    x: 31.35,
                                    y: 36.55,
                                    sx: 0.998,
                                    sy: 1.399,
                                    r: 0.067
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 31.65,
                                    y: 35.5,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: 0.272
                                }
                            }
                        }
                    })
                    .addTimedChild(instance28, 100, 49, {
                        "100": {
                            x: 4.15,
                            y: 41.05,
                            sx: 0.52,
                            sy: 0.82,
                            kx: 1.742,
                            ky: -2.206,
                            tw: {
                                d: 14,
                                p: {
                                    x: -12.55,
                                    y: 50
                                }
                            }
                        },
                        "121": {
                            tw: {
                                d: 9,
                                p: {
                                    x: -14.1,
                                    y: -20.35,
                                    sx: 0.519,
                                    sy: 0.819,
                                    kx: -0.292,
                                    ky: -0.172
                                }
                            }
                        },
                        "131": {
                            x: -8.75,
                            y: -23.3,
                            sy: 0.818,
                            kx: -0.441,
                            ky: -0.022
                        },
                        "132": {
                            x: -14.1,
                            y: -20.35,
                            sy: 0.819,
                            kx: -0.292,
                            ky: -0.172,
                            tw: {
                                d: 12,
                                p: {
                                    x: -23.25,
                                    y: 40.7,
                                    sx: 0.519,
                                    sy: 0.819,
                                    kx: 1.397,
                                    ky: -1.861
                                }
                            }
                        },
                        "144": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 29.1,
                                    y: 43.5,
                                    sx: 0.518,
                                    sy: 0.818,
                                    kx: 2.522,
                                    ky: -2.985
                                }
                            }
                        }
                    })
                    .addTimedChild(instance11, 0, 157, {
                        "0": {
                            x: 37.85,
                            y: 37.05,
                            sx: 1,
                            sy: 1,
                            r: 0,
                            tw: {
                                d: 8,
                                p: {
                                    x: 35.5,
                                    y: 37.6,
                                    sx: 0.998,
                                    sy: 0.793,
                                    r: -0.7
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 37.85,
                                    y: 37.05,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance10, 0, 157, {
                        "0": {
                            x: 9.6,
                            y: 34.55,
                            sx: 0.999,
                            sy: 0.999,
                            kx: 0,
                            ky: 0,
                            r: 0.258,
                            tw: {
                                d: 8,
                                p: {
                                    x: 9.5,
                                    y: 36.65,
                                    sx: 0.998,
                                    sy: 1.214,
                                    r: 0.048
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 9.6,
                                    y: 34.55,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: 0.258
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 10.7,
                                    y: 8.25,
                                    sx: 0.996,
                                    sy: 0.996,
                                    r: 1.524
                                }
                            }
                        },
                        "115": {
                            x: 10.886,
                            y: 8.295,
                            kx: 4.683,
                            ky: 1.601,
                            r: 0
                        },
                        "116": {
                            x: 11.063,
                            y: 8.336,
                            kx: 4.606,
                            ky: 1.677
                        },
                        "117": {
                            x: 11.235,
                            y: 8.371,
                            sx: 0.995,
                            sy: 0.995,
                            kx: 4.529,
                            ky: 1.754
                        },
                        "118": {
                            x: 11.358,
                            y: 8.443,
                            kx: 4.453,
                            ky: 1.831
                        },
                        "119": {
                            x: 11.485,
                            y: 8.551,
                            kx: 4.376,
                            ky: 1.907
                        },
                        "120": {
                            x: 11.622,
                            y: 8.64,
                            kx: 4.299,
                            ky: 1.984
                        },
                        "121": {
                            x: 11.774,
                            y: 8.707,
                            kx: 4.222,
                            ky: 2.061
                        },
                        "122": {
                            x: 11.897,
                            y: 8.851,
                            kx: 4.146,
                            ky: 2.137
                        },
                        "123": {
                            x: 11.996,
                            y: 8.968,
                            kx: 4.069,
                            ky: 2.214
                        },
                        "124": {
                            x: 12.128,
                            y: 9.058,
                            kx: 3.992,
                            ky: 2.291
                        },
                        "125": {
                            x: 12.199,
                            y: 9.22,
                            kx: 3.916,
                            ky: 2.368
                        },
                        "126": {
                            x: 12.264,
                            y: 9.353,
                            kx: 3.839,
                            ky: 2.444
                        },
                        "127": {
                            x: 12.329,
                            y: 9.455,
                            kx: 3.762,
                            ky: 2.521
                        },
                        "128": {
                            x: 12.452,
                            y: 9.68,
                            kx: 3.686,
                            ky: 2.598
                        },
                        "129": {
                            x: 12.487,
                            y: 9.825,
                            kx: 3.609,
                            ky: 2.674
                        },
                        "130": {
                            x: 12.541,
                            y: 9.993,
                            kx: 3.532,
                            ky: 2.751
                        },
                        "131": {
                            x: 12.55,
                            y: 10.05,
                            kx: 3.455,
                            ky: 2.828,
                            tw: {
                                d: 2,
                                p: {
                                    x: 10.7,
                                    y: 8.25,
                                    sx: 0.996,
                                    sy: 0.996,
                                    r: 1.524
                                }
                            }
                        },
                        "148": {
                            x: 10.555,
                            y: 11.021,
                            kx: 0,
                            ky: 0,
                            r: 1.383
                        },
                        "149": {
                            x: 10.429,
                            y: 13.81,
                            r: 1.243
                        },
                        "150": {
                            x: 10.205,
                            y: 16.699,
                            sx: 0.997,
                            sy: 0.997,
                            r: 1.102
                        },
                        "151": {
                            x: 10.122,
                            y: 19.625,
                            r: 0.961
                        },
                        "152": {
                            x: 9.973,
                            y: 22.523,
                            sx: 0.998,
                            sy: 0.998,
                            r: 0.821
                        },
                        "153": {
                            x: 9.907,
                            y: 25.433,
                            r: 0.68
                        },
                        "154": {
                            x: 9.778,
                            y: 28.442,
                            r: 0.54
                        },
                        "155": {
                            x: 9.745,
                            y: 31.434,
                            sx: 0.999,
                            sy: 0.999,
                            r: 0.399
                        },
                        "156": {
                            x: 9.6,
                            y: 34.55,
                            r: 0.258
                        }
                    })
                    .addTimedChild(instance9, 0, 157, {
                        "0": {
                            x: 16,
                            y: 37.05,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 0,
                            tw: {
                                d: 8,
                                p: {
                                    x: 15.05,
                                    y: 38.95,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: -0.621
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 16,
                                    y: 37.05,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 11.5,
                                    y: 12.75,
                                    sx: 0.997,
                                    sy: 0.997,
                                    r: 0.968
                                }
                            }
                        },
                        "115": {
                            x: 11.696,
                            y: 12.858,
                            r: 1.037
                        },
                        "116": {
                            x: 11.943,
                            y: 12.903,
                            r: 1.105
                        },
                        "117": {
                            x: 12.144,
                            y: 12.981,
                            r: 1.174
                        },
                        "118": {
                            x: 12.405,
                            y: 13.038,
                            r: 1.243
                        },
                        "119": {
                            x: 12.58,
                            y: 13.173,
                            r: 1.311
                        },
                        "120": {
                            x: 12.774,
                            y: 13.283,
                            r: 1.38
                        },
                        "121": {
                            x: 12.992,
                            y: 13.365,
                            r: 1.449
                        },
                        "122": {
                            x: 13.191,
                            y: 13.52,
                            r: 1.518
                        },
                        "123": {
                            x: 13.325,
                            y: 13.695,
                            kx: 4.697,
                            ky: 1.586,
                            r: 0
                        },
                        "124": {
                            x: 13.45,
                            y: 13.839,
                            kx: 4.628,
                            ky: 1.655
                        },
                        "125": {
                            x: 13.621,
                            y: 14.002,
                            kx: 4.559,
                            ky: 1.724
                        },
                        "126": {
                            x: 13.744,
                            y: 14.184,
                            sx: 0.996,
                            sy: 0.996,
                            kx: 4.491,
                            ky: 1.793
                        },
                        "127": {
                            x: 13.875,
                            y: 14.386,
                            kx: 4.422,
                            ky: 1.861
                        },
                        "128": {
                            x: 14.018,
                            y: 14.558,
                            kx: 4.353,
                            ky: 1.93
                        },
                        "129": {
                            x: 14.131,
                            y: 14.801,
                            kx: 4.285,
                            ky: 1.999
                        },
                        "130": {
                            x: 14.216,
                            y: 15.016,
                            kx: 4.216,
                            ky: 2.067
                        },
                        "131": {
                            x: 14.4,
                            y: 15.25,
                            kx: 4.147,
                            ky: 2.136,
                            tw: {
                                d: 2,
                                p: {
                                    x: 11.5,
                                    y: 12.75,
                                    sx: 0.997,
                                    sy: 0.997,
                                    r: 0.968
                                }
                            }
                        },
                        "148": {
                            x: 11.955,
                            y: 15.345,
                            sx: 0.998,
                            sy: 0.998,
                            kx: 0,
                            ky: 0,
                            r: 0.86
                        },
                        "149": {
                            x: 12.364,
                            y: 17.957,
                            r: 0.753
                        },
                        "150": {
                            x: 12.861,
                            y: 20.604,
                            r: 0.645
                        },
                        "151": {
                            x: 13.387,
                            y: 23.301,
                            r: 0.538
                        },
                        "152": {
                            x: 13.831,
                            y: 25.969,
                            sx: 0.999,
                            sy: 0.999,
                            r: 0.43
                        },
                        "153": {
                            x: 14.385,
                            y: 28.727,
                            r: 0.323
                        },
                        "154": {
                            x: 14.944,
                            y: 31.547,
                            r: 0.215
                        },
                        "155": {
                            x: 15.456,
                            y: 34.298,
                            sx: 1,
                            sy: 1,
                            r: 0.108
                        },
                        "156": {
                            x: 16,
                            y: 37.05,
                            r: 0
                        }
                    })
                    .addTimedChild(instance8, 0, 157, {
                        "0": {
                            x: 46.15,
                            y: 8.7,
                            sx: 1,
                            sy: 1,
                            r: 0,
                            tw: {
                                d: 8,
                                p: {
                                    x: 42.55,
                                    y: 11.35,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: -0.574
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 46.15,
                                    y: 8.7,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 36.05,
                                    y: 1.9,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: -0.494
                                }
                            }
                        },
                        "47": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 46.15,
                                    y: 8.7,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 53.85,
                                    y: 23.9,
                                    sx: 0.893,
                                    sy: 0.87,
                                    r: 0.137
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 46.15,
                                    y: 8.7,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance7, 0, 157, {
                        "0": {
                            y: -0.45,
                            tw: {
                                d: 8,
                                p: {
                                    y: -1.2
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    y: -0.45
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: -8.85,
                                    y: 15.65,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: -0.494
                                }
                            }
                        },
                        "47": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 0,
                                    y: -0.45,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 36.2,
                                    y: -18.65,
                                    sx: 0.997,
                                    sy: 0.997,
                                    r: 0.968
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 0,
                                    y: -0.45,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance6, 0, 157, {
                        "0": {
                            x: 16,
                            y: 6.3,
                            tw: {
                                d: 8,
                                p: {
                                    y: 5.55
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    y: 6.3
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 8.4,
                                    y: 14.05,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: -0.494
                                }
                            }
                        },
                        "47": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 16,
                                    y: 6.3,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 39.7,
                                    y: -1.65,
                                    sx: 0.997,
                                    sy: 0.997,
                                    r: 0.968
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 16,
                                    y: 6.3,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance5, 0, 47, {
                        "0": {
                            x: 1.5,
                            y: 26.75,
                            sx: 1.478,
                            sy: 1.069,
                            r: -0.034,
                            tw: {
                                d: 8,
                                p: {
                                    y: 26
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    y: 26.75
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 5.35,
                                    y: 42.5,
                                    sx: 1.476,
                                    sy: 1.067,
                                    r: -0.528
                                }
                            }
                        }
                    })
                    .addTimedChild(instance21, 47, 110, {
                        "47": {
                            x: 5.35,
                            y: 42.5,
                            sx: 1.476,
                            sy: 1.067,
                            kx: 0,
                            ky: 0,
                            r: -0.528,
                            tw: {
                                d: 5,
                                p: {
                                    x: 1.5,
                                    y: 26.75,
                                    sx: 1.478,
                                    sy: 1.069,
                                    r: -0.034
                                }
                            }
                        },
                        "53": {
                            x: 2.01,
                            y: 26.904,
                            sx: 1.441,
                            sy: 1.052,
                            kx: 0.055,
                            ky: -0.054,
                            r: 0
                        },
                        "54": {
                            x: 2.452,
                            y: 27.048,
                            sx: 1.405,
                            sy: 1.036,
                            kx: 0.075,
                            ky: -0.074
                        },
                        "55": {
                            x: 2.927,
                            y: 27.185,
                            sx: 1.368,
                            sy: 1.019,
                            kx: 0.096,
                            ky: -0.094
                        },
                        "56": {
                            x: 3.284,
                            y: 27.262,
                            sx: 1.332,
                            sy: 1.003,
                            kx: 0.116,
                            ky: -0.114
                        },
                        "57": {
                            x: 3.722,
                            y: 27.332,
                            sx: 1.295,
                            sy: 0.987,
                            kx: 0.137,
                            ky: -0.134
                        },
                        "58": {
                            x: 4.15,
                            y: 27.4,
                            sx: 1.259,
                            sy: 0.97,
                            kx: 0.157,
                            ky: -0.154,
                            tw: {
                                d: 4,
                                p: {
                                    x: 9.9,
                                    y: 28.25,
                                    sx: 0.822,
                                    sy: 0.775,
                                    r: -0.402
                                }
                            }
                        },
                        "63": {
                            x: 9.979,
                            y: 28.178,
                            kx: 0,
                            ky: 0,
                            r: -0.384
                        },
                        "64": {
                            x: 9.955,
                            y: 28.097,
                            kx: 0.366,
                            ky: -0.365,
                            r: 0
                        },
                        "65": {
                            x: 9.928,
                            y: 28.056,
                            kx: 0,
                            ky: 0,
                            r: -0.347
                        },
                        "66": {
                            x: 9.898,
                            y: 27.957,
                            sx: 0.823,
                            r: -0.329
                        },
                        "67": {
                            x: 9.916,
                            y: 27.897,
                            r: -0.31
                        },
                        "68": {
                            x: 9.88,
                            y: 27.827,
                            r: -0.292
                        },
                        "69": {
                            x: 9.893,
                            y: 27.748,
                            r: -0.274
                        },
                        "70": {
                            x: 9.854,
                            y: 27.658,
                            r: -0.255
                        },
                        "71": {
                            x: 9.862,
                            y: 27.609,
                            r: -0.237
                        },
                        "72": {
                            x: 9.869,
                            y: 27.55,
                            r: -0.218
                        },
                        "73": {
                            x: 9.824,
                            y: 27.48,
                            r: -0.2
                        },
                        "74": {
                            x: 9.827,
                            y: 27.401,
                            r: -0.182
                        },
                        "75": {
                            x: 9.83,
                            y: 27.361,
                            r: -0.163
                        },
                        "76": {
                            x: 9.831,
                            y: 27.262,
                            r: -0.145
                        },
                        "77": {
                            x: 9.832,
                            y: 27.202,
                            r: -0.126
                        },
                        "78": {
                            x: 9.831,
                            y: 27.133,
                            sy: 0.776,
                            r: -0.108
                        },
                        "79": {
                            y: 27.053,
                            r: -0.09
                        },
                        "80": {
                            x: 9.83,
                            y: 26.962,
                            r: -0.071
                        },
                        "81": {
                            x: 9.829,
                            y: 26.912,
                            r: -0.053
                        },
                        "82": {
                            x: 9.75,
                            y: 26.7,
                            r: -0.034,
                            tw: {
                                d: 8,
                                p: {
                                    x: 9.9,
                                    y: 28.25,
                                    sx: 0.822,
                                    sy: 0.775,
                                    r: -0.402
                                }
                            }
                        },
                        "91": {
                            x: 1.5,
                            y: 26.75,
                            sx: 1.478,
                            sy: 1.069,
                            r: -0.034
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 12.3,
                                    y: 9.15,
                                    sx: 1.47,
                                    sy: 1.063,
                                    r: 0.081
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 1.5,
                                    y: 26.75,
                                    sx: 1.478,
                                    sy: 1.069,
                                    r: -0.034
                                }
                            }
                        }
                    })
                    .addTimedChild(instance4, 0, 157, {
                        "0": {
                            x: 4.8,
                            y: 9.5,
                            sx: 1.251,
                            sy: 1.213,
                            tw: {
                                d: 8,
                                p: {
                                    y: 8.75
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    y: 9.5
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 0.1,
                                    y: 22.2,
                                    sx: 1.249,
                                    sy: 1.211,
                                    r: -0.494
                                }
                            }
                        },
                        "47": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 4.8,
                                    y: 9.5,
                                    sx: 1.251,
                                    sy: 1.213,
                                    r: 0
                                }
                            }
                        },
                        "52": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 5.1
                                }
                            }
                        },
                        "58": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 6.3
                                }
                            }
                        },
                        "84": {
                            tw: {
                                d: 7,
                                p: {
                                    x: 4.8
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 21.65,
                                    y: -7,
                                    sx: 1.246,
                                    sy: 1.208,
                                    r: 0.535
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 4.8,
                                    y: 9.5,
                                    sx: 1.251,
                                    sy: 1.213,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance3, 0, 157, {
                        "0": {
                            x: 9.55,
                            y: 8.45,
                            sx: 1.317,
                            sy: 1.16,
                            r: 0,
                            tw: {
                                d: 8,
                                p: {
                                    y: 7.7
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    y: 8.45
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 3.85,
                                    y: 19,
                                    sx: 1.315,
                                    sy: 1.158,
                                    r: -0.494
                                }
                            }
                        },
                        "47": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 9.55,
                                    y: 8.45,
                                    sx: 1.317,
                                    sy: 1.16,
                                    r: 0
                                }
                            }
                        },
                        "52": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 9.5,
                                    y: 8.55
                                }
                            }
                        },
                        "58": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 11.05,
                                    y: 7.95
                                }
                            }
                        },
                        "84": {
                            tw: {
                                d: 7,
                                p: {
                                    x: 9.55,
                                    y: 8.45
                                }
                            }
                        },
                        "99": {
                            x: 10.66,
                            y: 7.612,
                            sx: 1.316,
                            r: 0.033
                        },
                        "100": {
                            x: 11.709,
                            y: 6.714,
                            r: 0.067
                        },
                        "101": {
                            x: 12.749,
                            y: 5.856,
                            sy: 1.159,
                            r: 0.1
                        },
                        "102": {
                            x: 13.829,
                            y: 4.988,
                            sx: 1.315,
                            r: 0.134
                        },
                        "103": {
                            x: 14.8,
                            y: 4.109,
                            r: 0.167
                        },
                        "104": {
                            x: 15.863,
                            y: 3.218,
                            sy: 1.158,
                            r: 0.201
                        },
                        "105": {
                            x: 16.917,
                            y: 2.366,
                            sx: 1.314,
                            r: 0.234
                        },
                        "106": {
                            x: 17.963,
                            y: 1.502,
                            r: 0.267
                        },
                        "107": {
                            x: 19.001,
                            y: 0.676,
                            sy: 1.157,
                            r: 0.301
                        },
                        "108": {
                            x: 20.032,
                            y: -0.213,
                            sx: 1.313,
                            r: 0.334
                        },
                        "109": {
                            x: 21.107,
                            y: -1.113,
                            r: 0.368
                        },
                        "110": {
                            x: 22.125,
                            y: -1.927,
                            r: 0.401
                        },
                        "111": {
                            x: 23.137,
                            y: -2.853,
                            sx: 1.312,
                            sy: 1.156,
                            r: 0.435
                        },
                        "112": {
                            x: 24.193,
                            y: -3.693,
                            r: 0.468
                        },
                        "113": {
                            x: 25.245,
                            y: -4.595,
                            r: 0.502
                        },
                        "114": {
                            x: 26.25,
                            y: -5.5,
                            sy: 1.155,
                            r: 0.535
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 9.55,
                                    y: 8.45,
                                    sx: 1.317,
                                    sy: 1.16,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance2, 0, 17, {
                        "0": {
                            x: 10.5,
                            y: 4.4,
                            tw: {
                                d: 8,
                                p: {
                                    y: 3.65
                                }
                            }
                        },
                        "9": {
                            y: 3.75
                        },
                        "10": {
                            x: 10.45,
                            y: 3.8
                        },
                        "11": {
                            y: 3.9
                        },
                        "12": {
                            y: 4
                        },
                        "13": {
                            x: 10.4,
                            y: 4.05
                        },
                        "14": {
                            y: 4.15
                        },
                        "15": {
                            y: 4.25
                        },
                        "16": {
                            x: 10.35,
                            y: 4.3
                        }
                    })
                    .addTimedChild(instance16, 17, 30, {
                        "17": {
                            x: 9.4,
                            y: 8.35,
                            sx: 0.09,
                            sy: 0.079,
                            r: 0
                        },
                        "18": {
                            x: 7.95,
                            y: 10
                        },
                        "19": {
                            x: 6.45,
                            y: 11.6
                        },
                        "20": {
                            x: 5,
                            y: 13.25
                        },
                        "21": {
                            x: 3.5,
                            y: 14.9
                        },
                        "22": {
                            x: 2.05,
                            y: 16.5
                        },
                        "23": {
                            x: 3.65,
                            y: 19,
                            r: -0.494
                        }
                    })
                    .addTimedChild(instance15, 17, 1, {
                        "17": {
                            x: 4.8,
                            y: 9.6,
                            sx: 0.09,
                            sy: 0.079
                        }
                    })
                    .addTimedChild(instance14, 17, 1, {
                        "17": {
                            x: 1.5,
                            y: -4.2
                        }
                    })
                    .addTimedChild(instance18, 23, 24, {
                        "23": {
                            x: 0.15,
                            y: 22.3,
                            sx: 0.09,
                            sy: 0.079,
                            r: -0.494
                        }
                    })
                    .addTimedChild(instance17, 23, 24, {
                        "23": {
                            x: -9.25,
                            y: 11.65,
                            sx: 0.998,
                            sy: 0.998,
                            r: -0.494
                        }
                    })
                    .addTimedChild(instance1, 0, 47, {
                        "0": {
                            x: 3,
                            y: 13.9,
                            r: 0.145,
                            tw: {
                                d: 8,
                                p: {
                                    y: 13.15
                                }
                            }
                        },
                        "8": {
                            tw: {
                                d: 9,
                                p: {
                                    y: 13.9
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 0.6,
                                    y: 30.45,
                                    sx: 0.998,
                                    sy: 0.998,
                                    r: -0.349
                                }
                            }
                        }
                    })
                    .addTimedChild(instance20, 47, 5, {
                        "47": {
                            x: 1.6,
                            y: 14.2,
                            sx: 1,
                            sy: 1,
                            r: 0,
                            tw: {
                                d: 4,
                                p: {
                                    x: 7.55,
                                    y: 5.55,
                                    sx: 0.999,
                                    sy: 0.999,
                                    r: 0.36
                                }
                            }
                        }
                    })
                    .addTimedChild(instance24, 52, 95, {
                        "52": {
                            x: 9.2,
                            y: 8.1,
                            sx: 0.09,
                            sy: 0.079,
                            r: 0.049
                        },
                        "53": {
                            y: 8.2
                        },
                        "54": {
                            x: 9.15,
                            y: 8.25
                        },
                        "55": {
                            y: 8.35
                        },
                        "56": {
                            y: 8.45
                        },
                        "57": {
                            x: 9.1,
                            y: 8.5
                        },
                        "58": {
                            x: 9.4,
                            y: 8.35,
                            r: 0
                        },
                        "99": {
                            x: 10.65,
                            y: 7.4
                        },
                        "100": {
                            x: 11.9,
                            y: 6.5
                        },
                        "101": {
                            x: 13.1,
                            y: 5.55
                        },
                        "102": {
                            x: 14.35,
                            y: 4.6
                        },
                        "103": {
                            x: 15.6,
                            y: 3.7
                        },
                        "104": {
                            x: 16.85,
                            y: 2.75
                        },
                        "105": {
                            x: 18.05,
                            y: 1.8
                        },
                        "106": {
                            x: 19.3,
                            y: 0.9
                        },
                        "107": {
                            x: 20.55,
                            y: -0.05
                        },
                        "108": {
                            x: 21.8,
                            y: -1
                        },
                        "109": {
                            x: 23,
                            y: -1.95
                        },
                        "110": {
                            x: 24.25,
                            y: -2.85
                        },
                        "111": {
                            x: 25.5,
                            y: -3.8
                        },
                        "112": {
                            x: 26.75,
                            y: -4.75
                        },
                        "113": {
                            x: 27.95,
                            y: -5.65
                        },
                        "114": {
                            x: 26.2,
                            y: -5.7,
                            r: 0.535
                        }
                    })
                    .addTimedChild(instance23, 52, 1, {
                        "52": {
                            x: 4.55,
                            y: 9.15,
                            sx: 0.09,
                            sy: 0.079,
                            r: 0.049
                        }
                    })
                    .addTimedChild(instance22, 52, 1, {
                        "52": {
                            x: 1.9,
                            y: -4.85,
                            r: 0.049
                        }
                    })
                    .addTimedChild(instance27, 58, 41, {
                        "58": {
                            x: 4.8,
                            y: 9.6,
                            sx: 0.09,
                            sy: 0.079
                        }
                    })
                    .addTimedChild(instance26, 58, 41, {
                        "58": {
                            x: 1.5,
                            y: -4.2
                        }
                    })
                    .addTimedChild(instance30, 114, 33, {
                        "114": {
                            x: 21.6,
                            y: -6.95,
                            sx: 0.09,
                            sy: 0.079,
                            r: 0.535
                        }
                    })
                    .addTimedChild(instance29, 114, 33, {
                        "114": {
                            x: 25.8,
                            y: -20.45,
                            sx: 0.996,
                            sy: 0.996,
                            r: 0.535
                        }
                    })
                    .addTimedChild(instance31, 147, 9, {
                        "147": {
                            x: 30.15,
                            y: -10.5
                        },
                        "148": {
                            x: 27.95,
                            y: -8.85
                        },
                        "149": {
                            x: 25.75,
                            y: -7.2
                        },
                        "150": {
                            x: 23.55,
                            y: -5.55
                        },
                        "151": {
                            x: 21.35,
                            y: -3.9
                        },
                        "152": {
                            x: 19.15,
                            y: -2.2
                        },
                        "153": {
                            x: 16.95,
                            y: -0.55
                        },
                        "154": {
                            x: 14.75,
                            y: 1.1
                        },
                        "155": {
                            x: 12.55,
                            y: 2.75
                        }
                    })
                    .addTimedChild(instance34, 156, 1)
                    .addTimedChild(instance33, 156, 1)
                    .addTimedChild(instance32, 156, 1)
                    .addTimedChild(instance19, 47, 110, {
                        "47": {
                            x: 0.6,
                            y: 30.45,
                            sx: 0.998,
                            sy: 0.998,
                            r: -0.349,
                            tw: {
                                d: 5,
                                p: {
                                    x: 3,
                                    y: 13.9,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.145
                                }
                            }
                        },
                        "52": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 3.3,
                                    y: 14.25,
                                    sx: 0.999,
                                    sy: 0.936,
                                    r: 0.092
                                }
                            }
                        },
                        "58": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 5.1,
                                    y: 15.75,
                                    sx: 1,
                                    sy: 0.685,
                                    r: -0.114
                                }
                            }
                        },
                        "84": {
                            tw: {
                                d: 7,
                                p: {
                                    x: 3,
                                    y: 13.9,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.145
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 17.9,
                                    y: -4.25,
                                    sx: 0.995,
                                    sy: 0.995,
                                    r: 0.531
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 3,
                                    y: 13.9,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.145
                                }
                            }
                        }
                    })
                    .addTimedChild(instance25, 58, 98, {
                        "58": {
                            x: 175.3,
                            y: -4.8,
                            tw: {
                                d: 16,
                                p: {
                                    x: 99,
                                    y: -4.2
                                }
                            }
                        },
                        "114": {
                            x: 95.2,
                            y: -3.85,
                            tw: {
                                d: 10,
                                p: {
                                    x: -19.25,
                                    y: 7.2
                                }
                            }
                        },
                        "124": {
                            tw: {
                                d: 15,
                                p: {
                                    x: -235.2,
                                    y: 4.85
                                }
                            }
                        },
                        "139": {
                            tw: {
                                d: 16,
                                p: {
                                    x: -240.35,
                                    y: 4.4
                                }
                            }
                        }
                    });
            }
        };

        data.lib.Cow = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 24
                });
                const instance1 = new data.lib.cow()
                    .setTransform(216.15, 152.15, 2.092, 2.045);
                this[instance1.name = "cow"] = instance1;
                this.addChild(instance1);
            }
        };
        data.stage = data.lib.Cow;
    }
};


export default data;