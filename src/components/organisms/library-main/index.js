import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, MiniPlayer, Loader } from "../../molecules";

let page = 2;

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
};

const onEndReached = (nativeEvent, fetchMore) => {
    if (isCloseToBottom(nativeEvent) && page <= 10) {
        fetchMore(page);
        ++page;
    }
}

const LibraryMain = ({ data, fetchMore }) => <>
    <ScrollView onScroll={({ nativeEvent }) => onEndReached(nativeEvent, fetchMore)} scrollEventThrottle={400}>
        {data.map(e => <Card
            key={e.id}
            image={e.thumbnail}
            title={e.title}
            description={e.album}
        />)}
        {data.length < 100 && <Loader fullscreen={!data.length} />}
    </ScrollView>
    <MiniPlayer
        image="https://www.fujifilm.co.th/globalassets/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_008.jpg"
        title="Hoye"
        description="Rusha & Blizza"
    />
</>;

export default LibraryMain;