<template>
  <div style="width: 800px">
    <div>header</div>
    <vue-plyr :options="options">
      <video
        controls
        crossorigin
        playsinline
        data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
      >
        <source
          size="576"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
        />
        <source
          size="720"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
        />
        <source
          size="1080"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
        />
        <track
          default
          kind="captions"
          label="English captions"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          srclang="en"
        />
        <track
          kind="captions"
          label="Légendes en français"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
          srclang="fr"
        />
        <a
          download=""
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
        >
          Download
        </a>
      </video>
    </vue-plyr>
    <div>footer</div>
  </div>
</template>

<script>
export default {
  name: "VideoSample",
  setup() {
    const options = {
      title: "View From A Blue Moon",
      // iconUrl: "dist/demo.svg",
      /* keyboard: {
        global: true,
      }, */
      tooltips: {
        controls: true,
      },
      captions: {
        active: true,
      },
      /* previewThumbnails: {
        enabled: true,
        src: [
          "https://cdn.plyr.io/static/demo/thumbs/100p.vtt",
          "https://cdn.plyr.io/static/demo/thumbs/240p.vtt",
        ],
      }, */
      /* mediaMetadata: {
        title: "View From A Blue Moon",
        album: "Sports",
        artist: "Brainfarm",
        artwork: [
          {
            src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
            type: "image/jpeg",
          },
        ],
      }, */
      markers: {
        enabled: true,
        points: [
          {
            time: 10,
            label: "first marker",
          },
          {
            time: 40,
            label: "second marker",
          },
          {
            time: 120,
            label: "<strong>third</strong> marker",
          },
        ],
      },
    };

    return { options };
  },
};
</script>
