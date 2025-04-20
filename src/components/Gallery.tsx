import { useState, Suspense, JSX } from 'react'
import './Gallery.css'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import useMediaQuery from '@mui/material/useMediaQuery'

function Loading () {
  return (
    <div className='loader'>
      <h2>🌀 Loading...</h2>
    </div>
  )
}

interface Item {
  url: string
  alt: string
  title: string
}

interface MasonryImageListProps {
  itemData: Item[]
}

function MasonryImageList ({ itemData }: MasonryImageListProps): JSX.Element {
  const matches: boolean = useMediaQuery('(min-width:600px)')
  const [showFullScreen, setShowFullScreen] = useState<boolean>(false)
  const [startIndex, setStartIndex] = useState<number>(0)

  const galleryImages = itemData.map(item => ({
    original: item.url,
    thumbnail: `${item.url}?w=100&fit=crop&auto=format`,
    originalAlt: item.alt,
    thumbnailAlt: item.alt,
    description: item.title
  }))

  const handleImageClick = (index: number) => {
    setStartIndex(index)
    setShowFullScreen(true)
  }

  const handleCloseFullScreen = () => {
    setShowFullScreen(false)
  }

  return (
    <section className='image-gallery'>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          overflowY: 'hidden',
          '& .MuiImageListItem-img': {
            borderRadius: '2%',
            cursor: 'pointer',
            transition: '0.4s'
          }
        }}
      >
        <Suspense fallback={<Loading />}>
          <ImageList variant='masonry' cols={matches ? 3 : 2} gap={10}>
            {itemData.map((item, index) => (
              <ImageListItem
                key={item.url}
                onClick={() => handleImageClick(index)}
              >
                <img
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  alt={item.alt}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Suspense>
      </Box>
      {showFullScreen && (
        <div className='fullscreen-gallery'>
          <button className='close-button' onClick={handleCloseFullScreen}>
            ✕
          </button>
          <div className='gallery-container'>
            <ImageGallery
              items={galleryImages}
              startIndex={startIndex}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              showThumbnails={false}
              thumbnailPosition='bottom'
              onSlide={() => {}}
              additionalClass='custom-gallery'
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default MasonryImageList
