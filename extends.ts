type StringFromType<T> = T extends string
    ? 'string'
    : T extends boolean
        ? 'boolean'
        : T extends Error
            ? 'error'
            : never

type lorem = StringFromType<'lorem ipsum'> // 'string'
type isActive = StringFromType<false> // 'boolean'
type unassignable = StringFromType<TypeError> // 'error'

// type lorem = 'string'
// type isActive = 'boolean'
// type unassignable = 'error'
// type StringFromType<T> = xxx
