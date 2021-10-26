import React from "react";
import {
    Search,
    MoreVert,
    AttachFile,
    InsertEmoticon,
    Close,
    Send,
    Mic
} from '@material-ui/icons';

import styles from "./styles.module.scss";
import { Picker } from 'emoji-picker-react';

export function ChatWindow() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>

                <div className={styles.headerInfo}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt=""/>
                    <div className={styles.name}>Michael Heming</div>
                </div>

                <div className={styles.headerButtons}>
                    <div className={styles.btn}>
                        <Search
                            style={{ color: "#919191" }}
                        />
                    </div>
                    <div className={styles.btn}>
                        <AttachFile
                            style={{ color: "#919191" }}
                        />
                    </div>
                    <div className={styles.btn}>
                        <MoreVert
                            style={{ color: "#919191" }}
                        />
                    </div>
                </div>

            </div>
            <div className={styles.body}>

            </div>

            <div className={styles.emojiArea}>
                <Picker
                    // disableSearchBar
                    // disableSkinTonePicker
                />
            </div>

            <div className={styles.footer}>

                <div className={styles.pre}>
                    <div className={styles.btn}>
                        <Close
                            style={{ color: "#919191" }}
                        />
                    </div>

                    <div className={styles.btn}>
                        <InsertEmoticon
                            style={{ color: "#919191" }}
                        />
                    </div>
                </div>

                <div className={styles.inputArea}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Digite uma mensagem"
                    />
                </div>

                <div className={styles.pos}>
                    <div className={styles.btn}>
                        <Send
                            style={{ color: "#919191" }}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}