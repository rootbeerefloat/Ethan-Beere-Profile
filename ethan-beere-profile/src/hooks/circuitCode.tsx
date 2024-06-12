// src/hooks/useHelloWorld.ts
import { useEffect } from 'react';

const pipeWidth = 20;
const minSpacing = 20;
const bgColor = '#0d0f2b';
const pipeColor = '#474b85';
const sparkColor = '#d3d5f5';
const sparkRadius = 6;
const animationSpeed = 5;
const clear = false;

function getNode(x: number, y: number, xSpacing: number, ySpacing: number) {
    return {
        x: x * (pipeWidth + xSpacing + xSpacing),
        y: y * (pipeWidth + ySpacing + ySpacing)
    };
}

function drawVerticalPipe(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x + xSpacing, node.y, pipeWidth, pipeWidth + ySpacing + ySpacing);
}

function drawHorizontalPipe(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x, node.y + ySpacing, pipeWidth + xSpacing + xSpacing, pipeWidth);
}

function drawLUElbow(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x, node.y + ySpacing, xSpacing, pipeWidth);
    ctx.fillRect(node.x + xSpacing, node.y, pipeWidth, ySpacing);
    ctx.beginPath();
    ctx.moveTo(node.x + xSpacing, node.y + ySpacing);
    ctx.arc(node.x + xSpacing, node.y + ySpacing, pipeWidth, 0, Math.PI / 2);
    ctx.moveTo(node.x + xSpacing, node.y + ySpacing);
    ctx.fill();
}

function drawRUElbow(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x + xSpacing + pipeWidth, node.y + ySpacing, xSpacing, pipeWidth);
    ctx.fillRect(node.x + xSpacing, node.y, pipeWidth, ySpacing);
    ctx.beginPath();
    ctx.moveTo(node.x + pipeWidth + xSpacing, node.y + ySpacing);
    ctx.arc(node.x + xSpacing + pipeWidth, node.y + ySpacing, pipeWidth, Math.PI / 2, Math.PI);
    ctx.moveTo(node.x + pipeWidth + xSpacing, node.y + ySpacing);
    ctx.fill();
}

function drawRDElbow(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x + xSpacing + pipeWidth, node.y + ySpacing, xSpacing, pipeWidth);
    ctx.fillRect(node.x + xSpacing, node.y + ySpacing + pipeWidth, pipeWidth, ySpacing);
    ctx.beginPath();
    ctx.moveTo(node.x + pipeWidth + xSpacing, node.y + ySpacing + pipeWidth);
    ctx.arc(node.x + xSpacing + pipeWidth, node.y + ySpacing + pipeWidth, pipeWidth, Math.PI, 3 * Math.PI / 2);
    ctx.moveTo(node.x + pipeWidth + xSpacing, node.y + ySpacing + pipeWidth);
    ctx.fill();
}

function drawLDElbow(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x, node.y + ySpacing, xSpacing, pipeWidth);
    ctx.fillRect(node.x + xSpacing, node.y + ySpacing + pipeWidth, pipeWidth, ySpacing);
    ctx.beginPath();
    ctx.moveTo(node.x + xSpacing, node.y + ySpacing + pipeWidth);
    ctx.arc(node.x + xSpacing, node.y + ySpacing + pipeWidth, pipeWidth, 3 * Math.PI / 2, 0);
    ctx.moveTo(node.x + xSpacing, node.y + ySpacing + pipeWidth);
    ctx.fill();
}

function drawLNode(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x, node.y + ySpacing, xSpacing, pipeWidth);
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth, 0, 2 * Math.PI);
    ctx.fillStyle = pipeColor;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth / 2, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor;
    ctx.fill();
}

function drawUNode(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x + xSpacing, node.y, pipeWidth, ySpacing);
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth, 0, 2 * Math.PI);
    ctx.fillStyle = pipeColor;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth / 2, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor;
    ctx.fill();
}

function drawRNode(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x + xSpacing + pipeWidth, node.y + ySpacing, xSpacing, pipeWidth);
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth, 0, 2 * Math.PI);
    ctx.fillStyle = pipeColor;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth / 2, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor;
    ctx.fill();
}

function drawDNode(ctx: CanvasRenderingContext2D, x: number, y: number, xSpacing: number, ySpacing: number) {
    const node = getNode(x, y, xSpacing, ySpacing);
    ctx.fillStyle = pipeColor;
    ctx.fillRect(node.x + xSpacing, node.y + ySpacing + pipeWidth, pipeWidth, ySpacing);
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth, 0, 2 * Math.PI);
    ctx.fillStyle = pipeColor;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(node.x + xSpacing + (pipeWidth / 2), node.y + ySpacing + (pipeWidth / 2), pipeWidth / 2, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor;
    ctx.fill();
}

