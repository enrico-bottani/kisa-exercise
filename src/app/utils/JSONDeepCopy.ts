class JSONDeepCopy {
    public static deepCopy<T>(toClone: T): T {
        return JSON.parse(JSON.stringify(toClone));
    }
}
export default JSONDeepCopy;