import { division } from '../../index';

test(
    'division on 8 equal 0.5', () => {
        expect(division(4)).toBe(0.5);
    }
)

test(
    'division on 8 not equal 0.5', () => {
        expect(division(5)).not.toBe(0.5);
    }
)