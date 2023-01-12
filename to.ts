/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error> (
    promise: Promise<T>,
    errorExt?: object
): Promise<[U, undefined] | [null, T]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((err: U) => {
            if (errorExt) {
                const parsedError = Object.assign({}, err, errorExt);
                return [parsedError, undefined];
            }

            return [err, undefined];
        });
}


interface ServerResponse {
    test: number;
}

const p1 = Promise.resolve({test: 123});
const [err1, data1] = await to<ServerResponse>(p1);
console.log(data1?.test);
const p2 = Promise.reject({test: 123});
const [err2, data2] = await to<ServerResponse>(p2);
console.log(err2?.test);