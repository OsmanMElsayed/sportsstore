import { Action } from "./action";
import { PLACEHOLDER_DATA  } from './placeholder-data'
import { ActionType } from "./action-type";
import { DataType } from "./data-type";
import { Product } from "./product";

export class ActionCreator {

    static createLoadCategoriesAction(): Action<string[]> {

        return {
            type: ActionType.loadData,
            payload: {
                dataType: DataType.categories,
                data: PLACEHOLDER_DATA.categories
            }
        }
        
    }

    static createLoadProductsAction(): Action<Product[]> {

        return {
            type: ActionType.loadData,
            payload: {
                dataType: DataType.products,
                data: PLACEHOLDER_DATA.products
            }
        }
        
    }

}