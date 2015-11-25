interface IsPromise {
    (value : any) : boolean;
}

declare var IsPromise: IsPromise;

declare module 'is-promise' {
    export = IsPromise;
}
