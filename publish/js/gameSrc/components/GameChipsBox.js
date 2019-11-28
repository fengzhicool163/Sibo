var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var game;
(function (game) {
    var component;
    (function (component) {
        var GameChipsBox = /** @class */ (function (_super) {
            __extends(GameChipsBox, _super);
            function GameChipsBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.localSitBoxs = [];
                _this.chipShowList = [];
                _this.chipShowMap = {};
                return _this;
            }
            GameChipsBox.sortFunc = function (a, b) {
                return a - b;
            };
            Object.defineProperty(GameChipsBox, "chipList", {
                /** 筹码列表 */
                get: function () {
                    if (this._chipList)
                        return this._chipList;
                    this._chipList = [];
                    for (var key in game.asset.AssetConfig.ChipImageMap) {
                        var chipNum = parseFloat(key);
                        this._chipList.push(chipNum);
                    }
                    this._chipList.sort(this.sortFunc);
                    return this._chipList;
                },
                enumerable: true,
                configurable: true
            });
            GameChipsBox.prototype.initComponents = function () {
                this.chipPool = new util.PoolUtil(items.GameChipItem, 20, 50);
                this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                this.posNode = this.bindObj.getChildByName("posNode");
                // for (let index = 0; index < 5; index++) {
                // 	const posBox = posNode.getChildByName("localSit" + index) as Laya.Box;
                // 	this.localSitBoxs.push(posBox);
                // }
            };
            GameChipsBox.prototype.destroy = function () {
                this.chipPool.destroy();
                _super.prototype.destroy.call(this);
            };
            /** 根据总下注数反推筹码构成，不准确，除非服务器改协议 */
            GameChipsBox.prototype.getChipNumList = function (betNum) {
                var chipNums = [];
                var leftBetNum = betNum;
                while (leftBetNum > 0) {
                    //先扫描有数值的筹码
                    for (var index = GameChipsBox.chipList.length - 1; index >= 0; --index) {
                        var chipNum = GameChipsBox.chipList[index];
                        //扫到0筹码了
                        if (chipNum == 0) {
                            leftBetNum = 0;
                            chipNums.push(chipNum);
                            break;
                        }
                        else if (chipNum <= leftBetNum) { //取筹码金额
                            leftBetNum -= chipNum;
                            chipNums.push(chipNum);
                            break;
                        }
                    }
                }
                return chipNums;
            };
            /** 获取要下注的筹码列表 */
            GameChipsBox.prototype.getChipsWithBetNum = function (betNum) {
                var chipList = [];
                var chipNums = this.getChipNumList(betNum);
                for (var index = 0; index < chipNums.length; index++) {
                    var chipNum = chipNums[index];
                    var chip = this.chipPool.getItem();
                    this.bindObj.addChild(chip);
                    chip.setChipNum(chipNum);
                    chipList.push(chip);
                    this.chipShowMap[chipNum] = chip;
                    this.chipShowList.push(chip);
                }
                return chipList;
            };
            /**
             * 玩家下注
             * @param localSit 玩家本地座位
             * @param betNum 下注金额
             */
            GameChipsBox.prototype.callBetNum = function (userId, localSit, betNum, isAnim, flyTime) {
                if (isAnim === void 0) { isAnim = true; }
                if (flyTime === void 0) { flyTime = 1000; }
                //var localSitPos = this.localSitBoxs[localSit];
                var sitName = (userId == UserInfoManger.UserId) ? "localSit1" : "localSit0";
                var startPos = this.posNode.getChildByName(sitName);
                var localSitPos = this.posNode.getChildByName(localSit);
                var chipList = this.getChipsWithBetNum(betNum);
                var moveX = localSitPos.x;
                var moveY = localSitPos.y;
                if (userId == UserInfoManger.UserId) {
                    EventManager.dispath(game.event.GameEvent.UPDATE_BET_AREA, localSit);
                }
                //播放筹码音效
                if (isAnim) {
                    //chipList.length > 1 ? SoundManager.PlayChipMore() : SoundManager.PlayChipOne();
                    if (userId == UserInfoManger.UserId && chipList.length == 1) {
                        game.SoundManager.PlayChipOne();
                    }
                    else {
                        game.SoundManager.PlayChipMore();
                    }
                }
                //飞筹码
                for (var index = 0; index < chipList.length; index++) {
                    var chip = chipList[index];
                    chip.setTargetArea(localSit);
                    chip.setStartPos(startPos.x, startPos.y);
                    //var moveX = util.NumberUtils.getRandomNum(chip.width / 2, this.bindObj.width - chip.width / 2);
                    //var moveY = util.NumberUtils.getRandomNum(chip.height / 2, this.bindObj.height - chip.height / 2);
                    if (isAnim) {
                        //筹码初始化位置
                        chip.flyChip(startPos.x, startPos.y, moveX, moveY, flyTime);
                    }
                    else {
                        chip.pos(moveX, moveY);
                        chip.visible = true;
                    }
                }
            };
            /** 筹码结算 */
            GameChipsBox.prototype.ChipSettlement = function (settlementPlayerObjs, isAnim) {
                if (isAnim === void 0) { isAnim = true; }
                var winPlayer = settlementPlayerObjs[0];
                if (!isAnim) {
                    this.clearAllChip();
                }
                else {
                    var pos = this.localSitBoxs[winPlayer.localSeatIndex];
                    //飞筹码
                    for (var index = 0; index < this.chipShowList.length; index++) {
                        var chip = this.chipShowList[index];
                        chip.flyChip(chip.x, chip.y, pos.x, pos.y);
                    }
                }
            };
            /*** 筹码派彩，从荷官飞到下注区域 */
            GameChipsBox.prototype.chipPush = function () {
                var startPos = this.posNode.getChildByName("dealerSit");
                for (var i = 0; i < this.chipShowList.length; i++) {
                    var chip = this.chipShowList[i];
                    var name = chip.getTargetArea();
                    var dianshuCode = this.gameCtrl.roomObj.getWinArea(name);
                    if (dianshuCode) {
                        var endPosX = chip.x;
                        var endPosY = chip.y;
                        //chip.x = startPos.x;
                        //chip.y = startPos.y;
                        chip.visible = true;
                        chip.flyChip(startPos.x, startPos.y, endPosX, endPosY, 1000, true);
                        //Laya.timer.once(100+ i*20 , this , this.p ,[startPos ,chip],false);
                    }
                }
            };
            GameChipsBox.prototype.p = function (startPos, chip) {
                var endPosX = chip.x;
                var endPosY = chip.y;
                chip.x = startPos.x;
                chip.y = startPos.y;
                chip.visible = true;
                chip.flyChip(startPos.x, startPos.y, endPosX, endPosY, 200, true);
            };
            /*********** 结算金币的动画 */
            GameChipsBox.prototype.chipSettlement = function (data) {
                for (var i = 0; i < this.chipShowList.length; i++) {
                    var chip = this.chipShowList[i];
                    var name = chip.getTargetArea();
                    var dianshuCode = this.gameCtrl.roomObj.getWinArea(name);
                    if (dianshuCode) {
                        //var endPosX = chip.getStartPosX();
                        //var endPosY = chip.getStartPosY();
                        //chip.flyChip(chip.x , chip.y , endPosX , endPosY);
                        Laya.timer.once(50 + i * 10, this, this.chipSettlementOneByOne, [chip], false);
                    }
                }
            };
            GameChipsBox.prototype.chipSettlementOneByOne = function (chip) {
                var endPosX = chip.getStartPosX();
                var endPosY = chip.getStartPosY();
                chip.flyChip(chip.x, chip.y, endPosX, endPosY, 500);
            };
            /** 清空所有筹码 */
            GameChipsBox.prototype.clearAllChip = function () {
                for (var index = 0; index < this.chipShowList.length; index++) {
                    var chip = this.chipShowList[index];
                    chip.clearChip();
                    this.chipPool.recover(chip);
                }
                this.chipShowList.length = 0;
                this.chipShowMap = {};
            };
            return GameChipsBox;
        }(common.component.UIComponent));
        component.GameChipsBox = GameChipsBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameChipsBox.js.map