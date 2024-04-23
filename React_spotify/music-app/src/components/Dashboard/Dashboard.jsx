import { useState } from "react";
import { fetchSpotifyApi } from "../../api/spotifyAPI";


const Dashboard = () =>{
    const [form, setForm] = useState({
        search: '',
        artist: ''
    })

    const [option, setOption] = useState('');

    const types = [
        "album", "artist", "playlist", "track", "show", "episode", "audiobook"
    ]

    const handleChange = (e) =>{
        const newValues = {
            ...form,
            [e.target.name]: e.target.value,
        };
        console.log(newValues);
        setForm(newValues);
    }

    const handleSelectChange = (e) =>{
        console.log(e.target.value);
        setOption(e.target.value);
    }

    
    const handleSearch = async () => {
        const url = "https://api.spotify.com/v1/search"
        const params = new URLSearchParams();

        params.append('q', encodeURIComponent(`remaster track:${form.search} artist:${form.artist}`));
        params.append('type', option);
        const queryString = params.toString();

        const updateURL = `${url}?${queryString}`;

        const token = `Bearer ${localStorage.getItem('token')}`

        const response = await fetchSpotifyApi(
            updateURL,
            'GET',
            null,
            'application/json',
            token
        )
        console.log(response);
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <div className=" m-4 text-4xl">
                Spotify Music
            </div>

            <div className="m-2 border-black border-2">
                <input className="px-2 py-1 " type="text"
                name="search"
                placeholder="Search"
                value={form.search}
                onChange={handleChange}
                />
            </div>
            <div className="m-2 border-black border-2">
                <input className="px-2 py-1 " type="text"
                name="artist"
                placeholder="Artist"
                value={form.artist}
                onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={handleSearch} className=" p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md">
                    Search
                </button>
            </div>

            <div>
                <select name="types" onChange={handleSelectChange}>
                    {types.map((item)=>(
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
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