// src/hooks/useHelloWorld.ts
import { useEffect } from 'react';

const pipeWidth = 20;
const minSpacing = 20;
const bgColor = '#0d0f2b';
const pipeColor = '#474b85';
const sparkColor = '#d3d5f5';
const sparkRadius = 6;
const animationSpeed = 2;
const clear = true;
const debug = true;
const testPipes = [
    [
        "LU",
        "RD",
        "L",
        "RU",
        "LD",
        "RD",
        "L",
        "RU",
        "H",
        "LU",
        "RU",
        "LD",
        "RU",
        "LU",
        "V",
        "RD",
        "LU",
        "D",
        "V",
        "D",
        "V",
        "V",
        "V",
        "V",
        "R",
        "LU",
        "RD",
        "LU",
        "RU",
        "LU",
        "R"
    ],
    [
        "H",
        "LU",
        "RD",
        "H",
        "LU",
        "RU",
        "H",
        "LD",
        "D",
        "R",
        "H",
        "LU",
        "R",
        "L",
        "V",
        "V",
        "RD",
        "LU",
        "V",
        "V",
        "U",
        "V",
        "RU",
        "LU",
        "R",
        "L",
        "V",
        "R",
        "L",
        "D",
        "RD"
    ],
    [
        "L",
        "D",
        "V",
        "D",
        "D",
        "RD",
        "LD",
        "RU",
        "LU",
        "RD",
        "LD",
        "RD",
        "H",
        "H",
        "LU",
        "V",
        "V",
        "RD",
        "LU",
        "U",
        "D",
        "RU",
        "LD",
        "D",
        "RD",
        "LD",
        "V",
        "RD",
        "H",
        "LU",
        "U"
    ],
    [
        "L",
        "V",
        "V",
        "V",
        "RU",
        "LU",
        "V",
        "D",
        "RD",
        "LU",
        "V",
        "V",
        "D",
        "RD",
        "H",
        "LU",
        "RU",
        "LU",
        "R",
        "L",
        "RU",
        "LD",
        "V",
        "U",
        "V",
        "RU",
        "LU",
        "V",
        "RD",
        "LD",
        "RD"
    ],
    [
        "D",
        "RU",
        "LU",
        "U",
        "RD",
        "LD",
        "RU",
        "LU",
        "RU",
        "LD",
        "V",
        "V",
        "V",
        "RU",
        "H",
        "H",
        "L",
        "D",
        "RD",
        "H",
        "LD",
        "V",
        "V",
        "D",
        "V",
        "D",
        "D",
        "V",
        "U",
        "RU",
        "LU"
    ],
    [
        "LU",
        "RD",
        "LD",
        "RD",
        "LU",
        "V",
        "R",
        "H",
        "H",
        "LU",
        "V",
        "U",
        "RU",
        "LD",
        "RD",
        "H",
        "LD",
        "V",
        "V",
        "R",
        "LU",
        "RU",
        "LU",
        "V",
        "V",
        "U",
        "V",
        "RU",
        "LD",
        "RD",
        "LD"
    ],
    [
        "LD",
        "V",
        "RU",
        "LU",
        "D",
        "RU",
        "LD",
        "RD",
        "L",
        "RD",
        "LU",
        "D",
        "R",
        "LU",
        "RU",
        "H",
        "LU",
        "U",
        "V",
        "RD",
        "H",
        "LD",
        "D",
        "U",
        "V",
        "RD",
        "LU",
        "D",
        "V",
        "V",
        "RU"
    ],
    [
        "V",
        "U",
        "RD",
        "LD",
        "V",
        "R",
        "LU",
        "V",
        "RD",
        "LU",
        "D",
        "RU",
        "H",
        "H",
        "LD",
        "RD",
        "H",
        "H",
        "LU",
        "V",
        "RD",
        "LU",
        "V",
        "RD",
        "LU",
        "RU",
        "LD",
        "RU",
        "LU",
        "V",
        "RD"
    ],
    [
        "V",
        "RD",
        "LU",
        "U",
        "V",
        "R",
        "LD",
        "V",
        "V",
        "D",
        "RU",
        "LD",
        "RD",
        "LD",
        "V",
        "RU",
        "H",
        "LD",
        "RD",
        "LU",
        "V",
        "R",
        "LU",
        "V",
        "R",
        "L",
        "V",
        "D",
        "D",
        "V",
        "V"
    ],
    [
        "V",
        "RU",
        "H",
        "L",
        "V",
        "RD",
        "LU",
        "RU",
        "LU",
        "V",
        "RD",
        "LU",
        "V",
        "V",
        "RU",
        "L",
        "R",
        "LU",
        "RU",
        "H",
        "LU",
        "RD",
        "H",
        "LU",
        "RD",
        "L",
        "U",
        "RU",
        "LU",
        "U",
        "V"
    ],
    [
        "U",
        "RD",
        "H",
        "H",
        "LU",
        "V",
        "R",
        "H",
        "LD",
        "RU",
        "LU",
        "D",
        "V",
        "RU",
        "H",
        "H",
        "H",
        "H",
        "L",
        "RD",
        "LD",
        "V",
        "RD",
        "H",
        "LU",
        "R",
        "H",
        "LD",
        "RD",
        "LD",
        "V"
    ],
    [
        "H",
        "LU",
        "R",
        "L",
        "RD",
        "LU",
        "R",
        "L",
        "RU",
        "H",
        "H",
        "LU",
        "V",
        "R",
        "H",
        "L",
        "R",
        "LD",
        "RD",
        "LU",
        "U",
        "V",
        "V",
        "D",
        "RD",
        "H",
        "LD",
        "U",
        "V",
        "V",
        "RU"
    ],
    [
        "H",
        "LD",
        "RD",
        "L",
        "V",
        "D",
        "D",
        "R",
        "LD",
        "RD",
        "L",
        "RD",
        "LU",
        "RD",
        "H",
        "LD",
        "RD",
        "LU",
        "V",
        "RD",
        "LD",
        "V",
        "V",
        "V",
        "U",
        "RD",
        "LU",
        "D",
        "RU",
        "LU",
        "R"
    ],
    [
        "RD",
        "LU",
        "V",
        "RD",
        "LU",
        "V",
        "RU",
        "H",
        "LU",
        "V",
        "RD",
        "LU",
        "RD",
        "LU",
        "D",
        "U",
        "RU",
        "H",
        "LU",
        "RU",
        "LU",
        "RU",
        "LU",
        "RU",
        "L",
        "V",
        "D",
        "RU",
        "H",
        "H",
        "LD"
    ],
    [
        "LU",
        "RD",
        "LU",
        "V",
        "RD",
        "LU",
        "R",
        "H",
        "L",
        "V",
        "RU",
        "H",
        "LU",
        "RD",
        "LU",
        "D",
        "RD",
        "L",
        "RD",
        "L",
        "R",
        "H",
        "L",
        "D",
        "R",
        "LU",
        "V",
        "RD",
        "LD",
        "RD",
        "LU"
    ]
];

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
        const nodeHeight = pipeWidth + hSpacing + hSpacing;


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
                    sparkX = node.x + wSpacing + pipeWidth + (((tc - th0) / (th1 - th0)) * wSpacing);
                }
                if ((direction === "U" || direction === "D") && (pipe === "LU" || pipe === "LD")) { // Case 4: Enter spark from right on left side
                    sparkX = node.x + wSpacing - (((tc - th0) / (th1 - th0)) * wSpacing);
                }
            }

            if (verticalComponent) { // Vertical
                sparkX = node.x + wSpacing + (pipeWidth / 2);
                if (direction === "U" && (pipe === "LU" || pipe === "RU")) { // Case 1: Enter spark from top on top side, start
                    sparkY = node.y + (tc / (tv1 - tv0)) * hSpacing;
                }
                if (direction === "D" && (pipe === "LD" || pipe === "RD")) { // Case 2: Enter spark from bottom on bottom side, start
                    sparkY = node.y + nodeWidth - (tc / (tv1 - tv0)) * hSpacing;
                }
                if ((direction === "L" || direction === "R") && (pipe === "LD" || pipe === "RD")) { // Case 3: Enter spark from top on bottom side, finish
                    sparkY = node.y + hSpacing + pipeWidth + (((tc - tv0) / (tv1 - tv0)) * hSpacing);
                }
                if ((direction === "L" || direction === "R") && (pipe === "LU" || pipe === "RU")) { // Case 4: Enter spark from bottom on top side, finish
                    sparkY = node.y + hSpacing - (((tc - tv0) / (tv1 - tv0)) * hSpacing);
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
            if (tc < t1) drawSpark(ctx, sparkX, sparkY);
        }

        if (pipe === "L" || pipe === "U" || pipe === "R" || pipe === "D") { // Endpoint
            let sparkX = 0;
            let sparkY = 0;
            const th = t1 / 2;
            if (pipe === "L") {
                if (direction === "IN") {
                    sparkX = node.x + ((tc / t1) * nodeWidth);
                }
                else {
                    sparkX = node.x + nodeWidth - ((tc / t1) * nodeWidth);
                }
                sparkY = node.y + hSpacing + (pipeWidth / 2);
            }
            if (pipe === "U") {
                if (direction === "IN") {
                    sparkY = node.y + ((tc / t1) * nodeWidth);
                }
                else {
                    sparkY = node.y + nodeWidth - ((tc / t1) * nodeWidth);
                }
                sparkX = node.x + wSpacing + (pipeWidth / 2);
            }
            if (pipe === "R") {
                if (direction === "IN") {
                    sparkX = node.x + nodeWidth - ((tc / t1) * nodeWidth);
                }
                else {
                    sparkX = node.x + ((tc / t1) * nodeWidth);
                }
                sparkY = node.y + hSpacing + (pipeWidth / 2);
            }
            if (pipe === "D") {
                if (direction === "IN") {
                    sparkY = node.y + nodeWidth - ((tc / t1) * nodeWidth);
                }
                else {
                    sparkY = node.y + ((tc / t1) * nodeWidth);
                }
                sparkX = node.x + wSpacing + (pipeWidth / 2);
            }
            if ((tc > th && direction === "IN") || (tc < th && direction === "OUT")) {
                sparkX = node.x + nodeWidth / 2;
                sparkY = node.y + nodeHeight / 2;
            }
            if (clear) ctx.clearRect(node.x - (sparkRadius * 2), node.y - (sparkRadius * 2), nodeWidth + (sparkRadius * 4), nodeWidth + (sparkRadius * 4));
            drawSpark(ctx, sparkX, sparkY);
            ctx.beginPath();
            ctx.arc(node.x + (nodeWidth / 2), node.y + (nodeHeight / 2), pipeWidth / 2, 0, 2 * Math.PI);
            ctx.fillStyle = bgColor;
            ctx.fill();
        }


        if (tc < t1) {
            animationFrameId = requestAnimationFrame(render);
        }
    };
    render();
}

