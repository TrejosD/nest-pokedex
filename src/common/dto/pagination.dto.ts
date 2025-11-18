import { IsOptional, IsPositive } from 'class-validator';

export default class PaginationDto {
  @IsOptional()
  @IsPositive()
  limit?: number;
  @IsOptional()
  @IsPositive()
  offset?: number;
}
