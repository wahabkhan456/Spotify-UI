import * as React from 'react';
import { Header, MainContent } from "../../molecules";

const SampleScreen = ({ headerText, name }) => <>
    <Header title={headerText} />
    <MainContent name={name} />
</>;

export default SampleScreen;