import React from "react"
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import "./detail-body.css"


function DetailBody(){
    return (
        <article className = "question-article">
            <div className = "question-article__image">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
             </div>
             <div className = "question-article__content">
                    <div className = "content-header">
                        <span className = "content-header__name">Name: <span>Akash</span> </span>
                        <span>Asked at:<span>2020/20/20</span> </span>
                    </div>
                    <div className = "content-question">
                        <h2>What is javascript ? Why is this very complicate --- Why ?</h2>
                        <p className = "individual-answer"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo s obcaecati voluptas sunt eaque cum expedita reprehenderit! </p>
                        <p className = "tag">React</p>
                    </div>
                    <div className = "content-footer">
                        <div className = "content-footer__right">
                                        <button className = "icon__thumbUp"><span><ThumbUpIcon /></span>2<span></span></button>
                                        <button className = "icon__thumbDown"><span><ThumbDownIcon /></span>2<span></span></button>
                                        <button className = "icon__comment"> <span><ChatBubbleIcon /> </span> <span>Answer</span> <span>5</span></button>
                        </div>
                        <div className = "content-footer__left">
                            <p className = "answer">Answer</p>
                        </div>
                    </div>
                    
             </div>
        </article>
    )
}
export default DetailBody