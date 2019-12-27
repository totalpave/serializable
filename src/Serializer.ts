import { ISerializable } from "./ISerializable";

export class Serializer<T = any> implements ISerializable {
    private _data: T;

    public constructor(data: T) {
        this._data = data;
    }

    public async serialize(): Promise<string> {
        return Promise.resolve(JSON.stringify(this._data));
    }
}
