// Photos for the Gallery page, in the order they appear.
//
// To add a photo: put the file in public/gallery/, then add a line below with its file name
// and a caption. Captions show on hover and when the photo is opened full screen.

export type GalleryPhoto = {
  file: string
  caption: string
}

export const GALLERY: GalleryPhoto[] = [
  { file: 'look-01.svg', caption: 'Retwist & style' },
  { file: 'look-02.svg', caption: 'ACV detox + retwist' },
  { file: 'look-03.svg', caption: 'Medium starter locs — comb coils' },
  { file: 'look-04.svg', caption: 'Criss cross barrel + curly buns' },
  { file: 'look-05.svg', caption: 'Invisible locs' },
  { file: 'look-06.svg', caption: 'Water & oil retwist' },
  { file: 'look-07.svg', caption: 'Signature miracle knot installation' },
  { file: 'look-08.svg', caption: 'Full head of repairs' },
  { file: 'look-09.svg', caption: 'Large starter locs — two strand twists' },
  { file: 'look-10.svg', caption: 'Retwist & barrel twists' },
  { file: 'look-11.svg', caption: 'High top reconstruction' },
  { file: 'look-12.svg', caption: 'Wash + retwist & style' },
]

export const galleryUrl = (photo: GalleryPhoto) => `/gallery/${photo.file}`