function getPaths(wSpaces: number, hSpaces: number, pipes: string[][]) {
    let origins: { x: number, y: number }[] = [];
    for (let y = 0; y < hSpaces; y++) {
        for (let x = 0; x < wSpaces; x++) {
            if (x === 0 && (pipes[y][x] === "H" || pipes[y][x] === "LU" || pipes[y][x] === "LD" || pipes[y][x] === "L")) {
                origins.push({ x: x, y: y });
            }
            if (x == wSpaces - 1 && (pipes[y][x] === "H" || pipes[y][x] === "RU" || pipes[y][x] === "RD" || pipes[y][x] === "R")) {
                origins.push({ x: x, y: y });
            }
            if (y === 0 && (pipes[y][x] === "V" || pipes[y][x] === "RU" || pipes[y][x] === "LU" || pipes[y][x] === "U")) {
                origins.push({ x: x, y: y });
            }
            if (y === hSpaces - 1 && (pipes[y][x] === "V" || pipes[y][x] === "RD" || pipes[y][x] === "LD" || pipes[y][x] === "D")) {
                origins.push({ x: x, y: y });
            }
            if (pipes[y][x] === "L" || pipes[y][x] === "U" || pipes[y][x] === "R" || pipes[y][x] === "D") {
                origins.push({ x: x, y: y });
            }
        }
    }
    let paths: { x: number, y: number }[][] = [];
    while (origins.length > 0) {
        const origin = origins[0];
        const x1 = origin.x;
        const y1 = origin.y;
        let x = x1;
        let y = y1;
        let instances = 0;
        origins.forEach((o) => {
            if (o.x === x && o.y === y) instances++;
        });
        if (instances > 1) {
            paths.push([{ x: x, y: y }]);
            origins = origins.filter(o => o.x !== x || o.y !== y);
        }
        else {
            origins = origins.filter(o => o.x !== x || o.y !== y);
            let morePath = true;
            let prev: { x: number, y: number } = { x: x, y: y };
            let path: { x: number, y: number }[] = [];
            let timeout = 0;
            while (morePath && timeout < 50) {
                path.push({ x: x, y: y });
                let possibilities: { x: number, y: number }[] = []
                if (pipes[y][x] === "H") possibilities = [{ x: x - 1, y: y }, { x: x + 1, y: y }];
                if (pipes[y][x] === "V") possibilities = [{ x: x, y: y - 1 }, { x: x, y: y + 1 }];
                if (pipes[y][x] === "LU") possibilities = [{ x: x - 1, y: y }, { x: x, y: y - 1 }];
                if (pipes[y][x] === "RU") possibilities = [{ x: x + 1, y: y }, { x: x, y: y - 1 }];
                if (pipes[y][x] === "RD") possibilities = [{ x: x + 1, y: y }, { x: x, y: y + 1 }];
                if (pipes[y][x] === "LD") possibilities = [{ x: x - 1, y: y }, { x: x, y: y + 1 }];
                if (pipes[y][x] === "L") possibilities = [{ x: x - 1, y: y }];
                if (pipes[y][x] === "U") possibilities = [{ x: x, y: y - 1 }];
                if (pipes[y][x] === "R") possibilities = [{ x: x + 1, y: y }];
                if (pipes[y][x] === "D") possibilities = [{ x: x, y: y + 1 }];
                for (let i = 0; i < possibilities.length; i++) {
                    if (possibilities[i].x === prev.x && possibilities[i].y === prev.y) {
                        possibilities.splice(i, 1);
                        break;
                    }
                }
                if (x === 0) possibilities = possibilities.filter(p => p.x !== x - 1);
                if (x === wSpaces - 1) possibilities = possibilities.filter(p => p.x !== x + 1);
                if (y === 0) possibilities = possibilities.filter(p => p.y !== y - 1);
                if (y === hSpaces - 1) possibilities = possibilities.filter(p => p.y !== y + 1);
                prev = { x: x, y: y };
                if (origins.filter(o => o.x === x && o.y === y).length > 0) {
                    origins = origins.filter(o => o.x !== x || o.y !== y);
                    morePath = false;
                }
                else {
                    if (possibilities.length === 0) {
                        x = 0;
                        y = 0;
                    }
                    else {
                        const next = possibilities[Math.floor(Math.random() * possibilities.length)];
                        x = next.x;
                        y = next.y;
                    }
                }
                timeout++;
            }
            paths.push(path);
        }
    }
    return paths;
}

