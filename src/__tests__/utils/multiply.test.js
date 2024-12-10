import { multiply } from '../../index';

describe("Тесты  умножения на 8",
    () =>
    it('multiply on 8 equal 16', () => {
        expect(multiply(8)).toBe(16);
    }),
    it(
        'multiply on 8 not equal 16', () => {
            expect(multiply(2)).not.toBe(16);
        }
    )
)
