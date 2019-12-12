import { Action } from "./action";
import { ActionType } from "./action-type";

export class ShopReducer {

    static reduce(shopData: any, action: Action<any>): any {

        switch(action.type) {

            case ActionType.loadData:
                return {
                    ...shopData,
                    [ActionType[action.type]]: action.payload.data
                }

        }

        return shopData || {};

    }

}