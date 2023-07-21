export interface PropsParams {
    params: {
        name: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}
