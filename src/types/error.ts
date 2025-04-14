export interface Error {
    code: string | null | undefined,
    message: string | null | undefined,
    error?: object | string | null | undefined,
}