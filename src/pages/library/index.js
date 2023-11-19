import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData, cleanState } from "../../store/actions/data";
import { Library } from "../../components/templates";

const LibraryPage = () => {
    const { data, error } = useSelector(state => state.data);
    const dispatch = useDispatch();

    const fetchMore = (page) => {
        dispatch(getData({ page }));
    }

    useEffect(() => {
        dispatch(cleanState());
        dispatch(getData({ page: 1 }));
    }, []);

    return <Library headerText="Ambient Relaxation" data={data} fetchMore={fetchMore} />
};

export default LibraryPage;