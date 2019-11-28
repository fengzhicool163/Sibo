module gameenum {
    export class ServerErrorCode {
        public static PARAMS_ERROR: number = 4001;
        public static RELOGIN: number = 4009;
        public static SERVER_CLOSE: number = 4013;
        public static REMOTE_LANDING: number = 4015;
        public static errorStatus: any;
    }
}