var gameenum;
(function (gameenum) {
    /** 服务器玩家阶段 */
    var SeverPlayerStage;
    (function (SeverPlayerStage) {
        SeverPlayerStage["JOIN"] = "JOIN";
        SeverPlayerStage["START_PLAY"] = "START_PLAY";
        SeverPlayerStage["THINKING"] = "THINKING";
        SeverPlayerStage["WAIT"] = "WAIT";
        SeverPlayerStage["LOOK"] = "LOOK";
        SeverPlayerStage["FOLD"] = "FOLD";
        SeverPlayerStage["OVER"] = "OVER";
        SeverPlayerStage["WINNER"] = "WINNER";
        SeverPlayerStage["CHANGE"] = "CHANGE";
        SeverPlayerStage["LEFT"] = "LEFT";
        SeverPlayerStage["BYSTANDER"] = "BYSTANDER";
    })(SeverPlayerStage = gameenum.SeverPlayerStage || (gameenum.SeverPlayerStage = {}));
    /** 玩家游戏阶段 */
    var GamePlayerStage;
    (function (GamePlayerStage) {
        /** 未准备 */
        GamePlayerStage[GamePlayerStage["UnReady"] = 1] = "UnReady";
        /** 准备 */
        GamePlayerStage[GamePlayerStage["Ready"] = 2] = "Ready";
        /** 发牌阶段 */
        GamePlayerStage[GamePlayerStage["SendCard"] = 3] = "SendCard";
        /** 比牌胜利 */
        GamePlayerStage[GamePlayerStage["ComparedWin"] = 4] = "ComparedWin";
        /** 等待其他玩家操作 */
        GamePlayerStage[GamePlayerStage["Wating"] = 5] = "Wating";
        /** 玩家自己操作中 */
        GamePlayerStage[GamePlayerStage["Playing"] = 6] = "Playing";
        /** 比牌 */
        GamePlayerStage[GamePlayerStage["Compared"] = 7] = "Compared";
        /** 结束 */
        GamePlayerStage[GamePlayerStage["Over"] = 8] = "Over";
        /** 比牌输了 */
        GamePlayerStage[GamePlayerStage["ComparedLose"] = 9] = "ComparedLose";
        /** 弃牌 */
        GamePlayerStage[GamePlayerStage["Fold"] = 10] = "Fold";
        /** 旁观 */
        GamePlayerStage[GamePlayerStage["Bystander"] = 11] = "Bystander";
        /** 无 */
        GamePlayerStage[GamePlayerStage["None"] = 12] = "None";
    })(GamePlayerStage = gameenum.GamePlayerStage || (gameenum.GamePlayerStage = {}));
    /** 玩家状态 */
    var GamePlayerState;
    (function (GamePlayerState) {
        /** 准备 */
        GamePlayerState[GamePlayerState["Ready"] = 0] = "Ready";
        /** 弃牌 */
        GamePlayerState[GamePlayerState["Fold"] = 1] = "Fold";
        /** 旁观 */
        GamePlayerState[GamePlayerState["Bystander"] = 2] = "Bystander";
        /** 看牌 */
        GamePlayerState[GamePlayerState["LookedCard"] = 3] = "LookedCard";
        /** 比牌 */
        GamePlayerState[GamePlayerState["Compared"] = 4] = "Compared";
        /** 放弃 */
        GamePlayerState[GamePlayerState["GiveUp"] = 5] = "GiveUp";
        /** 等待 */
        GamePlayerState[GamePlayerState["Wait"] = 6] = "Wait";
        /** 比输 */
        GamePlayerState[GamePlayerState["Lose"] = 7] = "Lose";
        /** 无 */
        GamePlayerState[GamePlayerState["None"] = 8] = "None";
    })(GamePlayerState = gameenum.GamePlayerState || (gameenum.GamePlayerState = {}));
    /** 玩家操作语音 */
    var GamePlayerTalk;
    (function (GamePlayerTalk) {
        /** 加注 */
        GamePlayerTalk[GamePlayerTalk["AddBet"] = 0] = "AddBet";
        /** 看牌 */
        GamePlayerTalk[GamePlayerTalk["LookingCard"] = 1] = "LookingCard";
        /** 跟注 */
        GamePlayerTalk[GamePlayerTalk["Call"] = 2] = "Call";
        /** 比牌 */
        GamePlayerTalk[GamePlayerTalk["Compared"] = 3] = "Compared";
        /** 准备 */
        GamePlayerTalk[GamePlayerTalk["Ready"] = 4] = "Ready";
        /** 放弃 */
        GamePlayerTalk[GamePlayerTalk["GiveUp"] = 5] = "GiveUp";
        /** 孤注一掷 */
        GamePlayerTalk[GamePlayerTalk["GZYZ"] = 6] = "GZYZ";
        /** 输了 */
        GamePlayerTalk[GamePlayerTalk["Lose"] = 7] = "Lose";
        /** 赢了 */
        GamePlayerTalk[GamePlayerTalk["Win"] = 8] = "Win";
        /** 无 */
        GamePlayerTalk[GamePlayerTalk["None"] = 9] = "None";
    })(GamePlayerTalk = gameenum.GamePlayerTalk || (gameenum.GamePlayerTalk = {}));
    /** 当前游戏状态 */
    var GameStateType;
    (function (GameStateType) {
        /** 游戏玩家准备阶段 */
        GameStateType[GameStateType["CONFIRM"] = 1] = "CONFIRM";
        /** 游戏中 */
        GameStateType[GameStateType["PLAYING"] = 2] = "PLAYING";
        /** 游戏结束*/
        GameStateType[GameStateType["OVER"] = 3] = "OVER";
        /** 未初始化 */
        GameStateType[GameStateType["None"] = 4] = "None";
    })(GameStateType = gameenum.GameStateType || (gameenum.GameStateType = {}));
    /** 玩家可以做的操作 */
    var PlayerAllowActions;
    (function (PlayerAllowActions) {
        /** 准备 */
        PlayerAllowActions["START_PLAY"] = "START_PLAY";
        /** 重新匹配 */
        PlayerAllowActions["CHANGE_TABLE"] = "CHANGE_TABLE";
        /** 下注 */
        PlayerAllowActions["BET"] = "BET";
        /** 看牌 */
        PlayerAllowActions["LOOK"] = "LOOK";
        /** 放弃 */
        PlayerAllowActions["ABANDON"] = "ABANDON";
        /** 比牌 */
        PlayerAllowActions["COMPARE"] = "COMPARE";
        /** 孤注一掷 */
        PlayerAllowActions["GZYZ"] = "GZYZ";
        /** 离开 */
        PlayerAllowActions["LEFT_ROOM"] = "LEFT_ROOM";
    })(PlayerAllowActions = gameenum.PlayerAllowActions || (gameenum.PlayerAllowActions = {}));
})(gameenum || (gameenum = {}));
//# sourceMappingURL=GameEnum.js.map