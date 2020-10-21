import React from 'react'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';

const TwitterTab = () => {
    return (
        <div>
            <div className="social-feeds">
                <div className="twitter">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="DJIGlobal"
                        options={{ height: 400 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TwitterTab