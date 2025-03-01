import './chat.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Chat() {
    const [chat, setChat] = useState(null);
    return (
        <div className="chat">
            {chat ?
                <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        John Doe
                        </div>
                        
                        <span className="close" onClick={() => setChat(null)}>
                            <img src="/close.png" alt="" />
                    </span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>
                            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet
                        </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
                </div>
                :<>
                    <div className="top">
                        <div className="title"><h1>Messages</h1></div>
                        <Link className="closeMsg" to="/profile">
                            <img src="/close.png" alt="" />
                        </Link>
                    </div>
            <div className="messages">
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={()=>setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                            Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div></>}
        </div>
    );
}

export default Chat;