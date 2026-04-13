<template>
    <div class="w-full py-10 px-4 lg:px-8">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <div
    v-for="(video, index) in videos"
    :key="index"
    data-aos="zoom-in"
    data-aos-delay="150"
    data-aos-duration="900"
    data-aos-easing="ease-in-out"
    class="relative w-full aspect-video overflow-hidden rounded-xl bg-black shadow-lg lg:h-[400px]"
  >
    <iframe
      class="absolute inset-0 w-full h-full "
      :src="video.embedUrl"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/vt4f4biwk9?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/i6klrzlet4?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/lpcehq58wy?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/qufsux10qd?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/agqvs6wdqs?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/ycknmsiuku?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/oot2xgpc1c?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/75he9smhme?autoplay=1",
                },
                {
                    embedUrl: "https://fast.wistia.net/embed/iframe/ujprlakzbt?autoplay=1",
                },
               
            ],
        };
    },
};
</script>
