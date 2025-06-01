import { IsNotEmpty, IsNumber, IsString, Max, Min, MaxLength } from "class-validator"

export class CreateUserDto {
    @IsString({ message: 'fullName must be a string' })
    @IsNotEmpty({ message: 'fullName is required' })
    @MaxLength(100, { message: 'fullName must be less than 101 characters' })
    fullName: string

    @IsString({ message: 'role must be a string' })
    @IsNotEmpty({ message: 'role is required' })
    @MaxLength(50, { message: 'role must be less than 51 characters' })
    role: string

    @IsNumber({}, { message: 'efficiency must be a number' })
    @IsNotEmpty({ message: 'efficiency is required' })
    @Min(1, { message: 'efficiency must be greater than 0' })
    @Max(10, { message: 'efficiency must be less than 11' })
    efficiency: number
}
