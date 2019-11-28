var game;
(function (game) {
    var event;
    (function (event) {
        var GameEvent = /** @class */ (function () {
            function GameEvent() {
            }
            GameEvent.UPDATE_BET_BAR = "update_bet_bar";
            GameEvent.UPDATE_BET_AREA = "update_bet_area";
            GameEvent.UPDATE_USER_BALANCE = "update_user_balance";
            GameEvent.UPDATE_GAME_REC = "update_game_rec";
            GameEvent.UPDATE_BET_MONEY = "update_bet_money";
            GameEvent.TIPS = "update_tis";
            GameEvent.UPDATE_REBET = "update_rebet";
            GameEvent.BALANCE_CHECK = "balance_check";
            return GameEvent;
        }());
        event.GameEvent = GameEvent;
    })(event = game.event || (game.event = {}));
})(game || (game = {}));
//# sourceMappingURL=GameEvent.js.map