import React from "react";

import styles from "./styles.module.scss";

interface Data {
    id: number;
    title: string;
    avatar: string;
  }

type Props = {
    active: boolean;
    data: Data;
    onClick: () => void;
}

export function ChatListItem({onClick, active, data}: Props) {
    return (
        <div
            className={active === true ? `${styles.container} ${styles.active}` : styles.container}
            onClick={onClick}
        >
            <img className={styles.avatar} src={data.avatar} alt="avatar" />
            <div className={styles.lines}>
                <div className={styles.line}>
                    <div className={styles.name}>{data.title}</div>
                    <div className={styles.date}>12:45</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.lastMessage}>
                        <p>A casa esta trancada</p>
                    </div>
                </div>
            </div>
        </div>
    )
}