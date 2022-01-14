import './App.css';
import Battle from "./Battle";
import {useState} from "react";

function App() {
    const [list, setList] = useState('');
    const [playerList, setPlayerList] = useState([]);
    const [resList, setResList] = useState([]);
    const [r1, setR1] = useState([]);
    const [empty, setEmpty] = useState([]);
    const t = (e) => {
        setList(e.target.value)
    }
    const d = () => {
        const lp = list.split("\n")
        let boys = []
        let girls = []
        lp.forEach((_) => {
            _ = _.split("|")
            const p = {name: _[0].trim(), gender: _[1].trim()}
            if (p.gender === '男') {
                boys.push(p)
            } else {
                girls.push(p)
            }
        })
        const r = () => Math.random();
        console.log(boys.length, girls.length);

        let dc = Math.min(boys.length, girls.length);
        console.log(dc)
        boys = boys.sort(() => 0.5 - r)
        girls = girls.sort(() => 0.5 - r)
        const players = []
        for (let i = 0; i < dc; i++) {
            let cup = [boys.pop(), girls.pop()]
            players.push(cup);
        }
        const emptyRound = [];
        let res = [];
        res = res.concat(boys).concat(girls)
        setResList(res)
        setPlayerList(players)
        console.log(players)
        const round1 = [];
        let r1s = players.sort(() => 0.5 - r)
        console.log(r1s)
        while (r1s.length > 2) {
            round1.push([r1s.pop(), r1s.pop()])
        }
        if (r1s.length > 1) {
            emptyRound.push([r1s.pop()])
        }
        setR1(round1)
        setEmpty(emptyRound)
        console.dir(emptyRound)
    }
    return (
        <div className="App">
            <textarea onChange={t}> </textarea>
            <button onClick={d}>抽签</button>
            <div className={"round"}>
                <div className={"roundName"}>
                    <h2>第一轮:</h2>
                </div>
                <div className={"group"}>
                    {r1.map((_, i) => {
                        return <Battle key={i} players={_}/>
                    })}
                </div>
                {empty.length > 0 && <>
                    <div className={"roundName"}>
                        <h2>轮空:</h2>
                    </div>
                    <div className={"empty-round"}>
                        {empty.map((r) => {
                            return <div>{`${r[0].name}/${r[1].name}`}</div>
                        })}
                    </div>
                </>
                }

                <div className={"roundName"}>
                    <h2>待复活:</h2>
                </div>
                <div className={"empty-round"}>
                    {resList.map((r) => {
                        return <div>{r.name}</div>
                    })}
                </div>
            </div>
            <div className={"round"}>
                <div className={"roundName"}>
                    <h2>第二轮:</h2>
                </div>
                <div className={"group"}>
                    <Battle/>
                    <Battle/>
                    <Battle/>
                </div>
                <div className={"roundName"}>
                    <h2>败者组:</h2>
                </div>
                <div className={"group"}>
                    <Battle/>
                    <Battle/>
                </div>
                <div className={"roundName"}>
                    <h2>轮空:</h2>
                </div>
                <div className={"empty-round"}>
                    <div>111/222</div>
                </div>
            </div>
        </div>
    );
}

export default App;
