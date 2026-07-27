export const BattleHUD = ({ studentClicks, studentHashrate, enemyClicks, enemyHashrate, timeLeft, targetClicks }) => {
    // Logic variables
    const lowTime = timeLeft <= 10;
    const studentPercentage = Math.min((studentClicks / targetClicks) * 100, 100);
    const enemyPercentage = Math.min((enemyClicks / targetClicks) * 100, 100);

    return (
        <div className="absolute p-4 font-mono text-green-300">
            {/* Timer container */}
            <div className="absolute top-[5px] left-[825px] bg-black/30 rounded-xl">
                {!lowTime ? 
                <h3 className="text-8xl text-center m-4 uppercase animate-pulse">
                    00:{timeLeft.toString().padStart(2, '0')}
                </h3>:
                <h3 className="text-8xl text-center m-4 text-red-500 uppercase animate-pulse">
                    00:{timeLeft.toString().padStart(2, '0')}
                </h3>}
            </div>
            
            {/* Hashrates' container */}
            <div className="p-4 absolute top-[200px] left-[20px] h-[400px] w-[300px] bg-black/30 rounded-xl border-2 border-green-300 flex flex-col">
                <p className="text-4xl mb-6 text-center">Hashrates</p>
                
                {/* Hashrate bars' container */}
                <div className="flex-1 flex flex-row justify-around items-end mb-2">
                    
                    {/* Sutdent's progress bar*/}
                    <div className="h-full flex flex-col items-center">
                        <div className="flex-1 w-6 bg-gray-900 rounded-xl border-3 border-green-300 flex flex-col justify-end overflow-hidden mb-4">
                            <div 
                                className="w-full bg-green-300 transition-all duration-100" 
                                style={{ height: `${studentPercentage}%` }}
                            />
                        </div>
                        <p className="text-2xl text-center text-green-300">You:<br/>{studentHashrate.toFixed(2)} H/s</p>
                    </div>

                    {/* "Enemy" miner's progress bar*/}
                    <div className="h-full flex flex-col items-center">
                        <div className="flex-1 w-6 bg-gray-900 rounded-xl border-3 border-red-500 flex flex-col justify-end overflow-hidden mb-4">
                            <div 
                                className="w-full bg-red-500 transition-all duration-300 linear" 
                                style={{ height: `${enemyPercentage}%` }}
                            />
                        </div>
                        <p className="text-2xl text-center text-red-500">Miner:<br/>{enemyHashrate.toFixed(2)} H/s</p>  
                    </div>
                    
                </div>
            </div>
        </div>
    );
};