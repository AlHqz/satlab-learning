import { useState, useEffect, useRef, useCallback } from 'react';
import MiningWorker from './mining.worker?worker';

export const useMiningBattle = (targetClicks: number, enemyClicksPerSecond: number, timeLimitSeconds: number) => {
    const [studentClicks, setStudentClicks] = useState(0);
    const [studentHashrate, setStudentHashrate] = useState(0);
    const [enemyClicks, setEnemyClicks] = useState(0);
    const [enemyHashrate, setEnemyHashrate] = useState(0);
    const [timeLeft, setTimeLeft] = useState(timeLimitSeconds);
    const [status, setStatus] = useState<'IDLE' | 'PLAYING' | 'WON' | 'LOST'>('IDLE');
    
    const [hashes, setHashes] = useState({
        firstHash: 'AWAITING INITIALIZATION...',
        finalHash: 'AWAITING INITIALIZATION...'
    });

    const requestRef = useRef<number>(null);
    const startTimeRef = useRef<number>(null);
    const lastRenderTimeRef = useRef<number>(0);
    const recentClicksRef = useRef<number[]>([]);
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new MiningWorker();

        workerRef.current.onmessage = (e) => {
            setHashes(e.data);
        };

        return () => {
            if (workerRef.current) workerRef.current.terminate();
        };
    }, []);

    const gameLoop = useCallback((time: number) => {
        if (!startTimeRef.current) startTimeRef.current = time;
        const elapsedTime = (time - startTimeRef.current) / 1000;

        const currentEnemyClicks = Math.floor(elapsedTime * enemyClicksPerSecond);
        const currentTimeLeft = Math.max(timeLimitSeconds - Math.floor(elapsedTime), 0);
        
        recentClicksRef.current = recentClicksRef.current.filter(clickTime => time - clickTime <= 1000);

        if (currentTimeLeft <= 0 && status === 'PLAYING') {
            setStatus('LOST');
            setHashes({ firstHash: 'ERR: TIME OUT', finalHash: 'ERR: CONNECTION LOST' });
            return;
        }

        if (time - lastRenderTimeRef.current > 100) {
            setEnemyClicks(currentEnemyClicks);
            setTimeLeft(currentTimeLeft);
            setStudentHashrate(recentClicksRef.current.length);
            setEnemyHashrate(elapsedTime > 0 ? currentEnemyClicks / elapsedTime : 0);
            
            lastRenderTimeRef.current = time;
        }

        if (status === 'PLAYING') {
            requestRef.current = requestAnimationFrame(gameLoop);
        }
    }, [status, enemyClicksPerSecond, timeLimitSeconds]);

    useEffect(() => {
        if (status === 'PLAYING') {
            requestRef.current = requestAnimationFrame(gameLoop);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [status, gameLoop]);

    const handleStudentClick = useCallback(() => {
        if (status === 'LOST' || status === 'WON') return;

        if (status === 'IDLE') {
            setStatus('PLAYING');
        }

        recentClicksRef.current.push(performance.now());
        const nextClicks = studentClicks + 1;
        const currentNonce = 2083236000 + nextClicks;

        setStudentClicks(nextClicks);

        if (nextClicks >= targetClicks) {
            setStatus('WON');
            setHashes({
                firstHash: "53a0604c63db6d45e4544b8b64b3ef86cf6f2a67e5ca24a0d9b491a6d96e5b8a", 
                finalHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
            });
        } else {
            if (workerRef.current) {
                workerRef.current.postMessage({ nonce: currentNonce });
            }
        }
    }, [status, studentClicks, targetClicks]);

    return { studentClicks, studentHashrate, enemyClicks, enemyHashrate, timeLeft, status, hashes, handleStudentClick };
};