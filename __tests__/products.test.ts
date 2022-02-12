
import prepareProductsList from '../src/modules/products';
import {Jest as jest} from "@jest/environment";
import {describe, expect} from "@jest/globals";


jest.mock('../src/modules/products', () => ({
    ...(jest.requireActual('../src/modules/products')),
    prepareProductsList: jest.fn()
}))

describe("Filter function", () => {
    test("it should filter by only title and description", () => {
        const input = [
            {
                title: 'Red pants',
                description: 'Red pants are highly addictive, and made out of awesome stuff only!',
            },
            {
                title: 'Red pants from manufacturor title',
                tags: ['red', 'pants', 'awesome'],
                images: [{ src: 'https://picsum.photos/200' }, { src: 'https://picsum.photos/350' }]
            },
            {
                title: 'Blue pants2',
                description: 'Test Blue Pants',
            },
            {
                title: 'Blue pants2 from manufacturor2',
                tags: ['Blue', 'pants2', 'awesome2'],
                images: [{ src: 'https://picsum.photos/201' }, { src: 'https://picsum.photos/351' }]
            }

        ];

        const output = [   {
            title: 'Red pants',
            description: 'Red pants are highly addictive, and made out of awesome stuff only!',
        }, {
            title: 'Blue pants2',
            description: 'Test Blue Pants',
        }];

        expect(prepareProductsList(input)).toEqual(output);

    });
});