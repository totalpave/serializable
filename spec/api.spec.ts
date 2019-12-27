
import * as api from '../src/api';
import {Serializer} from '../src/Serializer';

describe('Public API', () => {
    it('Serializer', () => {
        expect(api.Serializer).toBe(Serializer);
    });

    describe('interfaces', () => {
        // Interfaces has no actual runtime representation so they
        // cannot really be tested with expects, however if they are 
        // not present on API, then ts-node should complain and fail.
        it
    });
});
