import * as React from 'react';
import { Header, PlayButton } from "../../molecules";

const LibraryHead = ({ headerText }) => <>
    <Header title={headerText} />
    <PlayButton buttonBgColor="#1ab953" text="Shuffle Play" bgColor="#25292a" />
</>;

export default LibraryHead;