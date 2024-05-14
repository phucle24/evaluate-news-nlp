import { isValidURL } from '../client/js/urlValidChecker';

describe('Checking URL', () => {
    test('Checking URL is valid', () => {
        expect(isValidURL('https://jestjs.io/docs/getting-started')).toBeTruthy();
        expect(isValidURL('https://example.com?q=query')).toBeTruthy();
    });

    test('Checking URL is invalid', () => {
        expect(isValidURL('not a url')).toBeFalsy();
        expect(isValidURL("htpdpd/:www.example.com")).toBeFalsy();
        expect(isValidURL('$@£$$qưqwabc5433')).toBeFalsy();
    });
});
