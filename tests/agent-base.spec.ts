import agent from "agent-base";

describe("agent base", () => {
    it(`should not leak`, async () => {
        expect(agent).toBeTruthy();
    });
});
