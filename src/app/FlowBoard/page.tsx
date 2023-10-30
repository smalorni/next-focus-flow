//This renders the flow board main page
//import Flow Board component
import FlowBoardList from "./FlowBoardList";

export default function FlowBoard() {
    return (
        <main>
            <div>
                <h1>My Flow Board</h1>
                <FlowBoardList />
            </div>
                
            <div>
                <h2>📌 PIN NEW IDEA</h2>
            </div>
        </main>
    )
}