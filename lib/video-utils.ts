// Pexels video IDs for maritime/ocean content
export const maritimeVideos = {
  ocean: 3041265, // Ocean waves
  ship: 3045163, // Ship sailing
  maritime: 2961840, // Maritime scene
  port: 3373097, // Port activity
  waves: 3045464, // Ocean waves close-up
}

export const getVideoUrl = (videoId: number) => {
  return `https://videos.pexels.com/video-files/${videoId}/preview-0.51s_Ly7VvXX.mp4`
}

export const maritimeVideoUrls = {
  ocean: "https://videos.pexels.com/video-files/3041265/3041265-preview-0.45s_LOlLWkH.mp4",
  ship: "https://videos.pexels.com/video-files/3045163/3045163-preview-0.45s_HPiS0oT.mp4",
  maritime: "https://videos.pexels.com/video-files/2961840/2961840-preview-0.45s_SqhX65y.mp4",
  port: "https://videos.pexels.com/video-files/3373097/3373097-preview-0.45s_GjIcsKQ.mp4",
  waves: "https://videos.pexels.com/video-files/3045464/3045464-preview-0.45s_AjwKqWz.mp4",
}
