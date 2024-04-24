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

    const [results, setResults] = useState([]);

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
        setResults(response.tracks.items);
    }

    const getDeviceId = async () =>{
        const token = `Bearer ${localStorage.getItem('token')}`;
        const response = await fetchSpotifyApi(
            'https://api.spotify.com/v1/me/player/devices',
            'GET',
            null,
            'application/json',
            token
        );
        console.log(response);
        return response.devices[0].id;
    }

    const handlePlayMusic = async (song) => {
        const token = `Bearer ${localStorage.getItem('token')}`;
        const data = {
        uris: [song],
        };

        //const id_device = "";

        const playSong = await fetchSpotifyApi(
            `https://api.spotify.com/v1/me/player/play?device_id=${id_device}`,
            'PUT',
            JSON.stringify(data),
            'application/json',
            token
        );
        console.log(playSong);
    }

    const getToken = async () => {
        // stored in the previous step
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    let codeVerifier = localStorage.getItem('code_verifier');
    console.log({ codeVerifier });
    const url = 'https://accounts.spotify.com/api/token';
    //const clientId = '';
    const redirectUri = 'http://localhost:5173/';
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    };

    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem('token', response.access_token);
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <div className=" m-4 text-4xl">
                Spotify Music
            </div>
            <div className="flex justify-center items-center flex-row">
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
            </div>
            
            <div>
                <button onClick={getToken} className=" m-2 p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md">
                    Get Token
                </button>
            </div>
            <div>
                <button onClick={getDeviceId} className=" m-2 p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md">
                    Get Device ID
                </button>
            </div>
            <div>
                <button onClick={handleSearch} className=" p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md">
                    Search
                </button>
            </div>

            <div>
                <select className=" border-2 border-black m-2" name="types" onChange={handleSelectChange}>
                    {types.map((item)=>(
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div>
            {results.length > 0 && (
                <div>
                    {results.map((item, idx)=>(
                        <div className="flex flex-col" key={item.id}>
                            <div className="flex flex-row">
                                <div className="text-2xl m-2">
                                    {idx + 1}
                                </div>
                                <div className=" h-12 w-12 m-2">
                                    <img src={item.album.images[0].url}/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-xl">
                                        {item.name}
                                    </div>
                            
                                     <div>
                                        {item.artists[0].name}
                                    </div>
                                </div>
                                <div className=" self-center mx-2 p-1 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-md">
                                    <button onClick={() => handlePlayMusic(item.uri)}>Play</button>
                                </div>
                            </div> 
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    )
}

export default Dashboard