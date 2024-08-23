import {Game, GAME_STATUSES} from "./game";

describe("Game Tests", () => {

    it("should return correct Game Status 'STARTED' after start", async () => {
        const game = new Game();

        let status = await game.getStatus()

        expect(status).toBe(GAME_STATUSES.PENDING);

        await game.start();
        status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.IN_PROGRESS);

    });

    it("should return correct Google position that changed every 2 seconds", async () => {
        const game = new Game();
        await game.start();

        let googlePosition = await game.getGooglePosition()
        expect(googlePosition).toBeDefined();

        await delay(3000)

        let googlePosition2 = await game.getGooglePosition()
        expect(googlePosition2).not.toEqual(googlePosition)
    });

})

export const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms))
