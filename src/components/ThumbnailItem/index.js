// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    updateActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
