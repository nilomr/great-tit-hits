import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7.0.0-beta.11/dist/wavesurfer.js'
import Spectrogram from 'https://unpkg.com/wavesurfer.js@7.0.0-beta.11/dist/plugins/spectrogram.js'

import colorMap from '/docs/bone-colormap.json' assert {type: 'json'};

const audioFiles = [
  {id: '1', url: '/docs/media/20211MP66_longest.wav'},
  {id: '2', url: '/docs/media/20221B49_fastest.wav'},
  {id: '3', url: '/docs/media/20221C24C_slow.wav'},
  {id: '4', url: '/docs/media/20221SW49A_standard.wav'},
  {id: '5', url: '/docs/media/O115.mp3'},
];

for (const audioFile of audioFiles) {
  const containerId = `waveform-${audioFile.id}`;
  const spectrogramContainerId = `wave-spectrogram-${audioFile.id}`;

  const wavesurfer = WaveSurfer.create({
    container: `#${containerId}`,
    waveColor: '#3f3f3f',
    progressColor: '#7e5f1c',
    sampleRate: 22050,
    url: audioFile.url,
    height: 100,
    responsive: true,
    hideScrollbar: true,
    cursorColor: "#dfdfdf",
    cursorWidth: 2,
    skipLength: 5,
    normalize: true,
  });

  wavesurfer.registerPlugin(
    Spectrogram.create({
      container: `#${spectrogramContainerId}`,
      colorMap: colorMap,
      fftSamples:1024,
      labels: false,
      frequencyMax: 10000,
      frequencyMin: 1000
    }),
  )

  wavesurfer.once('interaction', () => {
    wavesurfer.play()
  })

  const togglePauseButton = document.querySelector(`.btn-toggle-pause-${audioFile.id}`);

  togglePauseButton.addEventListener('click', function() {
    if (wavesurfer.isPlaying()) {
      wavesurfer.pause();
      togglePauseButton.innerHTML = '<i class="fa fa-play"></i>';
    } else {
      wavesurfer.play();
      togglePauseButton.innerHTML = '<i class="fa fa-pause"></i>';
    }
  });
}