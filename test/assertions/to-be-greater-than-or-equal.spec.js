/*global expect*/
describe('greater than or equal assertion', function () {
    it('asserts >=', function () {
        expect(3, 'to be greater than or equal to', 2);
    });

    it('throws when the assertion fails', function () {
        expect(function () {
            expect(-1, 'to be greater than or equal to', 0);
        }, 'to throw exception', "expected -1 to be greater than or equal to 0");
    });
});
