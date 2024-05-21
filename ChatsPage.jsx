import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='4f198b7f-4883-42b8-85ff-0717de2ee511'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}
export default ChatsPage;
