
import React, { memo } from "react";
import 'antd/dist/antd.css';
import './about.css'
import '../../../index.css'


const About = (props) => {
    return(
        <div className="about-container">
            <h4 className="header-name">about us</h4>
            <div className="target">
                <p>Whatever prosperity means to you, we’re committed to working on your behalf and making it happen. Every day we innovate with our flagship products - TurboTax, QuickBooks, and Mint. So no matter your financial need, we have a solution that can help. Whether you’re a consumer, self-employed, or a small business owner, we’re in your corner to help make your dreams of prosperity come true.</p>
            </div>
            <div className="history">
                <h2>our history</h2>
                <p>There are a lot of articles, posts and books about the importance of typography and how to practice it and implement it well. There are also a lot of articles about using type well on the web. Indeed, I’ve written some of both. But much of what’s been written, my own body of work included, focuses on the larger landscape of typography, and more broadly on how to technically implement web fonts well. Earlier this year, when I began working on a new talk for a couple of events, a different perspective came to mind.
                    A number of years ago, a large bank ran an ad campaign about processing millions of checks every day. The message focused not on processing that many checks successfully, but rather on processing a single check well, and repeating that process millions of times every day. In that same spirit, I thought about typographic systems on the web and how most frameworks focus on building a global system looking in— and how that view could be flipped to develop really great typography from the inside out.
                    Mark Boulton wrote that we should “create layouts from the content out.” Or, as Elliot Jay Stocks wrote, we should be “designing from the type outwards.” In keeping with other leading minds of the day, both were driving at the notion that good design starts with the content, because the final form of consumption (a magazine, a website or a mobile application) now varies widely.
                </p>
            </div>
        </div>
    )
}

export default memo(About)