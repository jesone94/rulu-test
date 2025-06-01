import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateUserDto {
    @IsString({ message: 'fullName must be a string' })
    @IsNotEmpty({ message: 'fullName is required' })
    fullName: string

    @IsString({ message: 'role must be a string' })
    @IsNotEmpty({ message: 'role is required' })
    role: string

    @IsNumber({}, { message: 'efficiency must be a number' })
    @IsNotEmpty({ message: 'efficiency is required' })
    @Min(1, { message: 'efficiency must be greater than 0' })
    @Max(10, { message: 'efficiency must be less than 11' })
    efficiency: number
}
