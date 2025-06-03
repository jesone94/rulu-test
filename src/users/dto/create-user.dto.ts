import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateUserDto {
    @IsString({ message: 'full_name must be a string' })
    @IsNotEmpty({ message: 'full_name is required' })
    full_name: string

    @IsString({ message: 'role must be a string' })
    @IsNotEmpty({ message: 'role is required' })
    role: string

    @IsNumber({}, { message: 'efficiency must be a number' })
    @IsNotEmpty({ message: 'efficiency is required' })
    @Min(1, { message: 'efficiency must be greater than 0' })
    @Max(100, { message: 'efficiency must be less than 101' })
    efficiency: number
}
