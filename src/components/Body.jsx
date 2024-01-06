import react from "react"

const Body = (imageData) => {
    console.log(imageData.imageData.map)
    return(
    <div>
        <div>
    {
      imageData.imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
  </div>

    )
}
export default Body