import { cdn_Img_Link } from "../Constant"
const Card = ({ name, cuisines, cloudinaryImageId, lastMileDistance }) => {
    // {console.log(cuisines)}
    return (
        <>
            <div className='cardOuter'>
                <img className="h-64 w-64 bord rounded-3xl" src={`${cdn_Img_Link}${cloudinaryImageId}`} />
                <div style={{ marginLeft: '7px' }}>
                    <h5 className="text-lg font-medium w-64" style={{ color: 'rgba(2, 6, 12, 0.75)', fontFamily:'Basis_Grotesque_Pro_Bold' }}>{name}</h5>
                    <h5 className="text-gray-800 w-64" style={{ color: 'rgba(2, 6, 12, 0.6)',fontFamily:'Basis_Grotesque_Pro_Bold' }}>{cuisines.join(" ")}</h5>
                </div>
            </div>
        </>)

}

export default Card

