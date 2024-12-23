
export function VideoCard(props:any) {
    return <div>
    <img src={props.thumbnail}></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img src={props.logo} className="rounded-full size-17 p-3"></img>
            </div>
            <div className="col-span-11 p-3" >
               {props.title}
                <div className="text-gray-400 text-base ">
                    {props.author}
                </div>
                <div className="text-gray-400 text-base ">
                   {props.views} | {props.timeStamp}
                </div>
            </div>
        </div>
    </div>
}