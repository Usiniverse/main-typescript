interface IUseCaseError {
	message: string
}

export abstract class UseCaseError implements IUseCaseError {
	public readonly message: string

	constructor(message: string) {
		this.message = message
	}
}


export namespace UserError {
    export class UserNotCreated extends UseCaseError {
        constructor(public message: string) {
            super('Create User Error')
        }
    }

    export class ExistUser extends UseCaseError {
        constructor(public message: string) {
            super('Already exist user!')
        }
    }
}