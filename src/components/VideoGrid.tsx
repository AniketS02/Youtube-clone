import { VideoCard } from "./VideoCard"

const VIDEO = [{
    title: "How to do stuffs",
         thumbnail: "/photo-1.jpg",
         logo: "/logo-1.jpg",
         author: "Aniket",
         views: "22M",
         timeStamp: "3 mins ago"
},
    {
        title: "How to do produtive things in life",
        thumbnail: "/photo-2.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "1M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-3.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Unboxing and review of monitor",
        thumbnail: "/photo-4.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-1.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-2.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-3.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-2.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-3.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }, {
        title: "Day in a life of a software engineer at GOOGLE",
        thumbnail: "/photo-1.jpg",
        logo: "/logo-1.jpg",
        author: "Aniket",
        views: "220M",
        timeStamp: "3 mins ago"
    }
]


export function VideoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 gap-4">
            {VIDEO.map(video=><div>
                <VideoCard 
                    title={video.title}
                    thumbnail={video.thumbnail}
                    logo={video.logo}
                    author = {video.author}
                    views = {video.views}
                    timeStamp = {video.timeStamp}
                >
                </VideoCard>
            </div>)}
        </div>
    )
}