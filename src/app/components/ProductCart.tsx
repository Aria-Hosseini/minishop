export interface Iproduct {
    id : number,
    name : string ,
    price : string ,
    img : string,
    qnt : number,
}

export default function ProductCart ({name , price}:Iproduct){
    return(
        <>
        <div className="border rounded-lg p-4 shadow hover:shadow-md transition duration-300 bg-white text-right">
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">{price}</p>
          </div>
        </>
    )
}