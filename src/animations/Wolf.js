const data = {
    version: 2,
    stage: null,
    background: 0x666666,
    width: 1280,
    height: 720,
    framerate: 60,
    totalFrames: 1,
    assets: {
        "tile11Cap": "../../assets/wolf/tile11Cap.png",
        "tile11EyebrowR": "../../assets/wolf/tile11EyebrowR.png",
        "tile11EyebrowL": "../../assets/wolf/tile11EyebrowL.png",
        "tile11EyeL": "../../assets/wolf/tile11EyeL.png",
        "tile11Nose": "../../assets/wolf/tile11Nose.png",
        "tile11EyeR": "../../assets/wolf/tile11EyeR.png",
        "tile11Mouth": "../../assets/wolf/tile11Mouth.png",
        "tile11Head": "../../assets/wolf/tile11Head.png",
        "tile11HeadShadow": "../../assets/wolf/tile11HeadShadow.png",
        "tile11HowlingEpaulet": "../../assets/wolf/tile11HowlingEpaulet.png",
        "tile11HowlingMouth": "../../assets/wolf/tile11HowlingMouth.png",
        "tile11HowlingEyebrow": "../../assets/wolf/tile11HowlingEyebrow.png",
        "tile11HowlingHead": "../../assets/wolf/tile11HowlingHead.png",
        "tile11HowlingPaw": "../../assets/wolf/tile11HowlingPaw.png",
        "tile11HowlingFeathers": "../../assets/wolf/tile11HowlingFeathers.png",
        "tile11FrameFront": "../../assets/wolf/tile11FrameFront.png",
        "tile11BodyNew": "../../assets/wolf/tile11BodyNew.png",
        "winFrameLight": "../../assets/wolf/winFrameLight.png",
        "tile11FrameBack": "../../assets/wolf/tile11FrameBack.png"
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
        const Sprite = animate.Sprite;


        data.lib.tile11Cap = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11Cap"));
                this.addChild(instance1);
            }
        };

        data.lib.marker = class extends Container {
            constructor() {
                super();

            }
        };

        data.lib.tile11EyebrowR = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11EyebrowR"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11EyebrowL = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11EyebrowL"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11EyeL = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11EyeL"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11Nose = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11Nose"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11EyeR = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11EyeR"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11Mouth = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11Mouth"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11Head = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11Head"));
                this.addChild(instance1);
            }
        };

        data.lib.headShadow = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HeadShadow"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11HowlingEpaulet = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HowlingEpaulet"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11HowlingMouth = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HowlingMouth"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11HowlingEyebrow = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HowlingEyebrow"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11HowlingHead = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HowlingHead"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11HowlingPaw = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HowlingPaw"));
                this.addChild(instance1);
            }
        };

        data.lib.tile11HowlingFeathers = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11HowlingFeathers"));
                this.addChild(instance1);
            }
        };

        const Graphic1 = class extends MovieClip {
            constructor(mode) {
                super({ mode: mode, duration: 169, loop: false });
                const instance1 = new Sprite(data.getTexture("tile11FrameFront"))
                    .setTransform(-107, -91.5);
                this.addTimedChild(instance1);
            }
        };

        data.lib.tile11Body = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11BodyNew"));
                this.addChild(instance1);
            }
        };

        data.lib.winFrameLight = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("winFrameLight"));
                this.addChild(instance1);
            }
        };

        data.lib.frameBack = class extends Container {
            constructor() {
                super();
                const instance1 = new Sprite(data.getTexture("tile11FrameBack"));
                this.addChild(instance1);
            }
        };

        data.lib.wolfTile = class extends MovieClip {
            constructor() {
                super({
                    duration: 169,
                    labels: {
                        show: 0,
                        howl: 44,
                        hide: 104
                    }
                });
                const instance16 = new data.lib.frameBack();
                const instance17 = new data.lib.winFrameLight();
                const instance31 = new data.lib.winFrameLight();
                const instance15 = new data.lib.tile11Body();
                const instance14 = new Graphic1(MovieClip.SYNCHED);
                const instance13 = new data.lib.tile11HowlingEpaulet();
                const instance22 = new data.lib.tile11HowlingFeathers();
                const instance21 = new data.lib.tile11HowlingEpaulet();
                const instance12 = new data.lib.tile11HowlingPaw();
                const instance11 = new data.lib.tile11HowlingPaw();
                const instance10 = new data.lib.tile11HowlingEpaulet();
                const instance9 = new data.lib.headShadow();
                const instance8 = new data.lib.tile11Head();
                const instance7 = new data.lib.tile11Mouth();
                const instance6 = new data.lib.tile11EyeR();
                const instance5 = new data.lib.tile11Nose();
                const instance4 = new data.lib.tile11EyeL();
                const instance3 = new data.lib.tile11EyebrowL();
                const instance2 = new data.lib.tile11EyebrowR();
                const instance20 = new data.lib.tile11HowlingHead();
                const instance19 = new data.lib.tile11HowlingEyebrow();
                const instance18 = new data.lib.tile11HowlingMouth();
                const instance30 = new data.lib.tile11HowlingEpaulet();
                const instance29 = new data.lib.tile11Head();
                const instance28 = new data.lib.tile11Mouth();
                const instance27 = new data.lib.tile11EyeR();
                const instance26 = new data.lib.tile11Nose();
                const instance25 = new data.lib.tile11EyeL();
                const instance24 = new data.lib.tile11EyebrowL();
                const instance23 = new data.lib.tile11EyebrowR();
                const instance1 = new data.lib.marker();
                this[instance1.name = "bombCreationMarker"] = instance1;
                const instance32 = new data.lib.tile11Cap();
                this.addTimedChild(instance16, 0, 147, {
                        "0": {
                            x: 1.6,
                            y: 6.15,
                            sx: 1.054,
                            sy: 1.074
                        },
                        "14": {
                            tw: {
                                d: 13,
                                p: {
                                    x: 6,
                                    y: 11,
                                    sx: 1,
                                    sy: 1
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    y: 9.5,
                                    sy: 1.041
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 40,
                                p: {
                                    y: 11,
                                    sy: 1
                                }
                            }
                        }
                    })
                    .addTimedChild(instance17, 1, 39, {
                        "1": {
                            x: 4.4,
                            y: 8.25,
                            sx: 0.544,
                            sy: 0.544,
                            r: 0,
                            a: 0,
                            tw: {
                                d: 10,
                                p: {
                                    x: -4.6,
                                    y: -136.35,
                                    sx: 1.188,
                                    sy: 1.188,
                                    r: 0.422,
                                    a: 1
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "11": {
                            tw: {
                                d: 8,
                                p: {
                                    x: 79.7,
                                    y: -127.5,
                                    sx: 1.061,
                                    sy: 1.061,
                                    r: 0.785
                                }
                            }
                        },
                        "20": {
                            x: 80.15,
                            y: -89.85,
                            sx: 0.873,
                            sy: 0.873,
                            tw: {
                                d: 19,
                                p: {
                                    x: 81.2,
                                    y: 18.6,
                                    sx: 0.329,
                                    sy: 0.329,
                                    r: 0.785
                                },
                                e: {
                                    n: "classic",
                                    s: 99
                                }
                            }
                        }
                    })
                    .addTimedChild(instance31, 104, 37, {
                        "104": {
                            x: 4.4,
                            y: 8.25,
                            sx: 0.544,
                            sy: 0.544,
                            r: 0,
                            a: 0,
                            tw: {
                                d: 15,
                                p: {
                                    x: -4.6,
                                    y: -136.35,
                                    sx: 1.188,
                                    sy: 1.188,
                                    r: 0.422
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 21,
                                p: {
                                    x: 127.75,
                                    y: 37.25,
                                    sx: 0.329,
                                    sy: 0.329,
                                    r: 1.571,
                                    a: 0
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance15, 0, 131, {
                        "0": {
                            x: -16,
                            y: 55
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 70,
                                    sy: 0.872
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 55,
                                    sy: 1
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 7,
                                p: {
                                    x: -37.35,
                                    y: 0.05,
                                    sy: 1.488,
                                    kx: 0.155
                                }
                            }
                        },
                        "24": {
                            tw: {
                                d: 19,
                                p: {
                                    x: -33.65,
                                    y: 10,
                                    sx: 0.995,
                                    sy: 1.4,
                                    kx: 0.149
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    x: -37.35,
                                    y: 0.05,
                                    sx: 1,
                                    sy: 1.488,
                                    kx: 0.155
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 31,
                                p: {
                                    x: -34.75,
                                    y: 10,
                                    sy: 1.4,
                                    kx: 0.149
                                }
                            }
                        },
                        "98": {
                            tw: {
                                d: 6,
                                p: {
                                    x: -16,
                                    y: 55,
                                    sy: 1,
                                    kx: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "104": {
                            tw: {
                                d: 15,
                                p: {
                                    y: 27.85,
                                    sy: 1.232
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 34.6,
                                    y: 72.45,
                                    sx: 0.643,
                                    sy: 0.856,
                                    r: -0.262
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        }
                    })
                    .addTimedChild(instance14, 0, 169, {
                        "0": {
                            x: 85,
                            y: 85,
                            sx: 1.007,
                            sy: 1.006,
                            r: -0.004
                        },
                        "14": {
                            tw: {
                                d: 13,
                                p: {
                                    y: 85.25,
                                    sx: 1,
                                    sy: 1.036,
                                    r: 0
                                }
                            }
                        },
                        "27": {
                            tw: {
                                d: 16,
                                p: {
                                    y: 84.5,
                                    sy: 1
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    y: 85.25,
                                    sy: 1.036
                                },
                                e: {
                                    n: "classic",
                                    s: 99
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 41,
                                p: {
                                    y: 84.5,
                                    sy: 1
                                }
                            }
                        },
                        "132": {
                            tw: {
                                d: 8,
                                p: {
                                    y: 98.5
                                }
                            }
                        },
                        "140": {
                            tw: {
                                d: 7,
                                p: {
                                    y: 84.5
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 7,
                                p: {
                                    sx: 1,
                                    sy: 1,
                                    r: -0.087
                                }
                            }
                        },
                        "154": {
                            tw: {
                                d: 5,
                                p: {
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "159": {
                            tw: {
                                d: 4,
                                p: {
                                    sx: 1,
                                    sy: 1,
                                    r: 0.035
                                }
                            }
                        },
                        "163": {
                            tw: {
                                d: 4,
                                p: {
                                    y: 85,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    })
                    .addTimedChild(instance13, 0, 131, {
                        "0": {
                            x: 42,
                            y: 36.3,
                            sx: 0.75,
                            sy: 0.844,
                            kx: 0.262,
                            ky: 2.883
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 46.3
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 7,
                                p: {
                                    y: 36.3
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "14": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 23
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    x: 40.95,
                                    y: 25.05,
                                    sx: 0.761,
                                    sy: 0.859,
                                    kx: 0.262,
                                    ky: 2.884
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 31,
                                p: {
                                    x: 42,
                                    y: 23,
                                    sx: 0.75,
                                    sy: 0.844,
                                    kx: 0.262,
                                    ky: 2.883
                                }
                            }
                        },
                        "103": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 47.05,
                                    y: 27.5,
                                    sx: 0.786,
                                    sy: 0.579,
                                    kx: 0.524,
                                    ky: 2.621
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 91.25,
                                    y: 48.1,
                                    sx: 0.75,
                                    sy: 0.554
                                }
                            }
                        }
                    })
                    .addTimedChild(instance22, 24, 75, {
                        "24": {
                            x: 142.45,
                            y: 5.95,
                            sx: 1.071,
                            r: 0.187,
                            tw: {
                                d: 19,
                                p: {
                                    x: 135,
                                    y: -2,
                                    sx: 1,
                                    r: 0
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    x: 145.85,
                                    y: 6.95,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.128
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 31,
                                p: {
                                    x: 135,
                                    y: -2,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "94": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 143.95,
                                    y: 3.4,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.182
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance21, 24, 75, {
                        "24": {
                            x: 106,
                            y: 29,
                            sx: 0.998,
                            sy: 0.997,
                            kx: -0.262,
                            ky: 0.261
                        },
                        "44": {
                            x: 106.296,
                            y: 29.37
                        },
                        "45": {
                            x: 106.494,
                            y: 29.641
                        },
                        "46": {
                            x: 106.693,
                            y: 29.963
                        },
                        "47": {
                            x: 106.893,
                            y: 30.235,
                            ky: 0.26
                        },
                        "48": {
                            x: 107.043,
                            y: 30.462
                        },
                        "49": {
                            x: 107.291,
                            y: 30.738
                        },
                        "50": {
                            x: 107.439,
                            y: 30.915
                        },
                        "51": {
                            x: 107.589,
                            y: 31.097
                        },
                        "52": {
                            x: 107.689,
                            y: 31.28
                        },
                        "53": {
                            x: 107.838,
                            y: 31.463,
                            ky: 0.259
                        },
                        "54": {
                            x: 107.938,
                            y: 31.597
                        },
                        "55": {
                            x: 108.088,
                            y: 31.733,
                            sy: 0.996
                        },
                        "56": {
                            x: 108.186,
                            y: 31.872
                        },
                        "57": {
                            x: 108.287,
                            y: 31.961
                        },
                        "58": {
                            x: 108.336,
                            y: 32.003
                        },
                        "59": {
                            x: 108.386,
                            y: 32.145
                        },
                        "60": {
                            x: 108.436,
                            y: 32.19
                        },
                        "61": {
                            x: 108.487,
                            y: 32.184
                        },
                        "62": {
                            x: 108.486,
                            y: 32.232
                        },
                        "63": {
                            x: 108.45,
                            y: 32.15
                        },
                        "64": {
                            x: 108.347,
                            y: 32.109
                        },
                        "65": {
                            x: 108.297,
                            y: 31.97
                        },
                        "66": {
                            x: 108.198,
                            y: 31.88
                        },
                        "67": {
                            x: 108.197,
                            y: 31.791
                        },
                        "68": {
                            x: 108.099,
                            y: 31.702
                        },
                        "69": {
                            x: 108.049,
                            y: 31.563
                        },
                        "70": {
                            x: 107.949,
                            y: 31.473,
                            sy: 0.997
                        },
                        "71": {
                            x: 107.799,
                            y: 31.385
                        },
                        "72": {
                            x: 107.75,
                            y: 31.295
                        },
                        "73": {
                            x: 107.651,
                            y: 31.204,
                            ky: 0.26
                        },
                        "74": {
                            x: 107.602,
                            y: 31.117
                        },
                        "75": {
                            x: 107.5,
                            y: 30.977
                        },
                        "76": {
                            x: 107.402,
                            y: 30.887
                        },
                        "77": {
                            x: 107.352,
                            y: 30.797
                        },
                        "78": {
                            x: 107.253,
                            y: 30.71
                        },
                        "79": {
                            x: 107.201,
                            y: 30.57
                        },
                        "80": {
                            x: 107.152,
                            y: 30.479
                        },
                        "81": {
                            x: 107.104,
                            y: 30.391
                        },
                        "82": {
                            x: 106.952,
                            y: 30.251
                        },
                        "83": {
                            x: 106.852,
                            y: 30.162
                        },
                        "84": {
                            x: 106.802,
                            y: 30.073,
                            ky: 0.261
                        },
                        "85": {
                            x: 106.703,
                            y: 29.932
                        },
                        "86": {
                            x: 106.653,
                            y: 29.845
                        },
                        "87": {
                            x: 106.556,
                            y: 29.804
                        },
                        "88": {
                            x: 106.454,
                            y: 29.716
                        },
                        "89": {
                            x: 106.405,
                            y: 29.575
                        },
                        "90": {
                            x: 106.305,
                            y: 29.487
                        },
                        "91": {
                            x: 106.256,
                            y: 29.397
                        },
                        "92": {
                            x: 106.154,
                            y: 29.307
                        },
                        "93": {
                            x: 106.106,
                            y: 29.17
                        },
                        "94": {
                            x: 106,
                            y: 29
                        }
                    })
                    .addTimedChild(instance12, 0, 131, {
                        "0": {
                            x: 95,
                            y: 123,
                            sx: 0.926,
                            sy: 0.926
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 125,
                                    sy: 0.87
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 8,
                                p: {
                                    y: 123,
                                    sy: 0.926
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "15": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 88,
                                    y: 113,
                                    sx: 1.136,
                                    sy: 1.241
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        },
                        "24": {
                            tw: {
                                d: 19,
                                p: {
                                    sx: 1,
                                    sy: 1
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    y: 113.05,
                                    sx: 1.068,
                                    sy: 1.12
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 31,
                                p: {
                                    y: 113,
                                    sx: 1,
                                    sy: 1
                                }
                            }
                        },
                        "94": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 95,
                                    y: 123,
                                    sx: 0.926,
                                    sy: 0.926
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "103": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 90.5,
                                    y: 120,
                                    sx: 1.037,
                                    sy: 1.037
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 113.05,
                                    y: 129.25,
                                    sx: 0.666,
                                    sy: 0.666
                                }
                            }
                        }
                    })
                    .addTimedChild(instance11, 0, 131, {
                        "0": {
                            x: 67.5,
                            y: 128.05,
                            sx: 0.812,
                            sy: 0.812,
                            ky: 3.142
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 129.75,
                                    sy: 0.763
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 8,
                                p: {
                                    y: 128.05,
                                    sy: 0.812
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "15": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 75,
                                    y: 116,
                                    sx: 1.049,
                                    sy: 1.185
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        },
                        "24": {
                            tw: {
                                d: 19,
                                p: {
                                    sx: 0.96,
                                    sy: 0.96
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    y: 116.05,
                                    sx: 1.005,
                                    sy: 1.072
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 31,
                                p: {
                                    y: 116,
                                    sx: 0.96,
                                    sy: 0.96
                                }
                            }
                        },
                        "94": {
                            tw: {
                                d: 9,
                                p: {
                                    x: 67.5,
                                    y: 128.05,
                                    sx: 0.812,
                                    sy: 0.812
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "103": {
                            tw: {
                                d: 16,
                                p: {
                                    x: 70,
                                    y: 126.4,
                                    sx: 0.874,
                                    sy: 0.874
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 63.05,
                                    y: 129.25,
                                    sx: 0.567,
                                    sy: 0.57
                                }
                            }
                        }
                    })
                    .addTimedChild(instance10, 0, 24, {
                        "0": {
                            x: 96,
                            y: 41.85,
                            sx: 0.998,
                            sy: 0.997,
                            kx: 0,
                            ky: 0,
                            r: 0
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 51.85
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 7,
                                p: {
                                    y: 41.85
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "15": {
                            x: 96.161,
                            y: 41.705,
                            kx: -0.004,
                            ky: 0.003
                        },
                        "16": {
                            x: 96.497,
                            y: 41.233,
                            kx: 0,
                            ky: 0,
                            r: 0.013
                        },
                        "17": {
                            x: 97.039,
                            y: 40.37,
                            r: 0.029
                        },
                        "18": {
                            x: 97.805,
                            y: 39.152,
                            kx: -0.052,
                            ky: 0.051,
                            r: 0
                        },
                        "19": {
                            x: 98.856,
                            y: 37.657,
                            kx: -0.081,
                            ky: 0.08
                        },
                        "20": {
                            x: 100.14,
                            y: 35.907,
                            kx: -0.117,
                            ky: 0.116
                        },
                        "21": {
                            x: 101.798,
                            y: 33.861,
                            kx: -0.159,
                            ky: 0.158
                        },
                        "22": {
                            x: 103.707,
                            y: 31.569,
                            kx: -0.207,
                            ky: 0.206
                        },
                        "23": {
                            x: 106,
                            y: 29,
                            kx: -0.262,
                            ky: 0.261
                        }
                    })
                    .addTimedChild(instance9, 0, 24, {
                        "0": {
                            x: 45,
                            y: 48.5
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 58.5
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 48.5
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 42.35,
                                    y: -4.7,
                                    r: 0.699
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance8, 0, 24, {
                        "0": {
                            x: -38,
                            y: -98
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: -88
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: -98
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 80.95,
                                    y: -170.1,
                                    r: 0.74
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance7, 0, 24, {
                        "0": {
                            x: 64,
                            y: 71,
                            r: -0.75
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 81
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 71
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 58.8,
                                    y: 23.05,
                                    sx: 0.503,
                                    sy: 0.613,
                                    r: 0.349
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance6, 0, 24, {
                        "0": {
                            x: 28,
                            y: 24
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 34
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 24
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 47.4,
                                    y: -35.4,
                                    r: 0.74
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance5, 0, 24, {
                        "0": {
                            x: -23,
                            y: 71,
                            r: -0.506
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 81
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 71
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 20.2,
                                    y: -73.8,
                                    sx: 1,
                                    sy: 1.075,
                                    kx: -1.12,
                                    ky: 0.743
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance4, 0, 24, {
                        "0": {
                            x: 77,
                            y: 20
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 30
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 20
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 86.3,
                                    y: -5.35,
                                    r: 0.74
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance3, 0, 24, {
                        "0": {
                            x: 73,
                            y: 21,
                            r: -0.506
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 34
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 21
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 82.6,
                                    y: -7.3,
                                    sy: 1,
                                    r: 0.234
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance2, 0, 24, {
                        "0": {
                            x: 30,
                            y: 6,
                            r: 0.506
                        },
                        "1": {
                            tw: {
                                d: 6,
                                p: {
                                    y: 19
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "7": {
                            tw: {
                                d: 10,
                                p: {
                                    y: 6
                                },
                                e: {
                                    n: "classic",
                                    s: -50
                                }
                            }
                        },
                        "17": {
                            tw: {
                                d: 6,
                                p: {
                                    x: 61,
                                    y: -50.35,
                                    sx: 1,
                                    sy: 1,
                                    r: 1.246
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance20, 24, 75, {
                        "24": {
                            x: 47.2,
                            y: -169.85,
                            sx: 1.06,
                            sy: 1.061,
                            kx: 0,
                            ky: 0,
                            r: 0.243,
                            tw: {
                                d: 19,
                                p: {
                                    x: -3,
                                    y: -149,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "44": {
                            x: -0.484,
                            y: -150.677,
                            sy: 1.005,
                            kx: -0.011,
                            ky: 0.012
                        },
                        "45": {
                            x: 1.865,
                            y: -152.25,
                            sy: 1.01,
                            kx: -0.022,
                            ky: 0.023
                        },
                        "46": {
                            x: 4.089,
                            y: -153.672,
                            sy: 1.014,
                            kx: -0.032,
                            ky: 0.034
                        },
                        "47": {
                            x: 6.293,
                            y: -154.986,
                            sy: 1.019,
                            kx: -0.041,
                            ky: 0.044
                        },
                        "48": {
                            x: 8.365,
                            y: -156.304,
                            sy: 1.023,
                            kx: -0.05,
                            ky: 0.054
                        },
                        "49": {
                            x: 10.26,
                            y: -157.472,
                            sy: 1.026,
                            kx: -0.058,
                            ky: 0.063
                        },
                        "50": {
                            x: 11.973,
                            y: -158.545,
                            sy: 1.03,
                            kx: -0.066,
                            ky: 0.071
                        },
                        "51": {
                            x: 13.655,
                            y: -159.572,
                            sx: 1.001,
                            sy: 1.033,
                            kx: -0.073,
                            ky: 0.079
                        },
                        "52": {
                            x: 15.248,
                            y: -160.51,
                            sy: 1.036,
                            kx: -0.08,
                            ky: 0.086
                        },
                        "53": {
                            x: 16.659,
                            y: -161.259,
                            sy: 1.039,
                            kx: -0.086,
                            ky: 0.092
                        },
                        "54": {
                            x: 17.979,
                            y: -162.017,
                            sy: 1.041,
                            kx: -0.091,
                            ky: 0.098
                        },
                        "55": {
                            x: 19.163,
                            y: -162.69,
                            sy: 1.044,
                            kx: -0.096,
                            ky: 0.104
                        },
                        "56": {
                            x: 20.155,
                            y: -163.274,
                            sy: 1.046,
                            kx: -0.1,
                            ky: 0.108
                        },
                        "57": {
                            x: 21.061,
                            y: -163.782,
                            sy: 1.047,
                            kx: -0.104,
                            ky: 0.112
                        },
                        "58": {
                            x: 21.869,
                            y: -164.199,
                            sy: 1.049,
                            kx: -0.107,
                            ky: 0.116
                        },
                        "59": {
                            x: 22.441,
                            y: -164.539,
                            sy: 1.05,
                            kx: -0.11,
                            ky: 0.118
                        },
                        "60": {
                            x: 22.916,
                            y: -164.843,
                            sy: 1.051,
                            kx: -0.112,
                            ky: 0.121
                        },
                        "61": {
                            x: 23.251,
                            y: -164.97,
                            kx: -0.113,
                            ky: 0.122
                        },
                        "62": {
                            x: 23.49,
                            y: -165.112,
                            sy: 1.052,
                            kx: -0.114,
                            ky: 0.123
                        },
                        "63": {
                            x: 23.45,
                            y: -165.05,
                            tw: {
                                d: 31,
                                p: {
                                    x: -3,
                                    y: -149,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "95": {
                            x: 13.223,
                            y: -157.014,
                            kx: 0,
                            ky: 0,
                            r: 0.08
                        },
                        "96": {
                            x: 25.174,
                            y: -162.219,
                            r: 0.137
                        },
                        "97": {
                            x: 32.471,
                            y: -165.191,
                            r: 0.171
                        },
                        "98": {
                            x: 34.9,
                            y: -166.2,
                            r: 0.182
                        }
                    })
                    .addTimedChild(instance19, 24, 75, {
                        "24": {
                            x: 110.85,
                            y: -37.55,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 0.383,
                            tw: {
                                d: 19,
                                p: {
                                    x: 88,
                                    y: -36,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "44": {
                            x: 89.099,
                            y: -36.467,
                            sy: 1.002,
                            kx: -0.018,
                            ky: 0.019
                        },
                        "45": {
                            x: 90.038,
                            y: -36.856,
                            sy: 1.003,
                            kx: -0.035,
                            ky: 0.037
                        },
                        "46": {
                            x: 90.969,
                            y: -37.171,
                            sx: 1.001,
                            sy: 1.005,
                            kx: -0.051,
                            ky: 0.055
                        },
                        "47": {
                            x: 91.948,
                            y: -37.512,
                            sy: 1.007,
                            kx: -0.066,
                            ky: 0.071
                        },
                        "48": {
                            x: 92.73,
                            y: -37.881,
                            sy: 1.008,
                            kx: -0.08,
                            ky: 0.086
                        },
                        "49": {
                            x: 93.513,
                            y: -38.131,
                            sy: 1.009,
                            kx: -0.094,
                            ky: 0.101
                        },
                        "50": {
                            x: 94.256,
                            y: -38.464,
                            sy: 1.011,
                            kx: -0.106,
                            ky: 0.114
                        },
                        "51": {
                            x: 94.959,
                            y: -38.627,
                            sx: 1.002,
                            sy: 1.012,
                            kx: -0.118,
                            ky: 0.126
                        },
                        "52": {
                            x: 95.625,
                            y: -38.927,
                            sy: 1.013,
                            kx: -0.128,
                            ky: 0.138
                        },
                        "53": {
                            x: 96.16,
                            y: -39.058,
                            sy: 1.014,
                            kx: -0.138,
                            ky: 0.148
                        },
                        "54": {
                            x: 96.716,
                            y: -39.278,
                            sy: 1.015,
                            kx: -0.146,
                            ky: 0.157
                        },
                        "55": {
                            x: 97.193,
                            y: -39.382,
                            kx: -0.154,
                            ky: 0.166
                        },
                        "56": {
                            x: 97.643,
                            y: -39.573,
                            sy: 1.016,
                            kx: -0.161,
                            ky: 0.173
                        },
                        "57": {
                            x: 97.919,
                            y: -39.701,
                            sy: 1.017,
                            kx: -0.167,
                            ky: 0.179
                        },
                        "58": {
                            x: 98.275,
                            y: -39.865,
                            kx: -0.172,
                            ky: 0.185
                        },
                        "59": {
                            x: 98.508,
                            y: -39.868,
                            sy: 1.018,
                            kx: -0.176,
                            ky: 0.189
                        },
                        "60": {
                            x: 98.722,
                            y: -39.909,
                            kx: -0.179,
                            ky: 0.193
                        },
                        "61": {
                            x: 98.866,
                            y: -39.989,
                            kx: -0.182,
                            ky: 0.195
                        },
                        "62": {
                            x: 98.994,
                            y: -40.005,
                            kx: -0.183,
                            ky: 0.197
                        },
                        "63": {
                            x: 98.9,
                            y: -39.95,
                            kx: -0.184,
                            tw: {
                                d: 31,
                                p: {
                                    x: 88,
                                    y: -36,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "95": {
                            x: 94.886,
                            y: -37.229,
                            kx: 0,
                            ky: 0,
                            r: 0.08
                        },
                        "96": {
                            x: 99.833,
                            y: -37.977,
                            r: 0.137
                        },
                        "97": {
                            x: 102.888,
                            y: -38.467,
                            r: 0.171
                        },
                        "98": {
                            x: 103.9,
                            y: -38.55,
                            r: 0.182
                        }
                    })
                    .addTimedChild(instance18, 24, 75, {
                        "24": {
                            x: 39.1,
                            y: -105.75,
                            sx: 1.996,
                            sy: 1,
                            r: 0.243,
                            tw: {
                                d: 19,
                                p: {
                                    x: 12,
                                    y: -86,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "43": {
                            tw: {
                                d: 20,
                                p: {
                                    x: 33.6,
                                    y: -99.9,
                                    sx: 1.072,
                                    sy: 1.137,
                                    r: 0.119
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "63": {
                            tw: {
                                d: 31,
                                p: {
                                    x: 12,
                                    y: -86,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "94": {
                            tw: {
                                d: 4,
                                p: {
                                    x: 38.25,
                                    y: -101.55,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.182
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance30, 99, 32, {
                        "99": {
                            x: 106,
                            y: 29,
                            sx: 0.998,
                            sy: 0.997,
                            kx: -0.262,
                            ky: 0.261,
                            r: 0,
                            tw: {
                                d: 5,
                                p: {
                                    x: 96,
                                    y: 39.05,
                                    sx: 0.998,
                                    sy: 0.997,
                                    r: 0
                                }
                            }
                        },
                        "105": {
                            x: 95.872,
                            y: 38.922,
                            sx: 1.003,
                            sy: 1.002,
                            kx: 0,
                            ky: 0
                        },
                        "106": {
                            x: 95.648,
                            y: 38.795,
                            sx: 1.007,
                            sy: 1.006
                        },
                        "107": {
                            x: 95.474,
                            y: 38.618,
                            sx: 1.012,
                            sy: 1.01
                        },
                        "108": {
                            x: 95.251,
                            y: 38.491,
                            sx: 1.016,
                            sy: 1.015
                        },
                        "109": {
                            x: 95.077,
                            y: 38.365,
                            sx: 1.021,
                            sy: 1.019
                        },
                        "110": {
                            x: 94.903,
                            y: 38.188,
                            sx: 1.025,
                            sy: 1.024
                        },
                        "111": {
                            x: 94.679,
                            y: 38.061,
                            sx: 1.029,
                            sy: 1.028
                        },
                        "112": {
                            x: 94.506,
                            y: 37.835,
                            sx: 1.034,
                            sy: 1.033
                        },
                        "113": {
                            x: 94.332,
                            y: 37.708,
                            sx: 1.038,
                            sy: 1.037
                        },
                        "114": {
                            x: 94.108,
                            y: 37.631,
                            sx: 1.043,
                            sy: 1.041
                        },
                        "115": {
                            x: 93.933,
                            y: 37.454,
                            sx: 1.047,
                            sy: 1.046
                        },
                        "116": {
                            x: 93.711,
                            y: 37.328,
                            sx: 1.052,
                            sy: 1.05
                        },
                        "117": {
                            x: 93.536,
                            y: 37.201,
                            sx: 1.056,
                            sy: 1.055
                        },
                        "118": {
                            x: 93.363,
                            y: 37.024,
                            sx: 1.06,
                            sy: 1.059
                        },
                        "119": {
                            x: 93.1,
                            y: 36.95,
                            sx: 1.065,
                            sy: 1.064
                        },
                        "120": {
                            x: 96.994,
                            y: 37.791,
                            sx: 1.013,
                            sy: 1.012,
                            kx: -0.024,
                            ky: 0.023
                        },
                        "121": {
                            x: 100.83,
                            y: 38.706,
                            sx: 0.962,
                            sy: 0.961,
                            kx: -0.048,
                            ky: 0.047
                        },
                        "122": {
                            x: 104.567,
                            y: 39.792,
                            sx: 0.911,
                            sy: 0.91,
                            kx: -0.072,
                            ky: 0.07
                        },
                        "123": {
                            x: 108.208,
                            y: 40.953,
                            sx: 0.859,
                            sy: 0.858,
                            kx: -0.096,
                            ky: 0.094
                        },
                        "124": {
                            x: 111.764,
                            y: 42.238,
                            sx: 0.808,
                            sy: 0.807,
                            kx: -0.119,
                            ky: 0.117
                        },
                        "125": {
                            x: 115.295,
                            y: 43.655,
                            sx: 0.757,
                            sy: 0.756,
                            kx: -0.143,
                            ky: 0.141
                        },
                        "126": {
                            x: 118.702,
                            y: 45.105,
                            sx: 0.705,
                            sy: 0.705,
                            kx: -0.167,
                            ky: 0.164
                        },
                        "127": {
                            x: 122.047,
                            y: 46.741,
                            sx: 0.654,
                            sy: 0.653,
                            kx: -0.191,
                            ky: 0.188
                        },
                        "128": {
                            x: 125.387,
                            y: 48.466,
                            sx: 0.602,
                            sy: 0.602,
                            kx: -0.215,
                            ky: 0.212
                        },
                        "129": {
                            x: 128.529,
                            y: 50.284,
                            sx: 0.551,
                            sy: 0.551,
                            kx: -0.238,
                            ky: 0.235
                        },
                        "130": {
                            x: 131.6,
                            y: 52.1,
                            sx: 0.5,
                            sy: 0.5,
                            kx: -0.262,
                            ky: 0.259
                        }
                    })
                    .addTimedChild(instance29, 99, 32, {
                        "99": {
                            x: 80.95,
                            y: -170.1,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 0.74,
                            tw: {
                                d: 5,
                                p: {
                                    x: -38,
                                    y: -98,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "105": {
                            x: -30.718,
                            y: -109.57,
                            sx: 1.017,
                            sy: 1.017,
                            kx: -0.059,
                            ky: 0.06
                        },
                        "106": {
                            x: -23.545,
                            y: -119.551,
                            sx: 1.032,
                            sy: 1.033,
                            kx: 0,
                            ky: 0,
                            r: 0.112
                        },
                        "107": {
                            x: -16.741,
                            y: -128.068,
                            sx: 1.045,
                            sy: 1.046,
                            kx: -0.157,
                            ky: 0.158,
                            r: 0
                        },
                        "108": {
                            x: -10.646,
                            y: -134.942,
                            sx: 1.055,
                            sy: 1.057,
                            kx: -0.195,
                            ky: 0.196
                        },
                        "109": {
                            x: -5.28,
                            y: -140.452,
                            sx: 1.064,
                            sy: 1.066,
                            kx: -0.227,
                            ky: 0.228
                        },
                        "110": {
                            x: -1.099,
                            y: -144.657,
                            sx: 1.071,
                            sy: 1.073,
                            kx: -0.251,
                            ky: 0.252
                        },
                        "111": {
                            x: 2.108,
                            y: -147.607,
                            sx: 1.076,
                            sy: 1.079,
                            kx: -0.268,
                            ky: 0.27
                        },
                        "112": {
                            x: 4.064,
                            y: -149.341,
                            sx: 1.079,
                            sy: 1.082,
                            kx: -0.279,
                            ky: 0.28
                        },
                        "113": {
                            x: 4.65,
                            y: -150,
                            sx: 1.08,
                            sy: 1.083,
                            kx: -0.282,
                            ky: 0.284
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: -12.3,
                                    y: 18,
                                    sx: 0.634,
                                    sy: 0.634,
                                    r: -0.262
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance28, 99, 32, {
                        "99": {
                            x: 58.8,
                            y: 23.05,
                            sx: 0.503,
                            sy: 0.613,
                            kx: 0,
                            ky: 0,
                            r: 0.349,
                            tw: {
                                d: 5,
                                p: {
                                    x: 64,
                                    y: 71,
                                    sx: 1,
                                    sy: 1,
                                    r: -0.75
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "105": {
                            x: 62.275,
                            y: 63.546,
                            sx: 1.027,
                            sy: 1.142,
                            r: -0.608
                        },
                        "106": {
                            x: 61.747,
                            y: 56.421,
                            sx: 1.051,
                            sy: 1.267,
                            r: -0.482
                        },
                        "107": {
                            x: 62.058,
                            y: 49.86,
                            sx: 1.072,
                            sy: 1.376,
                            kx: 0.373,
                            ky: -0.374,
                            r: 0
                        },
                        "108": {
                            x: 62.92,
                            y: 44.256,
                            sx: 1.09,
                            sy: 1.468,
                            kx: 0,
                            ky: 0,
                            r: -0.281
                        },
                        "109": {
                            x: 64.097,
                            y: 39.568,
                            sx: 1.104,
                            sy: 1.543,
                            kx: 0.205,
                            ky: -0.206,
                            r: 0
                        },
                        "110": {
                            x: 65.298,
                            y: 35.911,
                            sx: 1.115,
                            sy: 1.602,
                            kx: 0.146,
                            ky: -0.147
                        },
                        "111": {
                            x: 66.272,
                            y: 33.262,
                            sx: 1.123,
                            sy: 1.644,
                            kx: 0.104,
                            ky: -0.105
                        },
                        "112": {
                            x: 66.911,
                            y: 31.772,
                            sx: 1.128,
                            sy: 1.669,
                            kx: 0.079,
                            ky: -0.08
                        },
                        "113": {
                            x: 67.3,
                            y: 31.3,
                            sx: 1.13,
                            sy: 1.677,
                            kx: 0.071,
                            ky: -0.072,
                            tw: {
                                d: 6,
                                p: {
                                    x: 63.9,
                                    y: 31.55,
                                    sx: 1.234
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 77.95,
                                    y: 104.8,
                                    sx: 0.634,
                                    sy: 0.634,
                                    r: -1.012
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance27, 99, 32, {
                        "99": {
                            x: 47.4,
                            y: -35.4,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 0.74,
                            tw: {
                                d: 5,
                                p: {
                                    x: 28,
                                    y: 24,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "105": {
                            x: 29.575,
                            y: 18.316,
                            sx: 1.017,
                            sy: 1.017,
                            kx: -0.059,
                            ky: 0.06
                        },
                        "106": {
                            x: 31.047,
                            y: 13.209,
                            sx: 1.032,
                            sy: 1.033,
                            kx: 0,
                            ky: 0,
                            r: 0.112
                        },
                        "107": {
                            x: 32.363,
                            y: 8.834,
                            sx: 1.045,
                            sy: 1.046,
                            kx: -0.157,
                            ky: 0.158,
                            r: 0
                        },
                        "108": {
                            x: 33.515,
                            y: 5.147,
                            sx: 1.055,
                            sy: 1.057,
                            kx: -0.195,
                            ky: 0.196
                        },
                        "109": {
                            x: 34.484,
                            y: 2.163,
                            sx: 1.064,
                            sy: 1.066,
                            kx: -0.227,
                            ky: 0.228
                        },
                        "110": {
                            x: 35.199,
                            y: -0.16,
                            sx: 1.071,
                            sy: 1.073,
                            kx: -0.251,
                            ky: 0.252
                        },
                        "111": {
                            x: 35.831,
                            y: -1.764,
                            sx: 1.076,
                            sy: 1.079,
                            kx: -0.268,
                            ky: 0.27
                        },
                        "112": {
                            x: 36.143,
                            y: -2.788,
                            sx: 1.079,
                            sy: 1.082,
                            kx: -0.279,
                            ky: 0.28
                        },
                        "113": {
                            x: 36.25,
                            y: -3.25,
                            sx: 1.08,
                            sy: 1.083,
                            kx: -0.282,
                            ky: 0.284
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 48.2,
                                    y: 81.95,
                                    sx: 0.634,
                                    sy: 0.634,
                                    r: -0.262
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance26, 99, 32, {
                        "99": {
                            x: 20.2,
                            y: -73.8,
                            sy: 1.075,
                            kx: -1.12,
                            ky: 0.743,
                            r: 0
                        },
                        "100": {
                            x: -12.399,
                            y: -31.315,
                            sy: 1.048,
                            kx: -0.534,
                            ky: 0.293
                        },
                        "101": {
                            x: -25.833,
                            y: 11.306,
                            sy: 1.027,
                            kx: -0.079,
                            ky: -0.056
                        },
                        "102": {
                            x: -27.187,
                            y: 44.322,
                            sy: 1.012,
                            kx: 0.246,
                            ky: -0.306
                        },
                        "103": {
                            x: -24.495,
                            y: 64.309,
                            sy: 1.003,
                            kx: 0.441,
                            ky: -0.456
                        },
                        "104": {
                            x: -23,
                            y: 71,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: -0.506,
                            tw: {
                                d: 9,
                                p: {
                                    x: -42,
                                    y: -13.45,
                                    sx: 1.207,
                                    sy: 1.082,
                                    r: 0.116
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 36.85,
                                    y: 133.25,
                                    sx: 0.634,
                                    sy: 0.587,
                                    r: -1.03
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance25, 99, 32, {
                        "99": {
                            x: 86.3,
                            y: -5.35,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 0.74,
                            tw: {
                                d: 5,
                                p: {
                                    x: 77,
                                    y: 20,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "105": {
                            x: 79.202,
                            y: 17.319,
                            sx: 1.017,
                            sy: 1.017,
                            kx: -0.059,
                            ky: 0.06
                        },
                        "106": {
                            x: 81.189,
                            y: 14.958,
                            sx: 1.032,
                            sy: 1.033,
                            kx: 0,
                            ky: 0,
                            r: 0.112
                        },
                        "107": {
                            x: 82.963,
                            y: 12.985,
                            sx: 1.045,
                            sy: 1.046,
                            kx: -0.157,
                            ky: 0.158,
                            r: 0
                        },
                        "108": {
                            x: 84.608,
                            y: 11.228,
                            sx: 1.055,
                            sy: 1.057,
                            kx: -0.195,
                            ky: 0.196
                        },
                        "109": {
                            x: 85.897,
                            y: 9.927,
                            sx: 1.064,
                            sy: 1.066,
                            kx: -0.227,
                            ky: 0.228
                        },
                        "110": {
                            x: 86.945,
                            y: 8.828,
                            sx: 1.071,
                            sy: 1.073,
                            kx: -0.251,
                            ky: 0.252
                        },
                        "111": {
                            x: 87.751,
                            y: 8.077,
                            sx: 1.076,
                            sy: 1.079,
                            kx: -0.268,
                            ky: 0.27
                        },
                        "112": {
                            x: 88.249,
                            y: 7.676,
                            sx: 1.079,
                            sy: 1.082,
                            kx: -0.279,
                            ky: 0.28
                        },
                        "113": {
                            x: 88.3,
                            y: 7.4,
                            sx: 1.08,
                            sy: 1.083,
                            kx: -0.282,
                            ky: 0.284
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 77.5,
                                    y: 71.4,
                                    sx: 0.634,
                                    sy: 0.634,
                                    r: -0.262
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance24, 99, 32, {
                        "99": {
                            x: 82.6,
                            y: -7.3,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 0.234,
                            tw: {
                                d: 5,
                                p: {
                                    x: 73,
                                    y: 21,
                                    sy: 1,
                                    r: -0.506
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "105": {
                            x: 75.081,
                            y: 17.294,
                            sx: 1.017,
                            sy: 1.017,
                            r: -0.447
                        },
                        "106": {
                            x: 76.974,
                            y: 13.924,
                            sx: 1.032,
                            sy: 1.033,
                            kx: 0.394,
                            ky: -0.395,
                            r: 0
                        },
                        "107": {
                            x: 78.722,
                            y: 10.964,
                            sx: 1.044,
                            sy: 1.046,
                            kx: 0,
                            ky: 0,
                            r: -0.349
                        },
                        "108": {
                            x: 80.211,
                            y: 8.346,
                            sx: 1.055,
                            sy: 1.057,
                            kx: 0.31,
                            ky: -0.311,
                            r: 0
                        },
                        "109": {
                            x: 81.51,
                            y: 6.159,
                            sx: 1.064,
                            sy: 1.066,
                            kx: 0,
                            ky: 0,
                            r: -0.279
                        },
                        "110": {
                            x: 82.527,
                            y: 4.451,
                            sx: 1.071,
                            sy: 1.073,
                            kx: 0.254,
                            ky: -0.255,
                            r: 0
                        },
                        "111": {
                            x: 83.314,
                            y: 3.221,
                            sx: 1.076,
                            sy: 1.079,
                            kx: 0.237,
                            ky: -0.238
                        },
                        "112": {
                            x: 83.751,
                            y: 2.473,
                            sx: 1.079,
                            sy: 1.082,
                            kx: 0.226,
                            ky: -0.227
                        },
                        "113": {
                            x: 83.9,
                            y: 2.3,
                            sx: 1.08,
                            sy: 1.083,
                            kx: 0.223,
                            ky: -0.224,
                            tw: {
                                d: 6,
                                p: {
                                    y: -2.7
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 75.25,
                                    y: 72.65,
                                    sx: 0.634,
                                    sy: 0.634,
                                    r: -0.768
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance23, 99, 32, {
                        "99": {
                            x: 61,
                            y: -50.35,
                            sx: 1,
                            sy: 1,
                            kx: 0,
                            ky: 0,
                            r: 1.246,
                            tw: {
                                d: 5,
                                p: {
                                    x: 30,
                                    y: 6,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.506
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "105": {
                            x: 32.939,
                            y: -0.791,
                            sx: 1.017,
                            sy: 1.017,
                            kx: -0.565,
                            ky: 0.566,
                            r: 0
                        },
                        "106": {
                            x: 35.416,
                            y: -6.831,
                            sx: 1.032,
                            sy: 1.032,
                            kx: -0.617,
                            ky: 0.618
                        },
                        "107": {
                            x: 37.667,
                            y: -12.034,
                            sx: 1.045,
                            sy: 1.045,
                            kx: -0.663,
                            ky: 0.664
                        },
                        "108": {
                            x: 39.575,
                            y: -16.358,
                            sx: 1.056,
                            sy: 1.056,
                            kx: -0.701,
                            ky: 0.703
                        },
                        "109": {
                            x: 41.119,
                            y: -19.91,
                            sx: 1.065,
                            sy: 1.065,
                            kx: -0.732,
                            ky: 0.734
                        },
                        "110": {
                            x: 42.321,
                            y: -22.693,
                            sx: 1.072,
                            sy: 1.072,
                            kx: -0.756,
                            ky: 0.759
                        },
                        "111": {
                            x: 43.153,
                            y: -24.709,
                            sx: 1.077,
                            sy: 1.077,
                            kx: -0.774,
                            ky: 0.776
                        },
                        "112": {
                            x: 43.675,
                            y: -25.908,
                            sx: 1.08,
                            sy: 1.08,
                            kx: -0.784,
                            ky: 0.787
                        },
                        "113": {
                            x: 43.7,
                            y: -26.3,
                            sx: 1.081,
                            sy: 1.081,
                            kx: -0.788,
                            ky: 0.79,
                            tw: {
                                d: 6,
                                p: {
                                    y: -31.3
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "119": {
                            tw: {
                                d: 11,
                                p: {
                                    x: 46.4,
                                    y: 70.6,
                                    sx: 0.634,
                                    sy: 0.634,
                                    r: 0.244
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        }
                    })
                    .addTimedChild(instance1, 0, 168, {
                        "0": {
                            x: 87,
                            y: 77
                        }
                    })
                    .addTimedChild(instance32, 125, 44, {
                        "125": {
                            x: -51.1,
                            y: -9.8,
                            sx: 1.542,
                            sy: 1.468,
                            r: -0.087,
                            tw: {
                                d: 7,
                                p: {
                                    x: -7.8,
                                    y: 18.8,
                                    sx: 1.05,
                                    sy: 1
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        },
                        "132": {
                            tw: {
                                d: 8,
                                p: {
                                    x: 4,
                                    y: 19.95,
                                    sy: 1,
                                    r: 0.084
                                },
                                e: {
                                    n: "classic",
                                    s: 100
                                }
                            }
                        },
                        "140": {
                            tw: {
                                d: 7,
                                p: {
                                    x: 2,
                                    y: 11,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                },
                                e: {
                                    n: "classic",
                                    s: -100
                                }
                            }
                        },
                        "147": {
                            tw: {
                                d: 7,
                                p: {
                                    x: -3.75,
                                    y: 18.45,
                                    sx: 1,
                                    sy: 1,
                                    r: -0.087
                                }
                            }
                        },
                        "154": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 2,
                                    y: 11,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        },
                        "159": {
                            tw: {
                                d: 5,
                                p: {
                                    x: 4.45,
                                    y: 8.15,
                                    sx: 1,
                                    sy: 1,
                                    r: 0.035
                                }
                            }
                        },
                        "164": {
                            tw: {
                                d: 3,
                                p: {
                                    x: 2,
                                    y: 11,
                                    sx: 1,
                                    sy: 1,
                                    r: 0
                                }
                            }
                        }
                    });
            }
        };

        data.lib.Wolf = class extends MovieClip {
            constructor() {
                super({
                    duration: 1,
                    framerate: 60
                });
                const instance1 = new data.lib.wolfTile();
                this.addChild(instance1);
            }
        };
        data.stage = data.lib.Wolf;
    }
};


export default data;