import { Add_To_Card } from "./constant";

function add_to_card(item){
    return {type:Add_To_Card,
            data:item
    }
}