import { Action,  action} from "easy-peasy";
import { Category } from "../../interface";

interface CategoryState{
    category: Category;
    categoryList: Array<Category>;
}

interface CategoryActions{
    setCategory: Action<this, Category>;
    setCategoryList:Action<this, Array<Category>>;
}


export interface CategoryModel extends CategoryState, CategoryActions{

}

export const categoryModel: CategoryModel={
    category: {},
    categoryList: [],

    setCategory: action((state, category) => {
        state.category = category;
    }),
    setCategoryList: action((state, categoryList) => {
        state.categoryList = categoryList;
    }),
}