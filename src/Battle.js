const Battle = (props = {}) => {
    let players = props.players;
    let name11= "", name12= "", name21= "", name22 = "";
    if (players) {
        name11 = players[0][0].name
        name12 = players[0][1].name
        name21 = players[1][0].name
        name22 = players[1][1].name
    }
    return (
        <div className={"battle-container"}>
            <div className={"player"} style={{width: '36%'}}/>
            <div className={"v-line"}/>
            <div className={"h-line"}/>
            <div className={"playerContainer"}>
                <div className={"player"}>{`${name11} / ${name12}`}</div>
                <div className={"player"} style={{marginLeft: 4}}>{`${name21} / ${name22}`}</div>
            </div>
        </div>
    )
}

export default Battle
