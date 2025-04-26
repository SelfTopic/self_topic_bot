import { Composer } from "grammy";
import MyContext from "../../context";
import banComposer from "./ban";
import kickComposer from "./kick";
import muteComposer from "./mute";
import changeRulesComposer from "./change.rules";


const moderatorComposer = new Composer<MyContext>();

moderatorComposer.use(banComposer);
moderatorComposer.use(kickComposer);
moderatorComposer.use(muteComposer);
moderatorComposer.use(changeRulesComposer);

export default moderatorComposer;