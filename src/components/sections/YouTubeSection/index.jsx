import * as React from 'react';

export default function YouTubeSection(props) {

    let youTubeLink = props.youTubeLink
    let youTubeID;

    if (videoLink.includes('youtu.be')) {
        youTubeID = videoLink.split('.be/')[1];
        youTubeID = youTubeID.split('?')[0];
    } else {
        youTubeID = videoLink.split('v=')[1];
    }

    return (
        <div className="flex justify-center">
            <iframe class="mb-3" width="560" height="315" src="https://www.youtube-nocookie.com/embed/"{youTubeID} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    );
}