function animatePath(ctx: CanvasRenderingContext2D, path: { x: number, y: number }[], wSpacing: number, hSpacing: number, pipes: string[][], reverse: boolean) {
    if (reverse) path = path.reverse();
    console.log(path)
    path.forEach((node, i) => {
        let pipe = pipes[node.y][node.x];
        let direction = "IN";
        if (path.length === 1) {
            if (Math.random() < 0.5) {
                if (pipe === "H") direction = "U";
                if (pipe === "V") direction = "L";
                if (pipe === "L" || pipe === "U" || pipe === "R" || pipe === "D") direction = "IN";
                if (pipe === "LU" || pipe === "LD") direction = "L";
                if (pipe === "RU" || pipe === "RD") direction = "R";
            }
            else {
                if (pipe === "H") direction = "D";
                if (pipe === "V") direction = "R";
                if (pipe === "L" || pipe === "U" || pipe === "R" || pipe === "D") direction = "OUT";
                if (pipe === "LU" || pipe === "RU") direction = "U";
                if (pipe === "LD" || pipe === "RD") direction = "D";
            }
        }
        else {
            let prevDirection = "NA";
            let nextDirection = "NA";
            if (i > 0) {
                const prevNode = path[i - 1];
                const xDiff = node.x - prevNode.x;
                const yDiff = node.y - prevNode.y;
                if (xDiff === 1) prevDirection = "R";
                if (xDiff === -1) prevDirection = "L";
                if (yDiff === 1) prevDirection = "D";
                if (yDiff === -1) prevDirection = "U";
            }
            if (i < path.length - 1) {
                const nextNode = path[i + 1];
                const xDiff = nextNode.x - node.x;
                const yDiff = nextNode.y - node.y;
                if (xDiff === 1) nextDirection = "R";
                if (xDiff === -1) nextDirection = "L";
                if (yDiff === 1) nextDirection = "D";
                if (yDiff === -1) nextDirection = "U";
            }
            if (pipe === "L" || pipe === "U" || pipe === "R" || pipe === "D") {
                if (i === 0) direction = "OUT";
                if (i === path.length - 1) direction = "IN";
            }
            else {

            }
            if (nextDirection === "NA") {
                if (((pipe === "LU" || pipe === "RU") && prevDirection !== "U") || (pipe === "V" && prevDirection == "D")) direction = "U";
            }
        }
        animateSpark(ctx, node.x, node.y, wSpacing, hSpacing, pipe, direction);
    });
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
        let pipes: string[][];
        if (debug) pipes = testPipes;
        else pipes = generatePipes(wSpaces, hSpaces);
        renderPipes(pipes, ctx, wSpacing, hSpacing);
        const paths = getPaths(wSpaces, hSpaces, pipes);
        console.log(paths)
        animatePath(sparkCtx, paths[1], wSpacing, hSpacing, pipes, false);
    });
};

export default animateCircuit;