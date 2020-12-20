/* eslint-disable */
window.addEventListener('load', function () {
    var body = document.getElementsByTagName("body")[0];
    var canvas = document.createElement("canvas");
    var container = document.createElement("div");

    container.style.position = "fixed";
    container.style.zIndex = -1;
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.appendChild(canvas);

    body.appendChild(container);

    var flower = new Image()
    flower.src = 'data:image/png;base64,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';
    var ctx = canvas.getContext("2d");
    var W = container.clientWidth || container.innerWidth;
    var H = container.clientHeight || container.innerHeight;
    canvas.width = W;
    canvas.height = H;

    window.addEventListener('resize', function() {
        W = container.clientWidth || container.innerWidth;
        H = container.clientHeight || container.innerHeight;
        canvas.width = W;
        canvas.height = H;
    });

    // this.console.log(canvas.clientWidth, canvas.clientHeight)
    var mp = 50;
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 0.125 + 0.05,
            d: Math.random() * mp
        })
    }
    function draw() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            var imgScale = p.r * 0.8;
            ctx.drawImage(flower, 0, 0, flower.width, flower.height, p.x, p.y, flower.width * imgScale, flower.height * imgScale);
        }
        update();
    }

    var angle = 0;

    function update() {
        angle += 0.01;
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0) {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d
                    };
                } else {
                    if (Math.sin(angle) > 0) {
                        particles[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d
                        };
                    } else {
                        particles[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d
                        };
                    }
                }
            }
        }
    }
    setInterval(draw, 33);
});