function generatePipes(xCount: number, yCount: number) {
    let pipes: string[][] = [];
    for (let y = 0; y < yCount; y++) {
        let row: string[] = [];
        for (let x = 0; x < xCount; x++) {
            let possibilities: string[] = ["V", "V", "V", "H", "H", "H", "LU", "LU", "LD", "LD", "RU", "RU", "RD", "RD", "L", "U", "R", "D"];
            let left: boolean = true;
            if (x > 0) if (row[x - 1] === "V" || row[x - 1] === "LU" || row[x - 1] === "LD" || row[x - 1] === "L" || row[x - 1] === "U" || row[x - 1] === "D") left = false;
            if (x === 0) {
                if (Math.random() < 0.5) left = false;
            }
            let right: boolean = true;
            let up: boolean = true;
            if (y > 0) if (pipes[y - 1][x] === "H" || pipes[y - 1][x] === "RU" || pipes[y - 1][x] === "LU" || pipes[y - 1][x] === "R" || pipes[y - 1][x] === "U" || pipes[y - 1][x] === "L") up = false;
            if (y === 0) {
                if (Math.random() < 0.5) up = false;
            }
            let down: boolean = true;
            if (y === yCount - 1) down = true;

            if (!left) possibilities = possibilities.filter((p) => p !== "LU" && p !== "LD" && p !== "L" && p !== "H");
            if (!right) possibilities = possibilities.filter((p) => p !== "RU" && p !== "RD" && p !== "R" && p !== "H");
            if (!up) possibilities = possibilities.filter((p) => p !== "LU" && p !== "RU" && p !== "U" && p !== "V");
            if (!down) possibilities = possibilities.filter((p) => p !== "LD" && p !== "RD" && p !== "D" && p !== "V");
            if (up) possibilities = possibilities.filter((p) => p == "LU" || p == "RU" || p == "U" || p == "V");
            if (left) possibilities = possibilities.filter((p) => p == "LU" || p == "LD" || p == "L" || p == "H");

            let pipe: string = possibilities[Math.floor(Math.random() * possibilities.length)];
            row.push(pipe);
        }
        pipes.push(row);
    }
    return pipes;
}

