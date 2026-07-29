import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useResultStore } from '../../../../store/useAcitvityResult';
import { LoadingAnimation } from '../../../../components/shared/LoadingAnimation';
import IdleBackgroundAnimation from './assets/activity_idle_bg.png';
import SuccessBackgroundAnimation from './assets/activity_success_bg.png';
import {SuccessFireworks } from '../../../../components/shared/SuccessFireworks';
import { useGameScale } from '../../../../components/shared/useGameScale';
import { InteractiveButton } from './InteractiveButton';
import { useMiningBattle } from './logic/useMiningBattle';
import { BattleHUD } from './components/BattleHUD';
//Controls the overall mining activity
export default function MiningSimulator() {
    const scale = useGameScale();
    const navigate = useNavigate();
    const openModal = useResultStore(state => state.openModal);
    const [isLoaded, setIsLoaded] = useState(false);

    // Starting the game motor, 250 clicks to win, 4.17 H/s for the enemy, 60 seconds time limit
    const { studentClicks, studentHashrate, enemyClicks, enemyHashrate, timeLeft, status, hashes, handleStudentClick } = useMiningBattle(250, 4.17, 60);

    //Preloading all heavy assets
    useEffect(() => {
        const assetsToPreload = [IdleBackgroundAnimation, SuccessBackgroundAnimation];
        
        const preloadPromises = assetsToPreload.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        //To hide loading screen
        Promise.all(preloadPromises)
            .then(() => {
                setIsLoaded(true);
            })
            .catch(err => {
                console.error("Error preloading assets:", err);
                setIsLoaded(true);
            });
    }, []);

    //Effect to handle the activity's end, throwing a modal with the results and stats of the activity
    useEffect(() => {
        if (status === 'WON') {
            const calculatedStars = timeLeft >= 20 ? 3 : timeLeft >= 10 ? 2 : 1;
            setTimeout(() => {
                openModal({
                    status: 'victory',
                    stars: calculatedStars,
                    title: 'Block Found!',
                    message: 'You helped securing Bitcoin\'s network and claimed your reward.',
                    stats: [
                        { label: 'Time left', value: `${timeLeft}s` },
                        { label: 'Your average Hashrate', value: `${studentHashrate.toFixed(2)} H/s` },
                        { label: 'Valid Hash', value: hashes.finalHash ? hashes.finalHash.substring(0, 16) + '...' : 'N/A' }
                    ],
                    onNext: () => navigate('/'), // In time this will redirect the user to the next activity
                    onRetry: () => navigate(0)
                });
            }, 13000);
        } else if (status === 'LOST') {
            setTimeout(() => {
                openModal({
                    status: 'defeat',
                    stars: 0,
                    title: 'Failure!',
                    message: 'Another miner found the valid Hash before you.',
                    stats:[],
                    onNext: null, 
                    onRetry: () => navigate(0) 
                });
            }, 4000);
        }
    }, [status, timeLeft, studentClicks, enemyClicks, studentHashrate, hashes.finalHash, navigate, openModal]);
    //Loading Screen
    if (!isLoaded) {
        return (
            <div className="h-[calc(100dvh-4rem)] w-full flex flex-col items-center justify-center bg-neutral-950 text-green-400 font-mono">
                <LoadingAnimation />
            </div>
        );
    }
    //Main Activity Screen
    return (
        <div className="h-[calc(100dvh-4rem)] w-full relative overflow-hidden bg-neutral-950 select-none">
            <div className="absolute top-[50%] left-[50%] w-[1920px] h-[1080px]" style={{transform: `translate(-50%, -50%) scale(${scale})`,transformOrigin: 'center'}}>
                {/* Battle HUD */}
                <div className="absolute z-30">
                    <BattleHUD 
                        studentClicks={studentClicks} 
                        studentHashrate={studentHashrate} 
                        enemyClicks={enemyClicks} 
                        enemyHashrate={enemyHashrate} 
                        timeLeft={timeLeft} 
                        targetClicks={250} 
                    />
                </div>
                {/* MONITORS */}
                
                {/* Left Monitor (Mining process) */}
                <div className="absolute top-[280px] left-[490px] w-[380px] h-[350px] z-0 flex flex-col bg-green-950 text-green-300 p-6 font-mono border-4 border-black"
                    style={{transform: 'perspective(600px) rotateY(12deg) rotateX(2deg) skewY(-3deg)', transformOrigin: 'center right', willChange: 'transform'}}>
                    
                    <h2 className="text-lg border-b border-green-400 pb-2 mb-2 uppercase tracking-widest flex justify-between">
                        <span className='opacity-70'>Mining Process:</span>
                        {status === 'IDLE' && <span className="animate-pulse text-gray-500">WAITING</span>}
                        {status === 'PLAYING' && <span className="animate-pulse text-orange-500">MINING...</span>}
                        {status === 'WON' && <span className="text-yellow-400">FOUND</span>}
                        {status === 'LOST' && <span className="text-red-500">FAILED</span>}
                    </h2>
                    
                    <div className="flex-1 overflow-hidden flex flex-col gap-1">
                        <div className="flex flex-row gap-2">
                            <div className="text-lg">
                                <span className="opacity-60">Version:</span>
                                <span className="text-sm opacity-90">0x00000001</span>
                            </div>
                            <div className="text-lg">
                                <span className="opacity-60">Bits:</span>
                                <span className="text-sm opacity-90">0x1d00ffff</span>
                            </div>
                        </div>
                        <div className="text-lg">
                            <span className="opacity-60">Target: </span>
                            <span className="text-sm break-all opacity-90">00000000ffff0000000000000...</span>
                        </div>
                        {status === 'IDLE' && (
                            <span className="border-t border-green-400 text-xl text-gray-300 mt-4 pt-2 animate-pulse">AWAITING INITIALIZATION...</span>
                        )}
                        {status === 'PLAYING' && (
                            <div className="border-t border-green-400 gap-4">
                                <div className="text-lg mt-2">
                                    <span className="opacity-60">Nonce: </span>
                                    <span>{2083236000 + studentClicks}</span>
                                </div>
                                <div className="flex flex-col text-lg">
                                    <span className="opacity-60">First Hash(SHA-256):</span>
                                    <span className="text-base break-all leading-tight">{hashes.firstHash}</span>
                                </div>
                                <div className="flex flex-col text-lg">
                                    <span className="opacity-60">Final Hash(Double SHA-256):</span>
                                    <span className="text-base text-red-500 opacity-70 break-all leading-tight">{hashes.finalHash}</span>
                                </div>
                            </div>
                        )}
                        {status === 'WON' && (
                            <div className="border-t border-green-400 gap-4">
                                <div className="border-t border-green-400 gap-4">
                                    <div className="text-lg mt-2">
                                        <span className="opacity-60">Nonce: </span>
                                        <span>{2083236000 + studentClicks}</span>
                                    </div>
                                    <div className="flex flex-col text-lg">
                                        <span className="opacity-60">First Hash(SHA-256):</span>
                                        <span className="text-base break-all leading-tight">{hashes.firstHash}</span>
                                    </div>
                                    <div className="flex flex-col text-lg">
                                        <span className="opacity-60">Final Hash(Double SHA-256):</span>
                                        <span className="text-base text-yellow-600 opacity-70 break-all leading-tight">{hashes.finalHash}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {status === 'LOST' && (
                            <span className="border-t border-green-400 text-xl text-gray-300 mt-4 pt-2 animate-pulse">ERR: CONNECTION LOST</span>
                        )}
                    </div>
                </div>

                {/* Right Monitor (Hardcoded Genesis Block's Data) */}
                <div className="absolute top-[320px] left-[1100px] w-[350px] h-[320px] z-0 flex flex-col bg-green-950 text-green-300 p-6 font-mono border-4 border-black"
                    style={{transform: 'perspective(600px) rotateY(-14deg) rotateX(3deg) skewY(3deg)', transformOrigin: 'center left', willChange: 'transform'}}>
                    
                    <h2 className="flex flex-row text-lg border-b border-green-400 pb-2 mb-2 uppercase tracking-widest">
                        Block: <h2 className="text-white">0 (Genesis)</h2> 
                    </h2>
                    <div className=" flex flex-col space-y-2">
                        <div>
                            <p className="text-lg opacity-60">Merkle Root:</p>
                            <p className="text-sm break-all">4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b</p>
                        </div>
                        <div className="gap-16 flex flex-row">
                            <div className="flex flex-col">
                                <p className="text-lg opacity-60">Timestamp:</p>
                                <p className="text-sm">1231006505</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg opacity-60">Size:</p>
                                <p className="text-sm">285 Bytes</p>
                            </div>
                        </div>
                        
                        {/* Satoshi's Genesis block's easter egg revelation */}
                        {status === 'WON' && (
                            <div className="animate-pulse  mt-4 p-2 bg-green-400/20 border border-green-400 rounded-xs text-xs">
                                <p className="opacity-70 mb-1">Coinbase Decoded:</p>
                                <p className="text-white">"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Dynamic Background Animations */}
                {(status === 'IDLE' || status === 'PLAYING' || status === 'LOST') && (
                    <img 
                    src={IdleBackgroundAnimation} 
                    alt="Background Idle" 
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none transform-gpu will-change-transform"
                    style={{ imageRendering: 'pixelated' }}
                />
                )}
                {(status === 'WON') && (
                    <img 
                    src={SuccessBackgroundAnimation} 
                    alt="Background Success" 
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none transform-gpu will-change-transform"
                    style={{ imageRendering: 'pixelated' }}
                />
                )}

                {/* Interactive Mining Button  */}
                <div className="absolute top-[690px] left-[860px] z-20">
                    <InteractiveButton 
                        onClick={handleStudentClick} 
                        disabled={status === 'WON' || status === 'LOST'} 
                    />
                </div>

                {/* Success Fireworks Animation */}
                {status === 'WON' && (
                    <div>
                        <SuccessFireworks />
                    </div>
                )}
            </div>
        </div>
    );
}