import {Comment} from "./Comment";

export function App() {
    const comment = {
        data: `${new Date().toLocaleDateString()} ${(new Date().getHours() < 10) ? '0' + new Date().getHours() : new Date().getHours()}:${(new Date().getMinutes() < 10) ? '0' + new Date().getMinutes() : new Date().getMinutes()}:${(new Date().getSeconds() < 10) ? '0' + new Date().getSeconds() : new Date().getSeconds()}`,
        massage: 'Hello world, this is massage',
        author: {
            name: 'Yurii',
            secondName: 'Zakharchyn',
            avatarUrl: 'https://placekitten.com/g/64/64'
        }
    }


    return(
        <div>
            <Comment
                data={comment.data}
                massage={comment.massage}
                name={comment.author.name}
                secondName={comment.author.secondName}
                avatar={comment.author.avatarUrl}
            />
        </div>
    )
}