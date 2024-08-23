import { NumberMagicUtil } from './number-magic-util';

describe('NumberMagicUtil', () => {
    let util;

    beforeEach(() => {
        util = new NumberMagicUtil();
    });

    it('should return a number within the specified range', () => {
        const from = 5;
        const to = 15;
        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBeGreaterThanOrEqual(from);
        expect(randomNumber).toBeLessThanOrEqual(to);
    });

    it('should return the same number when range boundaries are equal', () => {
        const from = 10;
        const to = 10;
        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBe(from);
    });

    it('should return the lower boundary when random number is at minimum', () => {
        const from = 1;
        const to = 10;

        jest.spyOn(global.Math, 'random').mockReturnValue(0); // Минимум

        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBe(from);
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    it('should return the upper boundary when random number is at maximum', () => {
        const from = 1;
        const to = 10;

        jest.spyOn(global.Math, 'random').mockReturnValue(0.999999); // Максимум

        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBe(to);
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    it('should handle negative numbers correctly', () => {
        const from = -10;
        const to = -1;
        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBeGreaterThanOrEqual(from);
        expect(randomNumber).toBeLessThanOrEqual(to);
    });

    it('should work correctly when from is negative and to is positive', () => {
        const from = -5;
        const to = 5;
        const randomNumber = util.getRandomNumber(from, to);

        expect(randomNumber).toBeGreaterThanOrEqual(from);
        expect(randomNumber).toBeLessThanOrEqual(to);
    });
});
