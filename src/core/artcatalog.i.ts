interface IPosition {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}

export interface IOptions {
    el: string,
    target?: string,
    position?: IPosition
}