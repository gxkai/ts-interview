type GetFirstArgumentOfAnyFunction<T> = T extends (
        first: infer FirstArgument,
        ...args: any[]
    ) => any
    ? FirstArgument
    : never

type t1 = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void> // string
type GetSecondArgumentOfAnyFunction<T> = T extends (
        first: any,
        second: infer SecondArgument,
        ...args: any[]
    ) => any
    ? SecondArgument
    : never

type t2 = GetSecondArgumentOfAnyFunction<(name: string, age: number) => void> // number