import { getPerson, getStudentsData } from './Interfaces';

describe('Интерфейсы', () => {
    // тесты специально некрасиво написаны, чтобы немножко усложнить задание
    it('getPerson возвращает корректные данные', () => {
        const data = getPerson();

        expect(Object.keys(data).sort()).toStrictEqual([
            'age',
            'name',
            'secondName',
        ]);
        expect(data.name).toBe('Petr');
        expect(data.secondName).toBe('Smith');
        expect(data.age).toBe(7);
    });

    it('getStudentsData возвращает корректные данные', () => {
        const data = getStudentsData();

        expect(data.length).toBe(3);

        expect(data[0].name).toBe('Ivan');
        expect(data[0].secondName).toBe('Petrov');
        expect(data[0].age).toBe(20);
        expect(data[0].phone).toBe('+7(555)555-55-50');

        expect(data[1].name).toBe('Stepan');
        expect(data[1].secondName).toBe('Petrov');
        expect(data[1].age).toBe(19);
        expect(data[1].phone).toBe('+7(555)555-55-51');

        expect(data[2].name).toBe('Petr');
        expect(data[2].secondName).toBe('Ivanov');
        expect(data[2].age).toBe(19);
        expect(data[2].phone).toBeUndefined();
    });
});
