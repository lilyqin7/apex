function ExecCards({photo, name, position}) {
    return <div className="flex flex-col items-center gap-y-[35px]">
        <img src={photo} alt={name} className="w-[250px] h-[250px] rounded-full object-cover" />
        <div className="flex flex-col text-center text-[24px]">
            <div>{position}</div>
            <div>{name}</div>
        </div>
    </div>
}

export default ExecCards;