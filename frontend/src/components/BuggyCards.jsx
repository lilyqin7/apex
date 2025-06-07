function BuggyCard({image, name}) {
    return <div>
        <img src={image} alt={name} className="w-[532px] pb-[10px]"/>
        <div className="text-center text-[24px]">{name}</div>
    </div>
}

export default BuggyCard;