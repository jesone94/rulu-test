export class ApiResponse<T> {
    constructor(success: boolean, result?: T) {
        this.success = success;
        this.result = result;
    }
    success: boolean
    result?: T
}
