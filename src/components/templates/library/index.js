import * as React from 'react';
import { LibraryHead, LibraryMain } from "../../organisms";

const Library = ({ headerText, data, fetchMore }) => <>
    <LibraryHead headerText={headerText} />
    <LibraryMain data={data} fetchMore={fetchMore} />
</>;

export default Library;