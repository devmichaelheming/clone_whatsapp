import React, { useState, useEffect } from 'react'
import styles from './App.module.scss'

import { DonutLarge, Chat, MoreVert, Search } from '@material-ui/icons';

import { ChatListItem } from "./components/ChatListItem";
import { ChatIntro } from "./components/ChatIntro";
import { ChatWindow } from "./components/ChatWindow";

export default function App() {
    const [chatList, setChatList] = useState([
        {chatId: 1, title: 'Fulano de tal', avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'},
        {chatId: 1, title: 'Fulano de tal', avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'},
        {chatId: 1, title: 'Fulano de tal', avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'},
        {chatId: 1, title: 'Fulano de tal', avatar: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'},
    ]);
    const [activeChat, setActiveChat] = useState({});

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <header>
                    <img
                        className={styles.headerAvatar}
                        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt="Avatar"
                    />

                    <div className={styles.headerButtons}>
                        <div className={styles.headerBtn}>
                            <DonutLarge style={{ color: "#919191" }} />
                        </div>
                        <div className={styles.headerBtn}>
                            <Chat style={{ color: "#919191" }} />
                        </div>
                        <div className={styles.headerBtn}>
                            <MoreVert style={{ color: "#919191" }} />
                        </div>
                    </div>
                </header>
                <div className={styles.search}>
                    <div className={styles.searchInput}>
                        <Search fontSize="small" style={{ color: "#919191" }} />
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </div>
                </div>
                <div className={styles.chatlist}>
                    {
                        chatList.map((item, key) => (
                            <ChatListItem
                                key={key}
                                data={item}
                                active={activeChat.chatId === chatList[key].chatId}
                                onClick={()=>setActiveChat(chatList[key])}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.contentArea}>
                    {activeChat.chatId !== undefined &&
                        <ChatWindow />
                    }
                    {activeChat.chatId === undefined &&
                        <ChatIntro />  
                    }
            </div>
        </div>
    )
}