import {Game} from "./game";

describe("Game Tests", () => {

    it('should return gridSize', () => {
        const game = new Game();

        game.setSettings(
            {
                gridSize: {
                    columns: 10,
                    rows: 10,
                }
            }
        )

        const settings = game.getSettings()

        expect(settings.gridSize.rows).toBe(10);
        expect(settings.gridSize.columns).toBe(10);
    });

})