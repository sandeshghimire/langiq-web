/**
 * Recursively widens literal types to their base types (e.g. string literals → string),
 * while preserving readonly modifiers so it is compatible with `as const` objects.
 * Used for component content prop types so that different content objects
 * (e.g. IV&V vs HIL) with the same structure are accepted.
 */
export type Widen<T> =
    T extends string
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : T extends readonly (infer U)[]
    ? ReadonlyArray<Widen<U>>
    : T extends (infer U)[]
    ? Array<Widen<U>>
    : T extends object
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T;
