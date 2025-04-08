import MyContext from "../../context";
import FindEntityService from "../find.entity";

class AbstractRestrictService {

    private ctx: MyContext;
    private findEntityService: FindEntityService;

    constructor(
        ctx: MyContext,
        findEntityService: FindEntityService,
    ) {
        this.ctx = ctx;
        this.findEntityService = findEntityService;
    }

}