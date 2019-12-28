
export interface ISerializable<T = string> {
    serialize(): Promise<T>;
}
