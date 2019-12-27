
import {Serializer} from '../src/Serializer';

describe('Serializer', () => {
    it('serialize', () => {
        let data: any = {
            test: true,
            age: 123,
            name: 'John',
            woop: new Date()
        };

        let expectation: string = JSON.stringify(data);
        let serializer = new Serializer(data);
        expectAsync(serializer.serialize()).toBeResolvedTo(expectation);
    })
});
