import { JsonController, Get, Post, Param, Delete, Body } from 'routing-controllers'
import { CategoryService } from '../services/CategoryService'
import { Category } from '../models/Category'

@JsonController()
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Get('/categories')
  all(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get('/categories/:id')
  one(@Param('id') id: number): Category {
    return this.categoryService.findOne(id)
  }

  @Post('/categories')
  category(@Body() category: Category): Category {
    return this.categoryService.save(category)
  }

  @Delete('/categories/:id')
  delete(@Param('id') id: number): Category {
    return this.categoryService.remove(id)
  }
}
