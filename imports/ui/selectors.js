import R from 'ramda';
import { VISIBILITY_FILTERS } from "./constants";

export const getVideos = store => store.videos

export const getSettings = store => store.settings

export const getVideo = (store, uuid) => {
  if(! store.videos || ! store.videos.data) {
    return false;
  }
  const specificVideo = R.filter(vid => vid.uuid == uuid, store.videos.data)
  return specificVideo[0];
}

export const getVideosFilter = (store) => store.videosFilter;

export const getVideosByVisibilityFilter = (store, filter) => {
  const allVideos = store.videos.data

  let filteredVideos = allVideos;

  if(filter.language)
    filteredVideos = filteredVideos.filter(video => {
      return video.languageCode == filter.language
    })

  if(filter.teacher)
    filteredVideos = filteredVideos.filter(video => {
      return video.tags && video.tags.indexOf(filter.teacher) > -1
    })

  if(filter.style)
    filteredVideos = filteredVideos.filter(video => {
      return video.tags && video.tags.indexOf(filter.style) > -1
    })

  return filteredVideos
}
