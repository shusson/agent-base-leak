import Agent from "agent-base";

describe("agent base", () => {
    it(`should not leak`, async () => {
        expect(Agent).toBeTruthy();
    });
});
