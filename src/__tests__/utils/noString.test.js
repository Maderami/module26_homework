import {multiply} from '../../index';
import {division} from '../../index';

test('Проверка строка или нет при делении', () => {
    let res = division(4)
    expect(typeof res).toBe("number")
    }
);

test('Проверка строка или нет при умножении', () => {
    let res = multiply(4)
    expect(typeof res).toBe("number")
    }
);