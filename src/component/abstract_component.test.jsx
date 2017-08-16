import Component from "./abstract_component";

describe('component:: Abstract', () => {
    describe(`::constructor`, () => {
        it(` - constructor should set mandatory state fields [data|model|attributes]`, () => {
            const component = new Component();

            expect(component.state).toBeDefined();
            expect(component.state.data).toBeDefined();
            expect(component.state.model).toBeDefined();
            expect(component.state.attributes).toBeDefined();
        });
    });
});