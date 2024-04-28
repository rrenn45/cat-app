export default function Card({name, breed, url, description, age}){
    return (
        <div className="flex flex-col h-full justify-center w-1/4">
            <img src={url}></img>
            <div className="flex flex-col p-6">
            <h1 className="font-bold">{name}</h1>
            <div className="flex"><p>{breed}</p><p>{age}  {age > 1 ? "years" : "year"}</p></div>
            <p>{description}</p>
            </div>
        </div>
    )
}