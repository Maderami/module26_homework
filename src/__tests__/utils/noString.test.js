import {multiply} from '../../index';
import {division} from '../../index';

test('Проверка строка или нет при делении', () => {
    expect(division(4)).toString()
    }
);

test('Проверка строка или нет при умножении', () => {
    expect(multiply(4)).toString()
    }
);