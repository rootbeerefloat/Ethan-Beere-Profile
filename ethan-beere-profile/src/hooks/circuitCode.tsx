// src/hooks/useHelloWorld.ts
import { useEffect } from 'react';

const pipeWidth = 20;
const minSpacing = 20;
const bgColor = '#0d0f2b';
const pipeColor = '#474b85';
const sparkColor = '#d3d5f5';
const sparkRadius = 3.5;
const animationSpeed = 5;

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
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, sparkRadius * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = sparkColor;
    ctx.fill();
}

function animateSparkHorizontal(ctx: CanvasRenderingContext2D, x: number, y: number, wSpacing: number, hSpacing: number) {
    const node = getNode(x, y, wSpacing, hSpacing);
    let animationFrameId: number;
    const t0 = new Date().getTime();
    const render = () => {
        drawHorizontalPipe(ctx, x, y, wSpacing, hSpacing);
        const now = new Date().getTime();
        const tc = now - t0;
        const t1 = animationSpeed * 1000;
        const nodeWidth = pipeWidth + wSpacing + wSpacing;
        const sparkX = node.x + (tc / t1) * nodeWidth;
        const sparkY = node.y + hSpacing + (pipeWidth / 2);
        drawSpark(ctx, sparkX, sparkY);
        if (tc < t1) {
            animationFrameId = requestAnimationFrame(render);
        }
    };
    render();
}

const animateCircuit = () => {
    useEffect(() => {
        const canvas = document.getElementById('CircuitCanvas') as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const wSpaces = Math.floor((canvasWidth - minSpacing) / (pipeWidth + minSpacing + minSpacing));
        const hSpaces = Math.floor((canvasHeight - minSpacing) / (pipeWidth + minSpacing + minSpacing));
        const wSpacing = Math.ceil((canvasWidth - (wSpaces * pipeWidth)) / (wSpaces * 2));
        const hSpacing = Math.ceil((canvasHeight - (hSpaces * pipeWidth)) / (hSpaces * 2));
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const pipes = generatePipes(wSpaces, hSpaces);
        renderPipes(pipes, ctx, wSpacing, hSpacing);
    });
};

export default animateCircuit;