import './RightPanel.css'
import {useDispatch, useSelector} from "react-redux";

const RightPanel = ({setVisible}) => {
    const status = useSelector(state => state.status)
    const dispatch = useDispatch();
    const isRefresh = useSelector(state => state.isRefresh)

    return (
        <nav className="RPanel">
            {status && <div className="createButton" onClick={()=>setVisible(true)}>Create new post</div>}
            <div className="createButton" onClick={()=>dispatch({type: "set_isRefresh", data: !isRefresh})}>Refresh posts</div>
        </nav>
    );
};

export default RightPanel;