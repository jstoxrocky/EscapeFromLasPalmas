interface Updatable<T> {
    update: (hero: T) => T;
}

export default Updatable;
