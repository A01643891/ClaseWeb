
const Dashboard = () =>{
    return (
        <div className="flex justify-center items-center flex-col">
            <div className=" m-4 text-4xl">
                Spotify Music
            </div>
            <div className="m-2 border-black border-2">
                <input className="px-2 py-1 " type="text"
                name="song"
                placeholder="Look for a song"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="text-2xl m-2">
                        1.
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">
                            Hail to the King
                        </div>
                        
                        <div>
                            Avenged Sevenfold
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="text-2xl m-2">
                        2.
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">
                            Bury the Light
                        </div>
                        
                        <div>
                            Casey Edwards, Victor Borba
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="text-2xl m-2">
                        3.
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">
                            Bfg Division
                        </div>
                        
                        <div>
                            Mick Gordon
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="text-2xl m-2">
                        4.
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">
                            This Fire
                        </div>
                        
                        <div>
                            Franz Ferdinand
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Dashboard