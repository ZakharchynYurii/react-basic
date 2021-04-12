import {DataNow} from "./DataNow";

export function UserInfo(props) {
    const {avatar, name, secondName, date} = props;

    return(
        <div>
            <img src={avatar} alt=""/>
            <div>{name} {secondName}</div>
            <DataNow date={date} />
        </div>
    )
}