function renderPipes(pipes: string[][], ctx: CanvasRenderingContext2D, wSpacing: number, hSpacing: number) {
    pipes.forEach((row, y) => {
        row.forEach((pipe, x) => {
            switch (pipe) {
                case "V":
                    drawVerticalPipe(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "H":
                    drawHorizontalPipe(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "LU":
                    drawLUElbow(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "RU":
                    drawRUElbow(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "RD":
                    drawRDElbow(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "LD":
                    drawLDElbow(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "L":
                    drawLNode(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "U":
                    drawUNode(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "R":
                    drawRNode(ctx, x, y, wSpacing, hSpacing);
                    break;
                case "D":
                    drawDNode(ctx, x, y, wSpacing, hSpacing);
                    break;
            }
        });
    });
}

function drawSpark(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const gradient = ctx.createRadialGradient(x, y, sparkRadius, x, y, sparkRadius * 2);
    gradient.addColorStop(0, sparkColor + 'FF'); // Fully transparent at the edge
    gradient.addColorStop(1, sparkColor + '00'); // Fully opaque at the center
    // ctx.fillStyle = gradient;
    // ctx.beginPath();
    // ctx.arc(x, y, sparkRadius * 2, 0, Math.PI * 2);
    // ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, sparkRadius, 0, 2 * Math.PI);
    ctx.fillStyle = sparkColor;
    ctx.fill();
}

function animateSpark(ctx: CanvasRenderingContext2D, x: number, y: number, wSpacing: number, hSpacing: number, pipe: string, direction: string) {
    const node = getNode(x, y, wSpacing, hSpacing);
    let animationFrameId: number;
    const t0 = new Date().getTime();
    const render = () => {
        const now = new Date().getTime();
        const tc = now - t0;
        const t1 = animationSpeed * 1000;
        const nodeWidth = pipeWidth + wSpacing + wSpacing;


        if (pipe === "H") { // Horizontal
            let sparkX = 0;
            let sparkY = 0;
            if (direction === "L") {
                sparkX = node.x + (tc / t1) * nodeWidth;
                sparkY = node.y + hSpacing + (pipeWidth / 2);
            }
            else {
                sparkX = node.x + nodeWidth - (tc / t1) * nodeWidth;
                sparkY = node.y + hSpacing + (pipeWidth / 2);
            }
            if (clear) ctx.clearRect(node.x - (sparkRadius * 2), node.y + hSpacing, nodeWidth + (sparkRadius * 4), pipeWidth);
            drawSpark(ctx, sparkX, sparkY);
        }


        if (pipe === "V") { // Vertical
            let sparkX = 0;
            let sparkY = 0;
            if (direction === "D") {
                sparkX = node.x + wSpacing + (pipeWidth / 2);
                sparkY = node.y + (tc / t1) * nodeWidth;
            }
            else {
                sparkX = node.x + wSpacing + (pipeWidth / 2);
                sparkY = node.y + nodeWidth - (tc / t1) * nodeWidth;
            }
            if (clear) ctx.clearRect(node.x + wSpacing, node.y - (sparkRadius * 2), pipeWidth, nodeWidth + (sparkRadius * 4));
            drawSpark(ctx, sparkX, sparkY);
        }


        if (pipe === "LU" || pipe === "RU" || pipe == "LD" || pipe == "RD") { // Elbow
            let th0 = 0; // Time to start the horizontal animation
            let th1 = 0; // Time to end the horizontal animation
            let ta0 = 0; // Time to start the arc animation
            let ta1 = 0; // Time to end the arc animation
            let tv0 = 0; // Time to start the vertical animation
            let tv1 = 0; // Time to end the vertical animation
            if (direction === "L" || direction === "R") { // If the spark is coming from the left or right, start the horizontal animation first
                th0 = 0;
                th1 = th0 + (t1 / 3);
                ta0 = th1;
                ta1 = ta0 + (t1 / 3);
                tv0 = ta1;
                tv1 = tv0 + (t1 / 3);
            }
            if (direction === "U" || direction === "D") { // If the spark is coming from the top or bottom, start the vertical animation first
                tv0 = 0;
                tv1 = tv0 + (t1 / 3);
                ta0 = tv1;
                ta1 = ta0 + (t1 / 3);
                th0 = ta1;
                th1 = th0 + (t1 / 3);
            }

            let sparkX = 0;
            let sparkY = 0;
            const horizontalComponent: boolean = th0 <= tc && tc < th1;
            const verticalComponent: boolean = tv0 <= tc && tc < tv1;
            const arcComponent: boolean = ta0 <= tc && tc < ta1;
            if (horizontalComponent) { // Horizontal
                sparkY = node.y + hSpacing + (pipeWidth / 2);
                if (direction === "L" && (pipe === "LU" || pipe === "LD")) { // Case 1: Enter spark from left on left side
                    sparkX = node.x + (tc / (th1 - th0)) * wSpacing;
                }
                if (direction === "R" && (pipe === "RU" || pipe === "RD")) { // Case 2: Enter spark from right on right side
                    sparkX = node.x + nodeWidth - (tc / (th1 - th0)) * wSpacing;
                }
                if ((direction === "U" || direction === "D") && (pipe === "RU" || pipe === "RD")) { // Case 3: Enter spark from left on right side
                    sparkX = node.x + wSpacing + pipeWidth + (tc / (th1 - th0)) * wSpacing;
                }
                if ((direction === "U" || direction === "D") && (pipe === "LU" || pipe === "LD")) { // Case 4: Enter spark from right on left side
                    sparkX = node.x + wSpacing + pipeWidth - (tc / (th1 - th0)) * wSpacing;
                }
            }

            if (verticalComponent) { // Vertical
                sparkX = node.x + wSpacing + (pipeWidth / 2);
                if (direction === "U" && (pipe === "LU" || pipe === "RU")) { // Case 1: Enter spark from top on top side
                    sparkY = node.y + (tc / (tv1 - tv0)) * hSpacing;
                }
                if (direction === "D" && (pipe === "LD" || pipe === "RD")) { // Case 2: Enter spark from bottom on bottom side
                    sparkY = node.y + nodeWidth - (tc / (tv1 - tv0)) * hSpacing;
                }
                if ((direction === "L" || direction === "R") && (pipe === "LD" || pipe === "RD")) { // Case 3: Enter spark from top on bottom side
                    sparkY = node.y + hSpacing + pipeWidth + (tc / (tv1 - tv0)) * hSpacing;
                }
                if ((direction === "L" || direction === "R") && (pipe === "LU" || pipe === "RU")) { // Case 4: Enter spark from bottom on top side
                    sparkY = node.y + hSpacing + pipeWidth - (tc / (tv1 - tv0)) * hSpacing;
                }
            }

            if (arcComponent) { // Arc
                let startAngle = 0;
                let endAngle = 0;
                let centerX = 0;
                let centerY = 0;
                const radius = pipeWidth / 2;
                centerX = node.x + wSpacing;
                centerY = node.y + hSpacing;
                if (pipe === "LD") {
                    centerY += pipeWidth;
                    if (direction === "L") {
                        startAngle = 3 * Math.PI / 2;
                        endAngle = Math.PI * 2;
                    }
                    if (direction === "D") {
                        startAngle = Math.PI * 2;
                        endAngle = 3 * Math.PI / 2;
                    }
                }
                if (pipe === "LU") {
                    if (direction === "L") {
                        startAngle = Math.PI / 2;
                        endAngle = 0;
                    }
                    if (direction === "U") {
                        startAngle = 0;
                        endAngle = Math.PI / 2;
                    }
                }
                if (pipe === "RU") {
                    centerX += pipeWidth;
                    if (direction === "U") {
                        startAngle = Math.PI;
                        endAngle = Math.PI / 2;
                    }
                    if (direction === "R") {
                        startAngle = Math.PI / 2;
                        endAngle = Math.PI;
                    }
                }
                if (pipe === "RD") {
                    centerX += pipeWidth;
                    centerY += pipeWidth;
                    if (direction === "R") {
                        startAngle = 3 * Math.PI / 2;
                        endAngle = Math.PI;
                    }
                    if (direction === "D") {
                        startAngle = Math.PI;
                        endAngle = 3 * Math.PI / 2;
                    }
                }
                const currentAngle = startAngle + ((tc - ta0) / (ta1 - ta0)) * (endAngle - startAngle);
                sparkX = centerX + radius * Math.cos(currentAngle);
                sparkY = centerY + radius * Math.sin(currentAngle);
            }

            if (clear) ctx.clearRect(node.x - (sparkRadius * 2), node.y - (sparkRadius * 2), nodeWidth + (sparkRadius * 4), nodeWidth + (sparkRadius * 4));
            drawSpark(ctx, sparkX, sparkY);
        }


        if (tc < t1) {
            animationFrameId = requestAnimationFrame(render);
        }
    };
    render();
}

const animateCircuit = () => {
    useEffect(() => {
        const canvas = document.getElementById('CircuitCanvas') as HTMLCanvasElement;
        const sparkCanvas = document.getElementById('SparkCanvas') as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        sparkCanvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        sparkCanvas.height = window.innerHeight;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const wSpaces = Math.floor((canvasWidth - minSpacing) / (pipeWidth + minSpacing + minSpacing));
        const hSpaces = Math.floor((canvasHeight - minSpacing) / (pipeWidth + minSpacing + minSpacing));
        const wSpacing = Math.ceil((canvasWidth - (wSpaces * pipeWidth)) / (wSpaces * 2));
        const hSpacing = Math.ceil((canvasHeight - (hSpaces * pipeWidth)) / (hSpaces * 2));
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const sparkCtx = sparkCanvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const pipes = generatePipes(wSpaces, hSpaces);
        renderPipes(pipes, ctx, wSpacing, hSpacing);
        for (let y = 0; y < hSpaces; y++) {
            for (let x = 0; x < wSpaces; x++) {
                if (pipes[y][x] === "H") {
                    const direction = Math.random() < 0.5 ? "L" : "R";
                    animateSpark(sparkCtx, x, y, wSpacing, hSpacing, pipes[y][x], direction);
                }
                if (pipes[y][x] === "V") {
                    const direction = Math.random() < 0.5 ? "U" : "D";
                    animateSpark(sparkCtx, x, y, wSpacing, hSpacing, pipes[y][x], direction);
                }
                if (pipes[y][x] === "LU") {
                    const direction = Math.random() < 0.5 ? "L" : "U";
                    animateSpark(sparkCtx, x, y, wSpacing, hSpacing, pipes[y][x], direction);
                }
                if (pipes[y][x] === "RU") {
                    const direction = Math.random() < 0.5 ? "R" : "U";
                    animateSpark(sparkCtx, x, y, wSpacing, hSpacing, pipes[y][x], direction);
                }
                if (pipes[y][x] === "RD") {
                    const direction = Math.random() < 0.5 ? "R" : "D";
                    animateSpark(sparkCtx, x, y, wSpacing, hSpacing, pipes[y][x], "R");
                }
                if (pipes[y][x] === "LD") {
                    const direction = Math.random() < 0.5 ? "L" : "D";
                    animateSpark(sparkCtx, x, y, wSpacing, hSpacing, pipes[y][x], direction);
                }
            }
        }
    });
};

export default animateCircuit;