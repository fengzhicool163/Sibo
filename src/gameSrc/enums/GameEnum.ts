
module gameenum {

    /** 服务器玩家阶段 */
    export enum SeverPlayerStage {
        JOIN = "JOIN",			    //(0,"加入"),
        START_PLAY = "START_PLAY",	//(1,"开始"),
        THINKING = "THINKING",		//(2,"思考"),
        WAIT = "WAIT",			    //(3,"等待"),
        LOOK = "LOOK",	            //(4,"看牌"),
        FOLD = "FOLD",			    //(5,"弃牌"),
        OVER = "OVER",			    //(6,"比输"),
        WINNER = "WINNER",		    //(7,"赢家"),
        CHANGE = "CHANGE",		    //(8,"换桌"),
        LEFT = "LEFT",			    //(9,"离开"),
        BYSTANDER = "BYSTANDER",    //(10,"旁观");
    }

    /** 玩家游戏阶段 */
    export enum GamePlayerStage {
        /** 未准备 */
        UnReady = 1,
        /** 准备 */
        Ready,
        /** 发牌阶段 */
        SendCard,
        /** 比牌胜利 */
        ComparedWin,
        /** 等待其他玩家操作 */
        Wating,
        /** 玩家自己操作中 */
        Playing,
        /** 比牌 */
        Compared,
        /** 结束 */
        Over,
        /** 比牌输了 */
        ComparedLose,
        /** 弃牌 */
        Fold,
        /** 旁观 */
        Bystander,
        /** 无 */
        None,
    }

    /** 玩家状态 */
    export enum GamePlayerState {
        /** 准备 */
        Ready,
        /** 弃牌 */
        Fold,
        /** 旁观 */
        Bystander,
        /** 看牌 */
        LookedCard,
        /** 比牌 */
        Compared,
        /** 放弃 */
        GiveUp,
        /** 等待 */
        Wait,
        /** 比输 */
        Lose,
        /** 无 */
        None,
    }

    /** 玩家操作语音 */
    export enum GamePlayerTalk {
        /** 加注 */
        AddBet,
        /** 看牌 */
        LookingCard,
        /** 跟注 */
        Call,
        /** 比牌 */
        Compared,
        /** 准备 */
        Ready,
        /** 放弃 */
        GiveUp,
        /** 孤注一掷 */
        GZYZ,
        /** 输了 */
        Lose,
        /** 赢了 */
        Win,
        /** 无 */
        None,
    }

    /** 当前游戏状态 */
    export enum GameStateType {
        /** 游戏玩家准备阶段 */
        CONFIRM = 1,
        /** 游戏中 */
        PLAYING = 2,
        /** 游戏结束*/
        OVER = 3,
        /** 未初始化 */
        None = 4,
    }

    /** 玩家可以做的操作 */
    export enum PlayerAllowActions {
        /** 准备 */
        START_PLAY = "START_PLAY",
        /** 重新匹配 */
        CHANGE_TABLE = "CHANGE_TABLE",
        /** 下注 */
        BET = "BET",
        /** 看牌 */
        LOOK = "LOOK",
        /** 放弃 */
        ABANDON = "ABANDON",
        /** 比牌 */
        COMPARE = "COMPARE",
        /** 孤注一掷 */
        GZYZ = "GZYZ",
        /** 离开 */
        LEFT_ROOM = "LEFT_ROOM",
    }

}
