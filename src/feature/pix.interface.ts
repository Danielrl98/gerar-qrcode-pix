export interface PixProps {
    type?: string,
    key?:  string,
    name?: string,
    city?: string,
    ammount?: string
}
export interface MessageError extends PixProps {
    message?: string
}