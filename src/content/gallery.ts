// Photos for the Gallery page, in the order they appear.
//
// To add a photo: put the file in public/gallery/, then add a line below with its file name
// and a caption. Captions show on hover and when the photo is opened full screen.

export type GalleryPhoto = {
  file: string
  caption: string
}

export const GALLERY: GalleryPhoto[] = [
  { file: 'boho-invisible-locs.jpg', caption: 'Boho invisible locs' },
  { file: 'criss-cross-barrel-twists.jpg', caption: 'Criss cross barrel twists' },
  { file: 'boho-two-strand-twists.jpg', caption: 'Two strand twists with curly ends' },
  { file: 'retwist-two-strand-twists.jpg', caption: 'Retwist & two strand twists' },
  { file: 'twisted-updo-curly-bun.jpg', caption: 'Twisted updo with a curly bun' },
]

export const galleryUrl = (photo: GalleryPhoto) => `/gallery/${photo.file}`
