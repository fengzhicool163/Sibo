module util{
    export class Tool{
        public static size(obj:any):number{
            var size:number = 0;
            for(let key in obj){
                size = size + 1;
            }
            return size;
        }
    }
}