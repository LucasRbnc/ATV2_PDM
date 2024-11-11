import React from 'react';
import { createContext, useEffect, useState, ReactNode } from 'react';
import { LastResults } from '../services/lotoapi';
import { Results } from '../types/types';

interface LotteryContexts {
    results: Results | null;
    loading: boolean;
}

interface LotteryProviderProps {
    children: ReactNode;
}

export const LotteryContext = createContext<LotteryContexts>({} as LotteryContexts);

export const LotteryProvider: React.FC<LotteryProviderProps> = ({ children }) => {
    const [ results, setResults ] = useState<Results | null> (null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const loadResults = async () => {
            setLoading(true);
            const data = await LastResults();
            setResults(data);
            setLoading(false);
        };
        loadResults();
    }, []);

    return (
        <LotteryContext.Provider value={{results,loading}}>
            {children}
        </LotteryContext.Provider>
    );
};