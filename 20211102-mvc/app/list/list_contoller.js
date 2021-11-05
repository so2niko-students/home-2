import ListModel from "./list_model.js";
import ListView from "./list_view.js";

export default class ListController{
    constructor(){
        this.model = new ListModel();
        this.view = new ListView();

    }

    init = async () => {
        const data = await this.model.load();
        this.view.render(data);
    }
}