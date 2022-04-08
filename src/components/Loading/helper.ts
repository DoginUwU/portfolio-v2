/* eslint-disable no-plusplus */
import React from 'react';

const phrases = ['Seja bem-vindo', 'Estamos carregando o site', 'Só mais um momento...'];
let counter = 0;

interface IQueue {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
}

class TextScramble {
    chars: string;

    frame: number = 0;

    frameRequest: number = 0;

    queue: IQueue[] = [];

    resolve: (value?: unknown) => void;

    setOutput: React.Dispatch<React.SetStateAction<string>>;

    constructor() {
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
        this.resolve = () => {};
        this.setOutput = () => {};
    }

    setText(oldText: string, setOutput: React.Dispatch<React.SetStateAction<string>>) {
        const newText = phrases[counter + 1] || phrases[0];
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => {
            this.resolve = resolve;
        });
        this.setOutput = setOutput;

        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';

            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);

            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();

        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            const { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    this.queue[i].char = this.randomChar();
                }

                output += `<span>${char || this.chars[0]}</span>`;
            } else {
                output += from;
            }
        }

        this.setOutput(output);

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const fx = new TextScramble();

const changeText = async (setText: React.Dispatch<React.SetStateAction<string>>) => {
    await fx.setText(phrases[counter], setText);
    counter = (counter + 1) % phrases.length;
};

export { changeText };
