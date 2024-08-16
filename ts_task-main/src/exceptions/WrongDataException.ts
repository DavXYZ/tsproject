export class WrongDataException extends Error {
    constructor(message = 'Wrong data') {
        super(message);
        this.name = 'WrongDataException';
    }
}
