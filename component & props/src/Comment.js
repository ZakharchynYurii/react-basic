import { UserInfo } from "./UserInfo";
import { Massage } from "./Massage";


export function Comment(props) {
    const {data, avatar, massage, name, secondName} = props;

    return(
        <div className={'card m-5 p-3'}>
            <div className={'d-flex align-items-center'}>
                <UserInfo
                    avatar={avatar}
                    name={name}
                    secondName={secondName}
                    date={data}
                />

                <div className={'card-body'}>
                    <Massage massage={massage} />
                </div>
            </div>
        </div>
    )
}